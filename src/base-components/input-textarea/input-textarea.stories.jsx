import React from 'react';
import InputTextareaTag from './index.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Textarea',
  argTypes: {
    disabled: {
      name: 'Disabled',
      table: {
        category: 'Modifiers',
      },
    },
    maxLength: {
      name: 'Max Length',
      control: { max: 999 },
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
    error: {
      name: 'Error',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    helperText: {
      name: 'Helper Text',
      table: {
        category: 'Custom Inputs',
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
  },
};

export function InputTextarea(args) {

  const handleChange = value => {
    action('handleChange')({ value });
  };
  
  return <InputTextareaTag {...args} handleChange={handleChange}></InputTextareaTag>;
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
