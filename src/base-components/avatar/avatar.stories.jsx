import React from 'react';
import AvatarTag from './index.js';
import { namespace } from '../../utils/setup.js';
import avatarExample from '../../assets/images/avatar-example.png';



export default {
  title: 'Core components react/Avatar',
  argTypes: {
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
    useLocalImage: {
      name: 'Use Local Image',
      description: 'Define se a imagem do avatar será uma imagem local',
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
    useImage: {
      name: 'Use Image',
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
  const src =
    args.useLocalImage && args.useImage
      ? avatarExample
      : !args.useLocalImage && args.useImage
      ? args.imgUrl
      : '';

  return <AvatarTag {...args} imgUrl={src}></AvatarTag>;
}

Avatar.args = {
  size: 'small',
  imgUrl: '',
  imgAlt: 'Avatar',
  onColor: false,
  useLocalImage: true,
  useImage: true,
  hasNotification: false,
};
