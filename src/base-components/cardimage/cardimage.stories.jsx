import React from 'react';
import { action } from '@storybook/addon-actions';
import CardimageTag from './index.js';
import { namespace } from '../../utils/setup.js';
import imgCardimage from '../../assets/images/cardimage.png';

export default {
  title: 'Core components react/Card Image',
  name: 'Checkbox',
  argTypes: {
    onColor: {
      name: 'On Color',
      description: 'Define o estilo inverso, com background',
      table: {
        category: 'Modifiers',
      },
    },
  },
};

export function CardImage(args) {
  function handleClick(e) {
    action(`${namespace}Click`)({ clicked: e });
  }

  return (
    <div style={{ maxWidth: '314px' }}>
      <CardimageTag {...args} image={imgCardimage} handleClick={handleClick}></CardimageTag>
    </div>
  );
}

CardImage.args = {
  onColor: false,
};
