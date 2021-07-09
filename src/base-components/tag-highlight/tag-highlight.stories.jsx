import React from 'react';
import TagHighlightTag from './index.js';
import { namespace } from '../../utils/setup.js';

export default {
  title: 'Core components react/Tag Highlight',
  argTypes: {
    label: {
      title: 'Tag highlight',
      description: 'Digite a label da tag highlight',
      defaultValue: 'Tag Highlight',      
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Tag Highlight"' }
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
    }
  },
	parameters: {
		docs: {
		  source: {
			  code: `<${namespace}-tag-highlight label="Tag label"></${namespace}-tag-highlight>`
		  }
		}
	}
};

export function TagHighlight(args) {
  return (
    <TagHighlightTag {...args}></TagHighlightTag>
  )
}

TagHighlight.args = {
  label: "Tag Highlight",
  onColor: false
}
