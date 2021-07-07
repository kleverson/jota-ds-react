import React from 'react';
import IconTag from './index.js';

export default {
  title: 'Core components react/Icon',
  argTypes: {
    icon: {
      title: 'Label',
      description: 'Selecione o ícone que deseja',
      defaultValue: 'chevron-up',
      control: {
        type: 'select',
        options: [
          'adjustment',
          'arrow-down',
          'arrow-left',
          'arrow-right',
          'arrow-up',
          'block',
          'bookmark',
          'bullet',
          'check',
          'chevron-down',
          'chevron-left',
          'chevron-right',
          'chevron-up',
          'clock',
          'close',
          'comment',
          'credit-card',
          'double-check',
          'edit',
          'exclamation-circle',
          'exclamation',
          'eye-slash',
          'eye',
          'filter',
          'forward',
          'heart-filled',
          'heart',
          'key',
          'lightbulb',
          'lock',
          'megaphone',
          'menu',
          'microphone-slash',
          'microphone',
          'minus',
          'more-horizontal',
          'notification-slash',
          'notification',
          'pause',
          'pen',
          'phone',
          'play',
          'plus',
          'search',
          'setting',
          'shapes',
          'star-filled',
          'star-half',
          'star',
          'support',
          'sync',
          'thumbs-down',
          'thumbs-up',
          'timer',
          'trash',
          'unlock',
          'user',
          'volume-down',
          'volume-off',
          'volume-up',
          'wallet',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
};

export function Icon(args) {
  return <IconTag {...args}></IconTag>;
}

Icon.args = {
  icon: 'chevron-up',
  size: 'small',
};
