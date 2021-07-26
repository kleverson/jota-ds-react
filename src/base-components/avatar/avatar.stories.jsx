import React from 'react';
import AvatarTag from './index.js';
import { namespace } from '../../utils/setup.js';
import avatarExample from '../../assets/images/avatar-example.png';

export default {
  title: 'Core components react/Avatar',
  argTypes: {
    useImage: {
      name: 'Image',
      description: 'Define se o avatar terá uma imagem',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      name: 'Size',
      description: 'Define o tamanho do avatar',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      table: {
        category: 'Modifiers',
        type: { summary: 'string' },
        defaultValue: { summary: 'small' },
      },
    },
    hasNotification: {
      name: 'Notification',
      description: 'Define se existem notificações',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onColor: {
      name: 'On Color',
      title: 'onColor',
      description: 'Define se o avatar tem a cor invertida',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    imgUrl: {
      name: 'Image URL',
      description: 'Caminho da imagem do avatar',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    imgAlt: {
      name: 'Image Alt',
      description: 'Descrição da imagem do avatar',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
        defaultValue: { summary: '"Profile Picutre"' },
      },
    },
  },
  parameters: {
    docs: {
      source: {
        code: `<${namespace}-avatar size="small"></${namespace}-avatar>`,
      },
    },
  },
};

export function Avatar(args) {
  const src = args.useImage ? args.imgUrl : '';
  return <AvatarTag {...args} imgUrl={src}></AvatarTag>;
}

Avatar.args = {
  size: 'small',
  imgUrl: avatarExample,
  imgAlt: 'Avatar',
  onColor: false,
  useImage: true,
  hasNotification: false,
};
