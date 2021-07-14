import React from 'react';
import { action } from '@storybook/addon-actions';
import TagSelectTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Tag Select',
  argTypes: {
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
    disabled: {
      name: 'Disabled',
      description: 'Define se a tag está ativa ou não',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    active: {
      name: 'Checked',
      description: 'Define se a tag foi clicada ou não',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },

    /* handleChange: {
      description: 'Evento emitido ao clicar na tag',
      table: {
        type: { summary: 'CustomEvent' },
        defaultValue: { summary: 'null' },
        category: 'Events',
      },
    }, */
  },
};

export function TagSelect(args) {
  const handleChange = value => {
    action(`handleChange`)({ value });
  };

  return <TagSelectTag {...args} handleChange={handleChange}></TagSelectTag>;
}

TagSelect.args = {
  label: 'Tag label',
  disabled: false,
  onColor: false,
  active: false,
};
