import React from 'react';
import TabGroupTag from './index.js';
import TabItemTag from '../tab-item/index.js';
import { action } from '@storybook/addon-actions';

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
    label1: {
      name: 'Label 1',
      table: {
        category: 'Custom Inputs',
      },
    },
    label2: {
      name: 'Label 2',
      table: {
        category: 'Custom Inputs',
      },
    },
    label3: {
      name: 'Label 3',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Tab(args) {
  const handleTabClick = (currentTab) => {
    action("handleTabClick")(currentTab)
  }

  return (
    <TabGroupTag {...args} handleTabClick={handleTabClick}>
      <TabItemTag label={args.label1}></TabItemTag>
      <TabItemTag label={args.label2}></TabItemTag>
      <TabItemTag label={args.label3}></TabItemTag>
    </TabGroupTag>
  );
}

Tab.args = {
  label1: 'Label 1',
  label2: 'Label 2',
  label3: 'Label 3',
  onColor: false,
};
