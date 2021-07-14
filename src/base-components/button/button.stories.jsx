import React from 'react';
import ButtonTag from './index.js';
import IconList from '../../utils/icon-list.js';

export default {
  title: 'Core components react/Button',
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
      name: 'Type',
      description: 'Define o tipo do botão',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    disabled: {
      name: 'Disabled',
      description: 'Define se o botão está ativo ou não',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      description: 'Define o contexto do elemento',
      defaultValue: false,
      table: {
        category: 'Modifiers',
      },
    },
    iconType: {
      name: 'Icon type',
      description: 'Selecione o ícone que deseja',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: IconList,
      },
    },
    icon: {
      name: 'Use Icon',
      table: {
        category: 'Modifiers',
      },
    },
    label: {
      name: 'Label',
      description: 'Digite a label do botão',
      table: {
        category: 'Custom Inputs',
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
  type: 'primary',
  icon: false,
};
