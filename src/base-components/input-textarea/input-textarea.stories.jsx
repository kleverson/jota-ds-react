import React from 'react';
import InputTextareaTag from './index.js';

export default {
  title: 'Core components react/Input Textarea',
  argTypes: {
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    disabled: {
      name: 'Disabled',
      table: {
        category: 'Modifiers',
      },
    },
    showHelper: {
      name: 'Show Helper',
      table: {
        category: 'Modifiers',
      },
    },
    maxLength: {
      name: 'Max Length',
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
    label: {
      name: 'Label',
      table: {
        category: 'Custom Inputs',
      },
    },
    helperText: {
      name: 'Helper Text',
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
