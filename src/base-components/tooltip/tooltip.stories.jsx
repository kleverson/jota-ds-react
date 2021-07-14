import React from 'react';
import TooltipTag from './index.js';
import Typography from '../typography/index.js';

export default {
  title: 'Core components react/Tooltip',
  argTypes: {
    onColor: {
      name: 'On Color',
      description: 'Define se o tooltip tem a cor invertida',
      table: {
        category: 'Modifiers',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },    
    position: {
      name: 'Position',
      description: 'Posição do tooltip.',
      table: {
        category: 'Custom Inputs',
        type: { summary: 'string' },
      },
      control: 'select',
      options: [
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
      ],
    },
    body: {
      name: 'Tooltip Body',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Tooltip(args) {
  return (
    <div>
      <Typography component="paragraph" onColor={args.onColor}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum purus at
        massa lacinia vestibulum. Mauris feugiat,
        <TooltipTag {...args}>
          <strong> Passe o mouse aqui para ver o tooltip.</strong>
        </TooltipTag>
        Nam nec vehicula augue. Donec et feugiat odio. Nam tempus velit sed nisl accumsan placerat.
        Morbi porta, mi ut condimentum rutrum, nunc arcu lobortis orci, sit amet finibus nulla nibh
        quis eros. Aliquam congue volutpat iaculis. Aenean sed est sed ipsum posuere cursus vel ac
        nibh.
      </Typography>     
    </div>
  );
}

Tooltip.args = {
  position: 'top',
  body: 'Hello there, this is a tooltip message.',
  onColor: false
};
