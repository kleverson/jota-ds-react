import React from 'react';
import SelectTag from './index.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Select',
  argTypes: {
    disabled: {
      name: 'Disabled',
      table: {
        category: 'Modifiers',
      },
    },
    error: {
      name: 'Error',
      table: {
        category: 'Modifiers',
      },
    },
    optionsLength: {
      name: 'Items',
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6] },
      table: { category: 'Modifiers' },
    },
    onColor: {
      name: 'On Color',
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
    placeholder: {
      name: 'Placeholder',
      table: {
        category: 'Custom Inputs',
      },
    },
    errorMsg: {
      name: 'Error Message',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function InputSelect(args) {
  const options = [];

  for (let i = 1; i <= args.optionsLength; i += 1) {
    options.push(`item ${i}`);
  }

  const _handleChange = value => {
    action(`handleChange`)({ value });
  };

  return <SelectTag {...args} options={options} handleChange={_handleChange}/>;
}

InputSelect.args = {
  label: 'Select',
  placeholder: 'Select',
  errorMsg: 'Helper text',
  disabled: false,
  error: false,
  onColor: false,
  optionsLength: 4,
};
