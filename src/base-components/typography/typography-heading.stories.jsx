import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Heading',
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
    },
    onColor: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large', 'x-large', 'display'],
      },
    },
    variant: {
      description: 'Escolhe o elemento semântico a ser renderizado. (h1, h2, h3, h4, h5, h6)',
      control: null,
      table: {
        type: { summary: 'string' },
        type: 'select',
        options: ['x-small', 'small', 'medium', 'large', 'x-large', 'display'],
        defaultValue: { summary: 'h1' }
      },
    },
  },
};

export function Heading(args) {
  return <Typography {...args}>{args.content}</Typography>;
}

Heading.args = {
  content: 'Heading',
  size: 'x-large',
  component: 'heading',
  onColor: false,
};

Heading.argTypes = {
  variant: { table: { disable: true } },
  component: { table: { disable: true } },
};
