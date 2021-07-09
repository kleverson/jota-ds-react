import React, { useState } from 'react';
import StepsTag from './index.js';
import StepTag from '../step/index.js';
import { namespace } from '../../utils/setup.js';
import Button from '../button/index.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Step', 
	parameters: {
		docs: {
		  source: {
			  code: `<${namespace}-tag-step></${namespace}-tag-step>`
		  }
		}
	}
};

export function Step(args) {
  const [currentStep, setCurrentStep] = useState(0);
  const stepsTotal = args.steps.length - 1;
  
  const updateStep = (index) => {
    args.steps[index - 1].type = "finish";
    args.steps[index].type = "current";
  }

  const goToNextStep = (step, total) => {
    if (step < total) {
      const index = step + 1;
      setCurrentStep(index);
      updateStep(index);
      action('nextStep')({ step: index });
    }
  }

  const renderSteps = (steps) => {
    return steps.map((step, index) => (
      <StepTag type={step.type} title={step.title} key={index}></StepTag>
    ))
  }

  const resetSteps = () => {
    args.steps.forEach((step, index) => {
      if (index === 0) {
        step.type = "current";
      } else {
        step.type = "next";
      }
    });

    setCurrentStep(0);
    action('currentStep')({ step: 1 });
  }

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'start', width: '550px'}}>
        <StepsTag {...args}>
          {
            renderSteps(args.steps)
          }
        </StepsTag>

        <div style={{marginTop: '80px', display: 'flex'}}>
          <div style={{marginRight: '24px'}}>
            <Button label="Reset" type="secondary" handleClick={() => resetSteps()}></Button>
          </div>
            <Button label="Next step" type="primary" handleClick={() => goToNextStep(currentStep, stepsTotal)}></Button>
        </div>

      </div>
    </>
  )
}

Step.args = {
  ariaLabel: "Passos do formulário",
  steps: [
      { type: 'current', title: 'Label 1'}, 
      { type: 'next', title: 'Label 2'}, 
      { type: 'next', title: 'Label 3'}, 
      { type: 'next', title: 'Label 4'},
      { type: 'next', title: 'Label 5'}, 
      { type: 'next', title: 'Label 6'} 
  ]
}

Step.argTypes = {
  ariaLabel: { table: { disable: true } },
  steps: { table: { disable: true } }
};
