import React from 'react';
import AvatarTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

import avatarExample from '../../assets/images/avatar-example.png';

export default {
  title: 'Core components react/Avatar',
  argTypes: {
    size: {
      title: 'Size',
      description: 'Define o tamanho do avatar',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'small' }
      }
    },
		imgUrl: {
			description: 'Caminho da imagem do avatar',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '' }
			}			
		},
		imgAlt: {
			description: 'Descrição da imagem do avatar',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: '"Profile Picutre"' }
			}			
		},    
    onColor: {
      title: 'onColor',
      description: 'Define se o avatar tem a cor invertida',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    },    
    hasNotification: {
      title: 'hasNotification',
      description: 'Define se existem notificações',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    },    
    useLocalImage: {
      title: 'useLocalImage',
      description: 'Define se a imagem do avatar será uma imagem local',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    },    
    useImage: {
      title: 'useImage',
      description: 'Define se o avatar terá uma imagem',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    }
  },
	parameters: {
		docs: {
		  source: {
			  code: `<${namespace}-avatar size="small"></${namespace}-avatar>`
		  }
		}
	}
};

export function Avatar(args) {
  const src = args.useLocalImage && args.useImage ? 
              avatarExample: 
              !args.useLocalImage && args.useImage ? args.imgUrl :
              '';

  return (
    <AvatarTag {...args} imgUrl={src}></AvatarTag>
  )
}

Avatar.args = {
  size: 'small',
  imgUrl: '',
  imgAlt: 'Avatar',
  onColor: false,
  useLocalImage: true,
  useImage: true,
  hasNotification: false
}
