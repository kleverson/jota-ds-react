import React from 'react';
import ButtonIconTag from './index.js';
import IconList from '../../utils/icon-list.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Button Icon',
  argTypes: {
    size: {
      name: 'Size',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    icon: {
      name: 'Icon',
      description: 'Selecione o ícone que deseja',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: IconList,
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define se o botao é onColor',
      table: {
        category: 'Modifiers',
      },
    },
  },
};

export function ButtonIcon(args) {
  const _handleClick = e => {
    action(`handleClick`)({ event: e });
  };

  const _handleBlur = e => {
    action(`handleBlur`)({ event: e });
  };

  const _handleKeyDown = e => {
    action(`handleKeyDown`)({ event: e });
  };

  return <ButtonIconTag {...args} handleClick={_handleClick} handleBlur={_handleBlur} handleKeyDown={_handleKeyDown} />;
}

ButtonIcon.args = {
  size: 'small',
  icon: 'shapes',
  onColor: false,
};
