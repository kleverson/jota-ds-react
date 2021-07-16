import React from 'react';
import { action } from '@storybook/addon-actions';
import SwitchTag from './index.js';

export default {
  title: 'Core components react/Switch',
  argTypes: {
    checked: {
      name: 'Selected',
      table: { category: 'Modifiers' },
    },
    disabled: {
      name: 'Disabled',
      description: 'Define se o botao esta desabilitado',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define se o botao e onColor',
      table: {
        category: 'Modifiers',
      },
    },
    label: {
      name: 'Label',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Switch(args) {
  function handleChange(e) {
    action('handleChange')({ checked: e });
  }

  return <SwitchTag {...args} handleChange={handleChange} />;
}

Switch.args = {
  label: 'Switch',
  checked: false,
  disabled: false,
  onColor: false,
};
