import React from 'react';
import WelcomeTag from './index.js';

export default {
  title: 'Welcome',

  parameters: {
    options: {
      showPanel: false,
      isToolshown: false,
    },
  },
};

export function Welcome() {
  return <WelcomeTag></WelcomeTag>;
}
