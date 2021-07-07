import React, {useState} from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import ButtonIcon from '../button-icon/index.js';
import Menu from '../menu/index.js';

function OverflowMenu({
  onColor = false, 
  isOpen = false,
  menuList,
  toggleMenu
}){
  const [_isOpen, setOpenMenu] = useState(isOpen);

  const _toggleMenu = (isOpen) => {
    setOpenMenu(!isOpen)
    //toggleMenu(!isOpen);
  }

  return (
    <ContextElement contextId={`${namespace}-OverflowMenu`} styles={style}>
      <div
        className={`
          ${namespace}-OverflowMenu
        `}
      >
        <ButtonIcon icon="more-horizontal" size="medium" onColor={onColor} handleClick={(e) => _toggleMenu(_isOpen)}/>
        <Menu isOpen={_isOpen} onColor={onColor} menuList={menuList}/>
      </div>
    </ContextElement>
  )
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
  )
};

export default OverflowMenu;