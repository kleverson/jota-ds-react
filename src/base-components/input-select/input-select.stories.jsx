import React from 'react';
import SelectTag from './index.js';

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
      control: { type: 'range', min: 1, max: 6 },
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

  return <SelectTag {...args} options={options} />;
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
