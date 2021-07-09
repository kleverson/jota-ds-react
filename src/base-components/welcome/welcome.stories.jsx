import React from 'react';
import WelcomeTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Getting Started/Welcome',
  argTypes: {
    title: {
      control: {
        type: 'text'
      },
    }
  },
};

export function Welcome(args) {
  return (
    <WelcomeTag {...args}></WelcomeTag>
  )
}

Welcome.args = {
  title: "Welcome"
}
