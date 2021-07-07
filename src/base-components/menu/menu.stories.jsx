import React from 'react';
import { action } from '@storybook/addon-actions';
import MenuTag from './index.js';

export default {
  title: 'Core components react/Menu',
  argTypes: {},
};

export function Menu(args) {
  return (
    <div style={{ width: '240px' }}>
      <MenuTag {...args}></MenuTag>
    </div>
  );
}

Menu.args = {
  menuList: [
    {
      label: 'Label 1',
      handleClick: action('item 1 click'),
    },
    {
      label: 'Label 2',
      handleClick: action('item 2 click'),
    },
    {
      label: 'Label 3',
      tagLabel: 'Tag',
      handleClick: action('item 3 click'),
    },
    {
      label: 'Label 4',
      handleClick: action('item 4 click'),
    },
    {
      label: 'Label 5',
      handleClick: action('item 5 click'),
    },
    {
      label: 'Label 6',
      handleClick: action('item 6 click'),
    },
  ],
  isOpen: true,
  onColor: false,
};
