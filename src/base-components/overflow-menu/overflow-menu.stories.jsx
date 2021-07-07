import React from 'react';
import OverflowMenuTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Overflow Menu',
  argTypes: {
    
  },
};

export function OverflowMenu(args) {
  const toggleMenu = (isOpen) => {
    //action('toggleMenu')({isOpen: isOpen});
  }

  return (
    <OverflowMenuTag {...args} toggleMenu={() => console.log("bla")}></OverflowMenuTag>
  )
}

OverflowMenu.args = {
  onColor: false,
  menuList: [
    {
      label: 'Label 1',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 2',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 3',
      tagLabel: 'Tag',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 4',
      tagLabel: 'Tag',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 5',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    }
  ]
}
