import React from 'react';
import { action } from '@storybook/addon-actions';
import RadioButtonTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Input Radio Button',
  name: 'Radiobutton',
  argTypes: {
    onColor: {
      title: 'onColor',
      description: 'Define o estilo inverso, com background',
    },
  },
};

export function InputRadioButton(args) {
  function handleChange(e) {
    action(`${namespace}Change`)({ checked: e });
  }

  return <div> <RadioButtonTag {...args} handleChange={handleChange}></RadioButtonTag> </div>;
}

InputRadioButton.args = {
  onColor: false,
  listData: [
    { 
      label: 'Label A',
      value: 'A',
      checked: true,
      disabled: false,
    },
    { 
      label: 'Label B',
      value: 'B',
      checked: false,
      disabled: false,
    },
    { 
      label: 'Label C',
      value: 'C',
      checked: false,
      disabled: true,
    },
  ]
};

InputRadioButton.argTypes = {
  listData: { table: { disable: true } }
};