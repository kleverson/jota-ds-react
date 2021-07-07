import React from 'react';
import SelectTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Select',
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
    },
    placeholder: {
      control: {
        type: 'text'
      },
    },
    errorMsg: {
      control: {
        type: 'text'
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    onColor: {
      control: {
        type: 'boolean',
      },
    }
  },
};

export function InputSelect(args) {
  return (
    <SelectTag {...args}></SelectTag>
  )
}

InputSelect.args = {
  label: "Select",
  placeholder: "Select",
  errorMsg: "Error",
  disabled: false,
  error: false,
  onColor: false,
  options: ['label 1', 'label 2', 'label 3']
}
