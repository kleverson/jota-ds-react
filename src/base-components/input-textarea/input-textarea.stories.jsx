import React from 'react';
import InputTextareaTag from './index.js';

export default {
  title: 'Core components react/Input Textarea',
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
      },
    },
    showHelper: {
      control: {
        type: 'boolean',
      },
    },
    maxLength: {
      control: {
        type: 'number',
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
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    }
  },
};

export function InputTextarea(args) {
  return <InputTextareaTag {...args}></InputTextareaTag>;
}

InputTextarea.args = {
  label: 'Label',
  helperText: 'Helper text',
  showHelper: false,
  placeholder: 'Type here...',
  maxLength: 200,
  error: false,
  onColor: false,
  disabled: false,
};
