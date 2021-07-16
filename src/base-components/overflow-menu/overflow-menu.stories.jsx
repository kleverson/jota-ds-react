import React from 'react';
import { action } from '@storybook/addon-actions';
import OverflowMenuTag from './index.js';

export default {
  title: 'Core components react/Overflow Menu',
  argTypes: {
    menuListLength: {
      name: 'Menu List Length',
      control: {
        type: 'range',
        min: 1,
        max: 6,
      },
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      table: { category: 'Modifiers' },
    },
  },
};

export function OverflowMenu(args) {
  const menuList = [];

  for (let i = 1; i <= args.menuListLength; i++) {
    const currentMenuItem = {
      label: `Label ${i}`,
      handleClick: action(`item ${i} click`),
      isCurrent: false
    }
    
    if(i % 2 != 0){
      menuList.push(currentMenuItem);
    } else {
      currentMenuItem.tagLabel = "Tag label";
      menuList.push(currentMenuItem);
    }
  }

  const toggleMenu = () => {
    action('toggleMenu')
  }

  const getCurrentMenuItem = (item) => {
    action('getCurrentMenuItem')(item)
  }

  return <OverflowMenuTag {...args} menuList={menuList} toggleMenu={toggleMenu} getCurrentMenuItem={(item) => getCurrentMenuItem(item)}/>;
}

OverflowMenu.args = {
  onColor: false,
  menuListLength: 3,
};
