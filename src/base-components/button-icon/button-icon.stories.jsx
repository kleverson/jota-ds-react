import React from 'react';
import ButtonIconTag from './index.js';
import iconsArr from '../../utils/icon-list.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Button Icon',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ["small", "medium", 'large'],
      },
    },
    icon: {
      title: 'Ícone',
      description: 'Selecione o ícone que deseja',
      control: {
        type: 'select',
        options: iconsArr,
      },
    },
    onColor: {
      title: 'onColor',
      description: 'Define se o botao é onColor',
      control: {
        type: 'boolean',
      },
    }
  },
};

export function ButtonIcon(args) {
  const handleClick = (e) => {
    action(`handleClick`)({ event: e });
  }

  return <ButtonIconTag {...args} handleClick={handleClick}/>;
}

ButtonIcon.args = {
  size: 'small',
  icon: 'shapes',
  onColor: false
};
