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


function MenuItem({item}) {
  return item.label ? (
    <li
      className={classMap({
        [`${namespace}-Menu__Item`]: true,
        [`${namespace}-Menu__Item--current`]: item.isCurrent,
      })}
      role="none"
    >
      <div
        className={`${namespace}-Menu__ItemContent`}
        aria-haspopup="false"
        aria-expanded="false"
        role="menuitem"
        onClick={() => item.handleClick(item)}
      >
        {item.label}
        {item.tagLabel ? 
          <TagHighlight label={item.tagLabel} role="note" tabIndex={-1}/> : null}
      </div>
    </li>
  ) : null;
}

function MenuItemList({ menuList = [], ariaLabel }) {
  return (
    <ul
      className={`${namespace}-Menu__ItemList`}
      role="menubar"
      aria-orientation="vertical"
      aria-label={ariaLabel}
    >
      {
        menuList.map((menuItem, index) => {
          return <MenuItem item={menuItem} key={index}></MenuItem>
        })}
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
      isCurrent: PropTypes.bool,
      handleClick: PropTypes.func,
      menuItemRef: PropTypes.exact({ current: PropTypes.any }),
    }),
  ),
  ariaLabel: PropTypes.string,
};

export default Menu;
