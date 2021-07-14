import React from 'react';
import IconTag from './index.js';
import IconList from '../../utils/icon-list.js';

export default {
  title: 'Core components react/Icon',
  argTypes: {
    icon: {
      name: 'Icon',
      description: 'Selecione o ícone que deseja',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: IconList,
      },
    },
    size: {
      name: 'Size',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export function Icon(args) {
  return <IconTag {...args}></IconTag>;
}

Icon.args = {
  icon: 'chevron-up',
  size: 'small',
};
