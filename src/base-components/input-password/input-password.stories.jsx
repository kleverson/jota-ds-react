import React from 'react';
import InputPasswordTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Password',
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Define se o input está ativo ou não',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    maxLength: {
      name: 'Max Length',
      description: 'Define a quantidade máxima de caracteres do input',
      table: {
        category: 'Modifiers',
        type: { summary: 'number' },
        defaultValue: { summary: 16 },
      },
    },
    error: {
      name: 'Error',
      description: 'Define se o input está com erro ou não',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define se o input tem a cor invertida',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    helperText: {
      name: 'Helper Text',
      description: 'Define o texto da mensagem do input',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: 'Helper text' },
      },
    },
    label: {
      name: 'Label',
      description: 'Define a label do input',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: 'Label' },
      },
    },
    placeholder: {
      name: 'Placeholder',
      description: 'Define o placeholder do input',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: 'Insira a sua senha' },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        // WC em código React?
        // code: `<${namespace}-input-password></${namespace}-input-password>`
      },
    },
  },
};

export function InputPassword(args) {
  const handleChange = value => {
    action(`handleChange`)({ value });
  };

  const handleFocus = e => {
    action(`handleFocus`)({ event: e });
  };

  return (
    <InputPasswordTag
      {...args}
      handleChange={handleChange}
      handleFocus={handleFocus}
    ></InputPasswordTag>
  );
}

InputPassword.args = {
  label: 'Label',
  helperText: 'Helper text',
  placeholder: 'Type here...',
  maxLength: 16,
  error: false,
  onColor: false,
  disabled: false,
};
