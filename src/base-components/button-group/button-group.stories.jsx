import React from 'react';
import ButtonGroupTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Button Group',
  argTypes: {
    primaryDisabled: {
      name: 'Primary Disabled',
      table: {
        category: 'Modifiers',
      },
    },
    tertiaryDisabled: {
      name: 'Tertiary Disabled',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    primaryLabel: {
      name: 'Primary Label',
      table: {
        category: 'Custom Inputs',
      },
    },
    tertiaryLabel: {
      name: 'Tertiary Label',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function ButtonGroup(args) {
  const handleConfirm = e => {
    action(`handleConfirm`)({ event: e });
  };

  const handleCancel = e => {
    action(`handleCancel`)({ event: e });
  };

  return (
    <ButtonGroupTag
      {...args}
      handleConfirm={handleConfirm}
      handleCancel={handleCancel}
    ></ButtonGroupTag>
  );
}

ButtonGroup.args = {
  primaryLabel: 'Label',
  tertiaryLabel: 'Label',
  primaryDisabled: false,
  tertiaryDisabled: false,
  onColor: false,
};
