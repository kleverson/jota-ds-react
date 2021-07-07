import React from 'react';
import AccordionTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Accordion',
  argTypes: {

  },
};

export function Accordion(args) {
  function _handleOpened(e) {
    action('handleOpened')({ opened: e });
  }

  return (
    <div style={{width: '324px'}}>
      <AccordionTag {...args} handleOpened={_handleOpened}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
      </AccordionTag>
    </div>
  )
}

Accordion.args = {
  label: 'Heading X-Small',
  opened: false,
  onColor: false
}
