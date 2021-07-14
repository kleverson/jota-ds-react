import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Subtitle',
  argTypes: {
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
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
    content: {
      name: 'Content',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Subtitle(args) {
  return (
    <Typography {...args} component="subtitle">
      {args.content}
    </Typography>
  );
}

Subtitle.args = {
  content: 'Subtitle',
  size: 'large',
  onColor: false,
};
