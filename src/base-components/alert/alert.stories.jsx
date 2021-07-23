import React from 'react';
import { action } from '@storybook/addon-actions';
import { clearContext, setContext } from '@meiuca/context-element-react';
import AlertTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Alert',
  argTypes: {
    type: {
      name: 'Type',
      control: {
        type: 'select',
        // options: ['check', 'exclamation'],
        options: ['helper', 'warning'],
      },
      table: {
        category: 'Modifiers',
      },
    },
    isOpen: {
      name: 'Open',
      table: {
        category: 'Modifiers',
      },
    },
    title: {
      name: 'Title',
      table: {
        category: 'Custom Inputs',
      },
    },
    text: {
      name: 'Paragraph',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Alert(args) {
  const close = isOpen => {
    action('handleClose')({ isOpen });
  };

  // setContext({
  // [`${namespace}-Alert`]: args.styleType,
  // });

  // clearContext(`${namespace}-Alert`)

  return <AlertTag {...args} handleClose={close}></AlertTag>;
}

Alert.args = {
  type: 'helper',
  isOpen: true,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  title: 'Heading X-small',
  // styleType: {},
};
