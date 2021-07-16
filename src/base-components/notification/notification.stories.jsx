import React from 'react';
import { action } from '@storybook/addon-actions';
import NotificationTag from './index.js';

export default {
  title: 'Core components react/Notification',
  argTypes: {
    isOpen: {
      name: 'Open',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define se o notification tem a cor invertida',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    title: {
      name: 'Title',
      description: 'Define o título do notification',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '"Heading Large"' },
      },
    },
    content: {
      name: 'Content',
      description: 'Define o conteúdo do notification',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: {
          summary: 'Lorem ipsum',
        },
      },
    },
    buttonText: {
      name: 'Button Label',
      description: 'Define o texto do botão',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '"Button Primary"' },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<Notification\n  isOpen\n  content=""\n  handleClose={function(){}}\n  handleConfirm={function(){}}\n  title=""\n/>`,
      },
    },
  },
};

export function Notification(args) {
  const _handleConfirm = e => {
    action(`handleConfirm`)({ event: e });
  };

  const _handleClose = e => {
    action(`handleClose`)({ event: e });
  };

  return <NotificationTag {...args} handleConfirm={_handleConfirm} handleClose={_handleClose} />;
}

Notification.args = {
  title: 'Heading Large',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet lorem tellus, non cursus leo cursus a. Aenean commodo aliquam aliquet. Vivamus tempus nulla sit amet magna rutrum',
  buttonText: 'Button Primary',
  onColor: false,
  isOpen: true,
};
