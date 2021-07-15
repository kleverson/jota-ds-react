import React, { useState, useEffect } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import ButtonIcon from '../button-icon/index.js';
import Menu from '../menu/index.js';

function OverflowMenu({ onColor = false, isOpen = false, menuList, toggleMenu, getCurrentMenuItem }) {
  const [_isOpen, setOpenMenu] = useState(isOpen);
  const [_currentMenuIndex, setCurrentMenuIndex] = useState(-1);
  const [_menuList, _updateMenuList] = useState(menuList);

  const _toggleMenu = isOpen => {
    setOpenMenu(!isOpen);
    
    if(toggleMenu){
      toggleMenu(!isOpen);
    }
  };

  const _handleKeyUp = (e) => {
    if (e.code == 'Escape') {
      setOpenMenu(false);
    }
  }

  const _handleKeyDown = (e) => {
    if (e.code == 'ArrowDown') {
      setOpenMenu(true);
      setCurrentMenuIndex(_currentMenuIndex < _menuList.length - 1 ? _currentMenuIndex + 1 : _menuList.length - 1);
    }

    if (e.code == 'ArrowUp') {
      setCurrentMenuIndex(_currentMenuIndex - 1 < 0 ? 0 : _currentMenuIndex - 1);
    }

    if (e.code == 'Tab') {
      setOpenMenu(false);
    }
  }

  const _getCurrentMenuItem = () => {
    return _menuList.filter(item => item.isCurrent)[0]
  }

  const _setCurrentMenuItem = (menu) => {
    return [...menu].map((menuItem, index) => {
      menuItem.isCurrent = index == _currentMenuIndex;
      return menuItem;
    })
  }

  const _handleBlur = (e) => {
    setOpenMenu(false);
  }

  useEffect(() => {
    _updateMenuList(_setCurrentMenuItem(_menuList));
    
    if(getCurrentMenuItem){
      getCurrentMenuItem(_getCurrentMenuItem())
    }
  }, [_currentMenuIndex])

  return (
    <ContextElement
      contextId={'jota-OverflowMenu'}
      styles={style}
    >
      <div
        className={`${namespace}-OverflowMenu`}
        onKeyUp={(e) => _handleKeyUp(e)}
      >
        <ButtonIcon
          icon={!_isOpen ? "more-horizontal" : "close"}
          size="medium"
          onColor={onColor}
          handleClick={() => _toggleMenu(_isOpen)}
          handleBlur={(e) => _handleBlur(e)}
          handleKeyDown={(e) => _handleKeyDown(e)}
        />
        <Menu isOpen={_isOpen} onColor={onColor} menuList={_menuList} />
      </div>
    </ContextElement>
  );
}

OverflowMenu.propTypes = {
  menuIsOpen: PropTypes.bool,
  onColor: PropTypes.bool,
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      tagLabel: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  isOpen: PropTypes.bool,
  toggleMenu: PropTypes.func,
  getCurrentMenuItem: PropTypes.func
};

export default OverflowMenu;
