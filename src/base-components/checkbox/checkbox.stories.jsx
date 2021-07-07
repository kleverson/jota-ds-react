import React from 'react';
import { action } from '@storybook/addon-actions';
import CheckboxTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Input Checkbox',
  name: 'Checkbox',
  argTypes: {
    value: {
      title: 'Value',
      description: 'Define qual o nome do Checkbox',
      control: {
        type: 'text',
      },
    },
    checked: {
      title: 'Checked',
      checked: 'Define se o checkbox ficará marcado',
    },
    disabled: {
      title: 'Disabled',
      checked: 'Define se o checkbox ficará desabilitado',
    },
    onColor: {
      title: 'onColor',
      description: 'Define o estilo inverso, com background',
    },
  },
};

export function InputCheckbox(args) {
  function _handleChange(e) {
    action('handleChange')({ checked: e });
  }

  return <CheckboxTag {...args} handleChange={_handleChange}></CheckboxTag>;
}

InputCheckbox.args = {
  value: 'Checkbox',
  checked: true,
  disabled: false,
  onColor: false,
  name: 'ck_name',
};
