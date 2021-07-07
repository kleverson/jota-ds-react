import React from 'react';
import InputTextTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Text',
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
    },
    helperText: {
      control: {
        type: 'text'
      },
    },
    showHelper: {
      control: {
        type: 'boolean'
      },
    },
    maxLength: {
      control: {
        type: 'number'
      },
    },
    error: {
      control: {
        type: 'boolean'
      },
    },
    onColor: {
      control: {
        type: 'boolean'
      },
    },
    disabled: {
      control: {
        type: 'boolean'
      },
    },
    id: {
      description: 'Identificador do formulário e atributo que auxilia na ordem de foco para leitores de tela',
      control: null,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'textarea' },
        category: 'Acessibility'
      }
    },
  },
};

export function InputText(args) {
  const handleChange = (value) => {
    action(`handleChange`)({ value: value });
  }

  const handleFocus = (e) => {
    action(`handleFocus`)({ event: e });
  }

  return (
    <InputTextTag {...args} handleChange={handleChange} handleFocus={handleFocus}></InputTextTag>
  )
}

InputText.args = {
  label: 'Label',
  helperText: 'Helper text',
  showHelper: true,
  placeholder: 'Type here...',
  maxLength: 50,
  error: false,
  onColor: false,
  disabled: false,
}
