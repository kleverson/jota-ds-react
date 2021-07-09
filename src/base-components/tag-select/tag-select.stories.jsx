import React from 'react';
import TagSelectTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Tag Select',
  argTypes: {
    label: {
      title: 'Tag label',
      description: 'Digite a label da tag select',
      defaultValue: 'Tag label',      
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Tag label"' }
      }  
    },
    disabled: {
      title: 'Disabled',
      description: 'Define se a tag está ativa ou não',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }      
    },
    active: {
      title: 'Checked',
      description: 'Define se a tag foi clicada ou não bla bla',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },    
    onColor: {
      title: 'onColor',
      description: 'Define se a tag tem a cor invertida',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    },
		handleChange: {
			description: 'Evento emitido ao clicar na tag',
      table: {
          type: { summary: 'CustomEvent' },
          defaultValue: { summary: 'null' },
          category: 'Events'
      }
		}  
  },
	parameters: {
		docs: {
		  source: {
			  code: `<${namespace}-tag-select label="Tag label"></${namespace}-tag-select>`
		  }
		}
	}
};

export function TagSelect(args) {
  const handleChange = (value) => {
    action(`handleChange`)({ value: value });
  }
  
  return (
    <TagSelectTag {...args} handleChange={handleChange}></TagSelectTag>
  )
}

TagSelect.args = {
  label: 'Tag label',
  disabled: false,
  onColor: false,
  active: false
}
