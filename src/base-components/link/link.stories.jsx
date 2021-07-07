import React from 'react';
import LinkTag from './index.js';

export default {
  title: 'Core components react/Link',
  argTypes: {
    label: {
      title: 'Label',
      description: 'Digite a label do link',
      defaultValue: 'Text Link',
      control: {
        type: 'text',
      },
    },
    disabled: {
      title: 'Disabled',
      description: 'Define se o link está ativo ou não',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    onColor: {
      title: 'Inverse',
      description: 'Define se o link tem a cor invertida',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    icon: {
      title: 'icon',
      description: 'Define se o link tem ícone ou não',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    target: {
      control: {
        type: 'select',
        options: ['_blank', '_self'],
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
  target: '_blank',
};
