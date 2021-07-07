import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Paragraph',
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
        options: ['small', 'large'],
      },
    },
    variant: {
      description: 'Escolhe o elemento semântico a ser renderizado. (h1, h2, h3, h4, h5, h6)',
      control: null,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'h1' },
        category: 'Acessibility',
      },
    },
  },
};

export function Paragraph(args) {
  return <Typography {...args}>{args.content}</Typography>;
}

Paragraph.args = {
  content: 'Paragraph',
  size: 'large',
  component: 'paragraph',
  onColor: false,
};

Paragraph.argTypes = {
  variant: { table: { disable: true } },
  component: { table: { disable: true } },
};
