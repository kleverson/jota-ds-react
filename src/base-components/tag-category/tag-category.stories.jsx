import React from 'react';
import TagCategoryTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Core components react/Tag Category',
  argTypes: {
    label: {
      title: 'Tag highlight',
      description: 'Digite a label da tag category',
      defaultValue: 'Tag category',      
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Tag category"' }
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
			  code: `<${namespace}-tag-category label="Tag label"></${namespace}-tag-category>`
		  }
		}
	}
};

export function TagCategory(args) {
  return (
    <TagCategoryTag {...args}></TagCategoryTag>
  )
}

TagCategory.args = {
  label: 'Tag category',
  onColor: false
}
