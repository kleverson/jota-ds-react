import React from 'react';
import IconShapeTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import IconList from '../../utils/icon-list.js';

export default {
  title: 'Core components react/Icon Shape',
  argTypes: {
    variant: {
      name: 'Variant',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: ['default', 'warning', 'helper'],
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
    icon: {
      name: 'Icon',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: IconList,
      },
    },
  },
};

export function IconShape(args) {
  return <IconShapeTag {...args}></IconShapeTag>;
}

IconShape.args = {
  variant: 'default',
  size: 'small',
  icon: 'shapes',
};
