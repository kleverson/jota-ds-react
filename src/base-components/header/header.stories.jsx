import React from 'react';
import HeaderTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import jotaSymbol from '../../assets/images/jota-symbol.svg';
import jotaLogotype from '../../assets/images/jota-logotype.svg';
import avatarExample from '../../assets/images/avatar-example.png';



export default {
  title: 'Core components react/Header',
  argTypes: {
    ghost: {
      name: 'Ghost',
      table: {
        category: 'Modifiers',
      },
    },
    isLoggedIn: {
      name: 'Logged In',
      table: {
        category: 'Modifiers',
      },
    },
    linkListLength: {
      name: 'Link List Length',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'range',
        min: 0,
        max: 5,
      },
    },
    menuListLength: {
      name: 'Menu List Length',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'range',
        min: 0,
        max: 6,
      },
    },
    logoSource: {
      name: 'Logo Source',
      table: {
        category: 'Custom Inputs',
      },
    },
    avatarHasNotification: {
      name: 'Notification',
      table: {
        category: 'Avatar/Modifiers',
      },
    },
    avatarImgAlt: {
      name: 'Image Alt',
      table: {
        category: 'Avatar/Custom Inputs',
      },
    },
    avatarName: {
      name: 'Name',
      table: {
        category: 'Avatar/Custom Inputs',
      },
    },
    avatarImgUrl: {
      name: 'Image URL',
      table: {
        category: 'Avatar/Custom Inputs',
      },
    },
  },
};

export function Header(args) {
  const currentLogo = args.logoSource || jotaLogotype;

  const currentAvatar = {
    imgAlt: args.avatarImgAlt,
    hasNotification: args.avatarHasNotification,
    name: args.avatarName,
    imgUrl: args.avatarImgUrl || avatarExample,
  };

  const userClick = e => {
    action('handleUserClick')({ clicked: true });
  };

  const linkList = [];

  for (let i = 1; i <= args.linkListLength; i += 1) {
    linkList.push({
      label: `Menu Item ${i}`,
      currentActive: i === 1,
      href: '#',
      target: '_blank',
    });
  }

  const menuList = [];

  for (let i = 1; i <= args.menuListLength; i += 1) {
    menuList.push({
      label: `Label ${i}`,
      tagLabel: Math.random() >= 0.5 ? 'Label' : undefined,
      handleClick: item => {
        action('handleClick')({ item });
      },
    });
  }

  return (
    <div style={{ width: '100vw', position: 'absolute', top: '0px' }}>
      <HeaderTag
        {...args}
        logoSource={currentLogo}
        avatar={currentAvatar}
        handleUserClick={userClick}
        linkList={linkList}
        menuList={menuList}
      ></HeaderTag>
    </div>
  );
}

Header.args = {
  ghost: false,
  logoSource: '',
  isLoggedIn: false,
  linkListLength: 4,
  menuListLength: 3,
  avatarImgAlt: 'Avatar alt',
  avatarHasNotification: false,
  avatarName: 'Aurélio',
  avatarImgUrl: '',
};
