import React from 'react';
import InputPasswordTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Input Password',
  argTypes: {
    error: {
      title: 'Error',
      description: 'Define se o input está com erro ou não',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }      
    },
    onColor: {
      title: 'onColor',
      description: 'Define se o input tem a cor invertida',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    },          
    disabled: {
      title: 'Disabled',
      description: 'Define se o input está ativo ou não',
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }      
    },    
    label: {
      title: 'Label',
      description: 'Define a label do input',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Label' }
      }      
    }, 
    helperText: {
      title: 'HelperText',
      description: 'Define o texto da mensagem do input',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Helper text' }
      }      
    },
    placeholder: {
      title: 'Placeholder',
      description: 'Define o placeholder do input',
      control: {
        type: 'text',
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Insira a sua senha' }
      }      
    },  
    maxLength: {
      title: 'MaxLength',
      description: 'Define a quantidade máxima de caracteres do input',
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 100 }
      }      
    }
  },
	parameters: {
		docs: {
		  source: {
			  code: `<${namespace}-input-password></${namespace}-input-password>`
		  }
		}
	}
};

export function InputPassword(args) {
  const handleChange = (value) => {
    action(`handleChange`)({ value: value });
  }

  const handleFocus = (e) => {
    action(`handleFocus`)({ event: e });
  }

  return (
    <InputPasswordTag {...args} handleChange={handleChange} handleFocus={handleFocus}></InputPasswordTag>
  )
}

InputPassword.args = {
  label: 'Label',
  helperText: 'Helper text',
  placeholder: 'Type here...',
  maxLength: 16,
  error: false,
  onColor: false,
  disabled: false
}
