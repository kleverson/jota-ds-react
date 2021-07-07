import React from 'react';
import { action } from '@storybook/addon-actions';
import CardbaseTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Card Base',
  name: 'Checkbox',
  argTypes: {
    onColor: {
      title: 'Inverse',
      description: 'Define o estilo inverso, com background',
    },
  },
};

export function CardBase(args) {
  function handleClick(e) {
    action(`${namespace}Click`)({ clicked: e });
  }

  return (
    <div style={{ maxWidth: '314px' }} className={"preview-container"}>
      <CardbaseTag {...args} handleClick={handleClick}></CardbaseTag>
    </div>
  );
}

CardBase.args = {
  onColor: false,
};
