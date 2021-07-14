import React from 'react';
import LinkTag from './index.js';

export default {
  title: 'Core components react/Link',
  argTypes: {
    disabled: {
      name: 'Disabled',
      description: 'Define se o link está ativo ou não',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define se o link tem a cor invertida',
      table: {
        category: 'Modifiers',
      },
    },
    icon: {
      name: 'Icon',
      description: 'Define se o link tem ícone ou não',
      table: {
        category: 'Modifiers',
      },
    },
    target: {
      name: 'Target',
      table: {
        category: 'Modifiers',
      },
      options: ['New Tab', 'Same Tab'],
      mapping: { 'New Tab': '_blank', 'Same Tab': '_self' },
      control: {
        type: 'select',
      },
    },
    label: {
      name: 'Label',
      description: 'Digite a label do link',
      table: {
        category: 'Custom Inputs',
      },
    },
    href: {
      name: 'Link Address',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Link(args) {
  return <LinkTag {...args}></LinkTag>;
}

Link.args = {
  label: 'Link',
  disabled: false,
  icon: false,
  onColor: false,
  href: '/',
  target: 'New Tab',
};
