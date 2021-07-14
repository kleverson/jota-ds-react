import React from 'react';
import TagHighlightTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Tag Highlight',
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
      description: 'Digite a label da tag highlight',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '"Tag Highlight"' },
      },
    },
  },
};

export function TagHighlight(args) {
  return <TagHighlightTag {...args}></TagHighlightTag>;
}

TagHighlight.args = {
  label: 'Tag Highlight',
  onColor: false,
};
