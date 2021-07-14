import React from 'react';
import TagCategoryTag from './index.js';

export default {
  title: 'Core components react/Tag Category',
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
      description: 'Digite a label da tag category',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '"Tag category"' },
      },
    },
  },
};

export function TagCategory(args) {
  return <TagCategoryTag {...args}></TagCategoryTag>;
}

TagCategory.args = {
  label: 'Tag category',
  onColor: false,
};
