import React, { useState } from 'react';
import NotificationTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import Button from '../button/index.js';

export default {
  title: 'Core components react/Notification',
  argTypes: {
    title: {
      description: 'Define o título do notification',     
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Heading Large"' }
      }  
    },
    content: {
      description: 'Define o conteúdo do notification',     
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet lorem tellus, non cursus leo cursus a. Aenean commodo aliquam aliquet. Vivamus tempus nulla sit amet magna rutrum"' }
      }  
    },
    buttonText: {
      description: 'Define o texto do botão',     
      control: {
        type: 'text'
      },
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Button Primary"' }
      }  
    },
    onColor: {
      title: 'onColor',
      description: 'Define se o notification tem a cor invertida',
      defaultValue: false,
      control: {
        type: 'boolean'
      },
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }  
    },
		handleConfirm: {
			description: 'Evento emitido ao clicar no Button Primary',
      table: {
          type: { summary: 'CustomEvent' },
          defaultValue: { summary: 'null' },
          category: 'Events'
      }
		},
		handleClose: {
			description: 'Evento emitido ao clicar no fechar',
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
			  code: `<${namespace}-notification></${namespace}-notification>`
		  }
		}
	}
};

export function Notification(args) {

  const [isOpen, setIsOpen] = useState(false);

  const _handleConfirm = (e) => {
    setIsOpen(false);
    action(`handleConfirm`)({ event: e });
  }

  const _handleClose = (e) => {
    setIsOpen(false);
    action(`handleClose`)({ event: e });
  }

  const _openModal = () => {
    setIsOpen(true);
  }

  return ( 
      <div>
        {
          !isOpen ?
          <Button label="Open notification" type="primary" handleClick={_openModal}></Button> :
          ''
        }         
        <NotificationTag {...args} isOpen={isOpen} handleConfirm={_handleConfirm} handleClose={_handleClose}></NotificationTag>
      </div>
  )
}

Notification.args = {
  title: "Heading Large",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet lorem tellus, non cursus leo cursus a. Aenean commodo aliquam aliquet. Vivamus tempus nulla sit amet magna rutrum",
  buttonText: "Button Primary",
  onColor: false
}
