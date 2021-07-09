import React from 'react';
import InputSearchTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Search',
  argTypes: {
    formName: {
      control: {
        type: 'text'
      },
    },
    placeholder: {
      control: {
        type: 'text'
      },
    },
    ariaLabel: {
      control: {
        type: 'text'
      },
    },
    hasPreventDefault: {
      control: {
        type: 'text'
      },
    }
  },
};

export function InputSearch(args) {
  const handleSubmit = (formData) => {
    for (var [key, value] of formData.entries()) { 
      action('handleSubmit')({[key]: value});
    }
  }

  const handleChange = (value) => {
    action('handleInputChange')({'value': value});
  }

  return (
    <div style={{width: '320px'}}>
      <InputSearchTag {...args} handleSubmit={handleSubmit} handleInputChange={handleChange}></InputSearchTag>
    </div>
  )
}

InputSearch.args = {
  formName: "form-search",
  formID: "form-search",
  inputName: "input-search",
  inputID: "input-search",
  placeholder: "Search",
  ariaLabel: "Search form",
  hasPreventDefault: true,
  onColor: false,
  disabled: false,
}

InputSearch.argTypes = {
  formName: { table: { disable: true } },
  formID: { table: { disable: true } },
  inputName: { table: { disable: true } },
  inputID: { table: { disable: true } },
  hasPreventDefault: { table: { disable: true } },
  ariaLabel: { table: { disable: true } },
};

