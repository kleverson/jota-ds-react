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
        Se não for sobre fazer a diferença, é sobre o quê? <br />
        <TooltipTag {...args}>
          <strong>Passe o mouse aqui para ver o tooltip.</strong>
        </TooltipTag>
      </Typography>
    </div>
  );
}

Tooltip.args = {
  position: 'top',
  body: 'O Design System open source da Meiuca',
  onColor: false,
};
