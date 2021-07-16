import React from 'react';
import StepsTag from './index.js';

export default {
  title: 'Core components react/Step',
  argTypes: {
    stepsLength: {
      name: 'Steps',
      control: {
        type: 'range',
        min: 2,
        max: 6,
      },
      table: {
        category: 'Modifiers',
      },
    },
    currentStep: {
      name: 'Current Step',
      control: {
        type: 'range',
        min: 1,
        max: 6,
      },
      table: { category: 'Modifiers' },
    },
  },
};

export function Step(args) {
  const steps = [];

  for (let i = 1; i <= args.stepsLength; i += 1) {
    steps.push({
      type: i === args.currentStep ? 'current' : i < args.currentStep ? 'finish' : 'next',
      title: `Label ${i}`,
    });
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '550px' }}>
      <StepsTag ariaLabel="Passos do formulário" steps={steps} />
    </div>
  );
}

Step.args = {
  stepsLength: 6,
  currentStep: 1,
};
