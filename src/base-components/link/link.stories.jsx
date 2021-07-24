import { action } from '@storybook/addon-actions';
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
    icon: {
      name: 'Type',
      table: {
        category: 'Modifiers',
      },
      options: ['Link', 'Link Arrow'],
      mapping: { Link: false, 'Link Arrow': true },
      control: {
        type: 'select',
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
    onColor: {
      name: 'On Color',
      description: 'Define se o link tem a cor invertida',
      table: {
        category: 'Modifiers',
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
  const handleClick = e => {
    if (args.target === '_self') {
      e.preventDefault();
      action('handleClick')();
    }
  };

  return <LinkTag {...args} handleClick={handleClick}></LinkTag>;
}

Link.args = {
  label: 'Link',
  disabled: false,
  icon: 'Link',
  onColor: false,
  href: '/',
  target: 'New Tab',
};
