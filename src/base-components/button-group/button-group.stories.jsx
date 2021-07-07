import React from 'react';
import ButtonGroupTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Button Group',
  argTypes: {
    primaryLabel: {
      control: {
        type: 'text'
      },
    },
    tertiaryLabel: {
      control: {
        type: 'text'
      },
    },
    primaryDisabled: {
      control: {
        type: 'boolean'
      },
    },
    tertiaryDisabled: {
      control: {
        type: 'boolean'
      },
    },
    onColor: {
      control: {
        type: 'boolean'
      },
    }
  },
};

export function ButtonGroup(args) {
  const handleConfirm = (e) => {
    action(`handleConfirm`)({ event: e });
  }

  const handleCancel = (e) => {
    action(`handleCancel`)({ event: e });
  }

  return (
    <ButtonGroupTag {...args} handleConfirm={handleConfirm} handleCancel={handleCancel}></ButtonGroupTag>
  )
}

ButtonGroup.args = {
  primaryLabel: "Label",
  tertiaryLabel: "Label",
  primaryDisabled: false,
  tertiaryDisabled: false,
  onColor: false
}
