import React from 'react';
import SwitchTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Switch',
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
    },
    disabled: {
      title: 'disabled',
      description: 'Define se o botao esta desabilitado',
      control: {
        type: 'boolean',
      },
    },
    onColor: {
      title: 'onColor',
      description: 'Define se o botao e onColor',
      control: {
        type: 'boolean',
      },
    }
  },
};

export function Switch(args) {

  function handleChange(e) {
    action('handleChange')({ checked: e });
  }

  return (
    <SwitchTag {...args} handleChange={handleChange}></SwitchTag>
  )
}

Switch.args = {
  label: 'Switch',
  checked: false,
  disabled: false,
  onColor: false
}
