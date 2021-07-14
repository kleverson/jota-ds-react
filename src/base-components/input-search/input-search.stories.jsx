import React from 'react';
import InputSearchTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Search',
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
    placeholder: {
      name: 'Placeholder',
      table: {
        category: 'Custom Inputs',
      },
    },
    formName: { table: { disable: true } },
    formID: { table: { disable: true } },
    inputName: { table: { disable: true } },
    inputID: { table: { disable: true } },
    hasPreventDefault: { table: { disable: true } },
    ariaLabel: { table: { disable: true } },
  },
};

export function InputSearch(args) {
  const handleSubmit = formData => {
    formData.entries().forEach(([key, value]) => {
      action('handleSubmit')({ [key]: value });
    });
  };

  const handleChange = value => {
    action('handleInputChange')({ value });
  };

  return (
    <div style={{ width: '320px' }}>
      <InputSearchTag
        {...args}
        handleSubmit={handleSubmit}
        handleInputChange={handleChange}
      ></InputSearchTag>
    </div>
  );
}

InputSearch.args = {
  formName: 'form-search',
  formID: 'form-search',
  inputName: 'input-search',
  inputID: 'input-search',
  placeholder: 'Search',
  ariaLabel: 'Search form',
  hasPreventDefault: true,
  onColor: false,
  disabled: false,
};
