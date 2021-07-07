import React from 'react';
import ButtonTag from './index.js';

export default {
  title: 'Core components react/Button',
  component: ButtonTag,
  argTypes: {
    // CÓDIGO NÃO INCLUI ESCOLHA DE TAMANHO
    /* size: {
      title: 'Size',
      description: 'Define o tamanho do botão',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    }, */
    type: {
      title: 'Size',
      description: 'Define o tipo do botão',
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: {
      title: 'Disabled',
      description: 'Define se o botão está ativo ou não',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    onColor: {
      title: 'onColor',
      description: 'Define o contexto do elemento',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    iconType: {
      title: 'Icon type',
      description: 'Selecione o ícone que deseja',
      defaultValue: 'chevron-right',
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
    label: {
      title: 'Label',
      description: 'Digite a label do botão',
      defaultValue: 'Button',
      control: {
        type: 'text',
      },
    },
  },
};

export function Button(args) {
  return <ButtonTag {...args} />;
}

Button.args = {
  label: 'Button',
  // size: 'large',
  disabled: false,
  iconType: 'comment',
  onColor: false,
  type: 'primary'
};
