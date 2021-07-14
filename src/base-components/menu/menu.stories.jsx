import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuTag from './index.js';

export default {
  title: 'Core components react/Menu',
  argTypes: {
    isOpen: {
      name: 'Open',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    menuListLength: {
      name: 'Menu List Length',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'range',
        min: 0,
        max: 6,
      },
    },
  },
};

export function Menu(args) {
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

  return (
    <div style={{ width: '240px' }}>
      <MenuTag {...args} menuList={menuList}></MenuTag>
    </div>
  );
}

Menu.args = {
  isOpen: true,
  onColor: false,
  menuListLength: 3,
};

Menu.argTypes = {
  menuList: { table: { disable: true } },
};
