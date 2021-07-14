import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckboxTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Input Checkbox',
  name: 'Checkbox',
  argTypes: {
    checked: {
      name: 'Checked',
      description: 'Define se o checkbox ficará marcado',
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Define se o checkbox ficará desabilitado',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define o estilo inverso, com background',
      table: {
        category: 'Modifiers',
      },
    },
    value: {
      name: 'Value',
      description: 'Define qual o conteúdo do Checkbox',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function InputCheckbox(args) {
  function _handleChange(e) {
    action('handleChange')({ checked: e });
  }

  return <CheckboxTag {...args} name="ck_name" handleChange={_handleChange}></CheckboxTag>;
}

InputCheckbox.args = {
  value: 'Checkbox',
  checked: true,
  disabled: false,
  onColor: false,
};
