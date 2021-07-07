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
      <ModalTag isOpen={isOpen} isDoubleAction={true} handleClose={handleCloseModal} handleConfirm={handleConfirmModal} handleCancel={handleCancelModal}>
        <Typography>Title</Typography>
        <br/>
        <Typography component="paragraph" size="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum ipsa nobis, cupiditate temporibus necessitatibus similique ipsum inventore omnis rem provident.</Typography>
        <br/><br/>
      </ModalTag>
    </>
  )
}

Modal.args = {
  isOpen: false,
  isCloseDisabled: false,
  isDoubleAction: false
}
