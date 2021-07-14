import React, { useState } from 'react';
import NotificationTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import Button from '../button/index.js';

export default {
  title: 'Core components react/Notification',
  argTypes: {
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
      name: 'Button Text',
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
        code: `<Notification\n  buttonText=""\n  content=""\n  handleClose={function(){}}\n  handleConfirm={function(){}}\n  title=""\n/>`,
      },
    },
  },
};

export function Notification(args) {
  const [isOpen, setIsOpen] = useState(false);

  const _handleConfirm = e => {
    setIsOpen(false);
    action(`handleConfirm`)({ event: e });
  };

  const _handleClose = e => {
    setIsOpen(false);
    action(`handleClose`)({ event: e });
  };

  const _openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      {!isOpen ? (
        <Button label="Open notification" type="primary" handleClick={_openModal}></Button>
      ) : null}
      <NotificationTag
        {...args}
        isOpen={isOpen}
        handleConfirm={_handleConfirm}
        handleClose={_handleClose}
      />
    </div>
  );
}

Notification.args = {
  title: 'Heading Large',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet lorem tellus, non cursus leo cursus a. Aenean commodo aliquam aliquet. Vivamus tempus nulla sit amet magna rutrum',
  buttonText: 'Button Primary',
  onColor: false,
};
