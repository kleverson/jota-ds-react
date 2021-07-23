import React from 'react';
import { action } from '@storybook/addon-actions';
import TagSelectTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Tag Select',
  argTypes: {
    active: {
      name: 'Active',
      description: 'Define se a tag foi clicada ou não',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Define se a tag está ativa ou não',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define se a tag tem a cor invertida',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      name: 'Label',
      description: 'Digite a label da tag select',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '"Tag label"' },
      },
    },
  },
};

export function TagSelect(args) {
  const handleChange = value => {
    action(`handleChange`)({ value });
  };

  return (
    <div>
      <span style={{marginRight: '10px'}}><TagSelectTag {...args} handleChange={handleChange}></TagSelectTag></span>
      <span style={{marginRight: '10px'}}><TagSelectTag {...args} handleChange={handleChange}></TagSelectTag></span>
      <span style={{marginRight: '10px'}}><TagSelectTag {...args} handleChange={handleChange}></TagSelectTag></span>
  </div>
  );
}

TagSelect.args = {
  label: 'Tag label',
  disabled: false,
  onColor: false,
  active: false,
};
