import React from 'react';
import IconShapeTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import iconsArr from '../../utils/icon-list.js';


export default {
  title: 'Core components react/Icon Shape',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'warning', 'helper'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    icon: {
      control: {
        type: 'select',
        options: iconsArr,
      },
    },
  },
};

export function IconShape(args) {
  return (
    <IconShapeTag {...args}></IconShapeTag>
  )
}

IconShape.args = {
  variant: 'default',
  size: 'small',
  icon: 'shapes',
}
