import React from 'react';
import { action } from '@storybook/addon-actions';
import { clearContext, setContext } from '@meiuca/context-element-react';
import AlertTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Alert',
  argTypes: {
    icon: {
      name: 'Icon',
      control: {
        type: 'select',
        options: ['check', 'exclamation'],
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
    text: {
      name: 'Text',
      table: {
        category: 'Custom Inputs',
      },
    },
    title: {
      name: 'Title',
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
  icon: 'check',
  isOpen: true,
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  title: 'Heading X-small',
  // styleType: {},
};
