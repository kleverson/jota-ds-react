import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Caption',
  argTypes: {
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

export function Caption(args) {
  return (
    <Typography {...args} component="caption">
      {args.content}
    </Typography>
  );
}

Caption.args = {
  content: 'Caption',
  onColor: false,
};
