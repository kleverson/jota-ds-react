import React from 'react';
import AlertTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import { clearContext, setContext } from '@meiuca/context-element-react';

export default {
  title: 'Core components react/Alert',
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'select',
        options: ['check', 'exclamation'],
      },
    },
  },
};

export function Alert(args) {
  const close = isOpen => {
    action('handleClose')({ isOpen: isOpen });
  };

  // setContext({
  //   [`${namespace}-Alert`]: args.styleType,
  // });

  // clearContext(`${namespace}-Alert`)

  return <AlertTag {...args} handleClose={close}></AlertTag>;
}

Alert.args = {
  title: 'Heading X-small',
  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
  icon: 'check',
  isOpen: true,
  // styleType: {},
};
