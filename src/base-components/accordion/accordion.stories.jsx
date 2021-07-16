import React from 'react';
import { action } from '@storybook/addon-actions';
import AccordionTag from './index.js';

export default {
  title: 'Core components react/Accordion',
  argTypes: {
    opened: {
      name: 'Content',
      table: {
        category: 'Modifiers',
      },
    },
    onColor: {
      name: 'On Color',
      table: {
        category: 'Modifiers',
      },
    },
    label: {
      name: 'Label',
      table: {
        category: 'Custom Inputs',
      },
    },
    accordionContent: {
      name: 'Content',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Accordion(args) {
  function _handleOpened(e) {
    action('handleOpened')({ opened: e });
  }

  return (
    <div style={{ width: '324px' }}>
      <AccordionTag {...args} handleOpened={_handleOpened}>
        {args.accordionContent}
      </AccordionTag>
    </div>
  );
}

Accordion.args = {
  onColor: false,
  opened: false,
  label: 'Heading X-Small',
  accordionContent:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has' +
    'been the industry`s standard dummy text ever since the 1500s',
};
