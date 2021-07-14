import React from 'react';
import TabGroupTag from './index.js';
import TabItemTag from '../tab-item/index.js';

export default {
  title: 'Core components react/Tab',
  argTypes: {
    onColor: {
      name: 'On Color',
      description: 'Define se o botao e onColor',
      table: {
        category: 'Modifiers',
      },
    },
  },
};

export function Tab(args) {
  return (
    <TabGroupTag {...args}>
      <TabItemTag label="Label 1"></TabItemTag>
      <TabItemTag label="Label 2"></TabItemTag>
      <TabItemTag label="Label 3"></TabItemTag>
    </TabGroupTag>
  );
}

Tab.args = {
  onColor: false,
};
