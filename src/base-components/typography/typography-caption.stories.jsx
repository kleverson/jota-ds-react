import React from 'react';
import Typography from './index.js';

export default {
  title: 'Core components react/Typography/Caption',
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
  },
};

export function Caption(args) {
  return <Typography {...args}>{args.content}</Typography>;
}

Caption.args = {
  content: 'Caption',
  component: 'caption',
  onColor: false,
};

Caption.argTypes = {
  variant: { table: { disable: true } },
  component: { table: { disable: true } },
};
