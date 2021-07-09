import React, {useState} from 'react';
import ModalTag from './index.js';
import { namespace } from '../../utils/setup.js';
import { action } from '@storybook/addon-actions';
import Button from '../button/index.js';
import Typography from '../typography/index.js';

export default {
  title: 'Core components react/Modal',
  argTypes: {

  },
};

export function Modal(args) {
  
  const [isOpen, setOpen] = useState(false);
  

  const openModal = () => {
    setOpen(true);
    action('openModal')({ opened: true });
  }

  const handleConfirmModal = (confirmed, e) => {
    setOpen(false);
    action('handleConfirmModal')(confirmed);
  }

  const handleCancelModal = (canceled, e) => {
    setOpen(false);
    action('handleCancelModal')(canceled);
  }

  const handleCloseModal = ({isOpen}, e) => {
    setOpen(isOpen);
    action('handleCloseModal')({isOpen: isOpen});
  }

  return (
    <>
      <Button label="Open modal" type="primary" handleClick={openModal}></Button>
      <ModalTag {...args} isOpen={isOpen} handleClose={handleCloseModal} handleConfirm={handleConfirmModal} handleCancel={handleCancelModal}>
      </ModalTag>
    </>
  )
}

Modal.args = {
  isOpen: false,
  isCloseDisabled: false,
  isDoubleAction: false
}
