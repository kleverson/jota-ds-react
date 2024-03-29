import React from 'react';
import HeaderTag from './index.js';
import HeaderEmpty from '../header-empty/index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import jotaSymbol from '../../assets/images/jota-symbol.svg';
import jotaLogotype from '../../assets/images/jota-logotype.svg';
import avatarExample from '../../assets/images/avatar-example.png';

export default {
  title: 'Core components react/Header',
  argTypes: {
    menu: {
      name: 'Menu',
      table: {
        category: 'Modifiers',
      },
    },
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
        type: 'select',
        options: [0, 1, 2, 3, 4, 5],
      },
    },
    menuListLength: {
      name: 'Menu List Length',
      table: {
        category: 'Modifiers',
      },
      control: {
        type: 'select',
        options: [0, 1, 2, 3, 4, 5, 6],
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
        category: 'Avatar',
        subcategory: 'Modifiers',
      },
    },
    avatarImgAlt: {
      name: 'Image Alt',
      table: {
        category: 'Avatar',
        subcategory: 'Custom Inputs',
      },
    },
    avatarName: {
      name: 'Name',
      table: {
        category: 'Avatar',
        subcategory: 'Custom Inputs',
      },
    },
    avatarImgUrl: {
      name: 'Image URL',
      table: {
        category: 'Avatar',
        subcategory: 'Custom Inputs',
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
      target: '_self',
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

  return args.menu ? (
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
  ) : (
    <div style={{ width: '100vw', position: 'absolute', top: '0px' }}>
      <HeaderEmpty logoSource={currentLogo} />
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
  menu: true,
  avatarHasNotification: false,
  avatarName: 'Aurélio',
  avatarImgUrl: '',
};
