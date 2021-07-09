import React from 'react';
import TabGroupTag from './index.js';
import TabItemTag from '../tab-item/index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Tab',
  argTypes: {
    onColor: {
      title: 'onColor',
      description: 'Define se o botao e onColor',
      control: {
        type: 'boolean',
      },
    }
  },
};

export function Tab(args) {
  return (
    <TabGroupTag {...args}>
      <TabItemTag label="Label 1">

      </TabItemTag>
      <TabItemTag label="Label 2">

      </TabItemTag>
      <TabItemTag label="Label 3">

      </TabItemTag>
    </TabGroupTag>
  )
}

Tab.args = {
  onColor: false
}
