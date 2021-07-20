import React from 'react';
import BannerTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import imgBannerIlustraMobile from '../../assets/images/bannerilustramobile.png';
import imgBannerIlustraDesktop from '../../assets/images/bannerilustradesktop.png';

export default {
  title: 'Core components react/Banner',
  argTypes: {
    bgColor: {
      name: 'Background Color',
      table: { category: 'Modifiers' },
      control: 'color',
    },
    title: {
      name: 'Title',
      table: {
        category: 'Custom Inputs',
      },
    },
    paragraph: { name: 'Paragraph', table: { category: 'Custom Inputs' } },
    imageAlt: {
      name: 'Image Alt',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
  decorators: [
    Story => (
      <>
        <style>
          {`.sb-show-main {
              padding: 0 16px !important;
              background: #f5f5f5 !important;
            }
            
            @media (min-width: 1024px) {
              .sb-show-main {
                padding: 0 !important;
              }
            }
            `}
        </style>
        <Story />
      </>
    ),
  ],
};

export function Banner(args) {
  function handleClick(e) {
    action(`${namespace}Click`)({ clicked: e });
  }

  return (
    <BannerTag {...args} handleClick={handleClick} onColor={true}>
      <picture>
        <source media="(max-width: 1023px)" srcSet={imgBannerIlustraMobile} />
        <source media="(min-width: 1024px)" srcSet={imgBannerIlustraDesktop} />
        <img src={imgBannerIlustraDesktop} alt="Image of Banner" />
      </picture>
    </BannerTag>
  );
}

Banner.args = {
  title: 'Heading Medium two lines',
  paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  bgColor: '#1474FF',
  // image: imgBannerIlustraDesktop,
  imageAlt: 'Image of banner',
};
