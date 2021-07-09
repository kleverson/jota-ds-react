import React from 'react';
import HeaderTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

import jotaSymbol from '../../assets/images/jota-symbol.svg';import jotaLogotype from '../../assets/images/jota-logotype.svg';import avatarExample from '../../assets/images/avatar-example.png';

export default {
  title: 'Core components react/Header',
  argTypes: {
    
  },
};

export function Header(args) {
  const currentLogo = args.logo || jotaLogotype;
  const currentAvatar = {
    ...args.avatar,
    imgUrl: args.avatar.imgUrl || avatarExample
  }

  const userClick = (e) => {
    action('handleUserClick')({clicked: true});
  }

  return (
    <div style={{width: '100vw', position: 'absolute', top: '0px'}}>
      <HeaderTag {...args} logoSource={currentLogo} avatar={currentAvatar} handleUserClick={userClick}></HeaderTag>
    </div>
  )
}

Header.args = {
  ghost: false,
  logoSource: '',
  isLoggedIn: false,
  avatar: {
    imgAlt: 'Avatar alt',
    hasNotification: false,
    imgUrl: '',
    name: 'Aurélio'
  },
  linkList: [
    {
      label: 'Link menu item', 
      href: '#', 
      target: '_self', 
      disabled: false, 
      arrow: false, 
      onColor: false,
      currentActive: true
    },
    {
      label: 'Link menu item', 
      href: '#', 
      target: '_self', 
      disabled: false, 
      arrow: false, 
      onColor: false,
    },
    {
      label: 'Link menu item', 
      href: '#', 
      target: '_self', 
      disabled: false, 
      arrow: false, 
      onColor: false,
    },
    {
      label: 'Link menu item', 
      href: '#', 
      target: '_self', 
      disabled: false, 
      arrow: false, 
      onColor: false,
    }
  ],
  menuList: [
    {
      label: 'Label 1',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 2',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 3',
      tagLabel: 'Tag',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 4',
      tagLabel: 'Tag',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    },
    {
      label: 'Label 5',
      handleClick: (item) => {
        action('handleClick')({ item });
      },
    }
  ]
}

Header.argTypes = {
  avatar: { table: { disable: true } },
  linkList: { table: { disable: true } },
  menuList: { table: { disable: true } }
}
