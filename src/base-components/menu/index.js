/* eslint-disable no-param-reassign */
/* 
  feito com base em: https://www.w3.org/TR/wai-aria-practices-1.1/examples/menubar/menubar-1/menubar-1.html#
*/

import React, { useState } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import classMap from '@meiuca/context-element-react/directives/class-map.js';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import TagHighlight from '../tag-highlight/index.js';
import KeyboardEventHandler from '../../mixins/keyboard-handler.js';

function resetList(array) {
  array.forEach((item, index) => {
    if (index === 0) {
      item.menuItemRef.current.tabIndex = 0;
    } else {
      item.menuItemRef.current.tabIndex = -1;
    }

    if (item.menuItemRef.haveFocus) {
      item.menuItemRef.haveFocus = false;
      item.menuItemRef.current.blur();
      item.menuItemRef.setFocusVisible(false);
    }
  });
}

function handleFocusChange(current, target) {
  current.menuItemRef.current.tabIndex = -1;
  current.menuItemRef.haveFocus = false;
  current.menuItemRef.setFocusVisible(false);

  if (target) {
    target.menuItemRef.current.tabIndex = 0;
    target.menuItemRef.haveFocus = true;
    target.menuItemRef.current.focus();
    target.menuItemRef.setFocusVisible(true);
  }
}

function keyboardHandler(item, index, array) {
  const nextItem = array[index + 1];
  const previousItem = array[index - 1];

  return KeyboardEventHandler({
    Enter: () => item.handleClick?.(item),
    ArrowDown: () => handleFocusChange(item, nextItem),
    ArrowUp: () => handleFocusChange(item, previousItem),
    Escape: () => resetList(array),
    Tab: () => item.menuItemRef.setFocusVisible(true),
  });
}

function renderItemList(item, index, array) {
  const [focusVisible, setFocusVisible] = useState(false);

  item.menuItemRef.setFocusVisible = setFocusVisible;

  return item.label ? (
    <li
      key={index}
      className={classMap({
        [`${namespace}-Menu__Item`]: true,
        [`${namespace}-Menu__Item--FocusVisible`]: focusVisible,
      })}
      role="none"
    >
      <div
        ref={item.menuItemRef}
        className={`${namespace}-Menu__ItemContent`}
        aria-haspopup="false"
        aria-expanded="false"
        tabIndex={index === 0 ? 0 : -1}
        role="menuitem"
        onClick={() => item.handleClick?.(item)}
        onKeyUp={keyboardHandler(item, index, array)}
      >
        {item.label}
        {item.tagLabel ? <TagHighlight label={item.tagLabel} tabIndex={-1} role="note" /> : null}
      </div>
    </li>
  ) : null;
}

// eslint-disable-next-line react/prop-types
function MenuItemList({ menuList = [], ariaLabel }) {
  menuList.forEach((item, index) => {
    item.menuItemRef = item.menuItemRef || { current: undefined };

    if (index === 0) {
      item.menuItemRef.haveFocus = true;
    }
  });

  return (
    <ul
      className={`${namespace}-Menu__ItemList`}
      role="menubar"
      aria-orientation="vertical"
      aria-label={ariaLabel}
    >
      {menuList.map(renderItemList)}
    </ul>
  );
}

function Menu({ menuList = [], isOpen, ariaLabel = 'Menu' }) {
  return (
    <ContextElement contextId={`${namespace}-Menu`} styles={style}>
      <nav
        className={classMap({ [`${namespace}-Menu`]: true, [`${namespace}-Menu--open`]: isOpen })}
        aria-label={ariaLabel}
      >
        <MenuItemList menuList={menuList} ariaLabel={ariaLabel} />
      </nav>
    </ContextElement>
  );
}

Menu.propTypes = {
  isOpen: PropTypes.bool,
  menuList: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      tagLabel: PropTypes.string,
      handleClick: PropTypes.func,
      menuItemRef: PropTypes.exact({ current: PropTypes.any }),
    }),
  ),
  ariaLabel: PropTypes.string,
};

export default Menu;
