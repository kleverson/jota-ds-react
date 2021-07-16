import React from 'react';
import { action } from '@storybook/addon-actions';
import InputSearchTag from './index.js';

export default {
  title: 'Core components react/Input Search',
  argTypes: {
    disabled: {
      name: 'Disabled',
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
    placeholder: {
      name: 'Placeholder',
      table: {
        category: 'Custom Inputs',
      },
    },
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
        formName="form-search"
        formID="form-search"
        inputName="input-search"
        inputID="input-search"
        ariaLabel="Search form"
        hasPreventDefault
      />
    </div>
  );
}

InputSearch.args = {
  placeholder: 'Search',
  onColor: false,
  disabled: false,
};
