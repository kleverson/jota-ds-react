import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Paragraph',
  argTypes: {
    size: {
      name: 'Size',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    content: {
      name: 'Content',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Paragraph(args) {
  return (
    <Typography {...args} component="paragraph">
      {args.content}
    </Typography>
  );
}

Paragraph.args = {
  content: 'Paragraph',
  size: 'large',
  onColor: false,
};
