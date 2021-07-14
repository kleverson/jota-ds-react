import React from 'react';
import { action } from '@storybook/addon-actions';
import InputTextTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Input Text',
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

export function InputText(args) {
  const handleChange = value => {
    action(`handleChange`)({ value });
  };

  const handleFocus = e => {
    action(`handleFocus`)({ event: e });
  };

  return (
    <InputTextTag {...args} handleChange={handleChange} handleFocus={handleFocus}></InputTextTag>
  );
}

InputText.args = {
  label: 'Label',
  helperText: 'Helper text',
  placeholder: 'Type here...',
  maxLength: 50,
  error: false,
  onColor: false,
  disabled: false,
};
