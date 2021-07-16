import React from 'react';
import { action } from '@storybook/addon-actions';
import ModalTag from './index.js';

export default {
  title: 'Core components react/Modal',
  argTypes: {
    isOpen: {
      name: 'Open',
      table: {
        category: 'Modifiers',
      },
    },
    isCloseDisabled: {
      name: 'Close Disabled',
      table: {
        category: 'Modifiers',
      },
    },
    isDoubleAction: {
      name: 'Double Action',
      table: {
        category: 'Modifiers',
      },
    },
    firstActionLabel: {
      name: 'Primary Label',
      table: {
        category: 'Custom Inputs',
      },
    },
    secondActionLabel: {
      name: 'Tertiary Label',
      table: {
        category: 'Custom Inputs',
      },
    },
  },
};

export function Modal(args) {
  const handleConfirmModal = confirmed => {
    action('handleConfirmModal')(confirmed);
  };

  const handleCancelModal = canceled => {
    action('handleCancelModal')(canceled);
  };

  const handleCloseModal = ({ isOpen }) => {
    action('handleCloseModal')({ isOpen });
  };

  return (
    <>
      <ModalTag
        {...args}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmModal}
        handleCancel={handleCancelModal}
      >
        {/* Segundo a galera de ops não é para por conteúdo aqui, pois o visual do modal deve ser igual ao do handoff*/}
      </ModalTag>
    </>
  );
}

Modal.args = {
  isOpen: false,
  isCloseDisabled: false,
  isDoubleAction: false,
  firstActionLabel: 'Button Primary',
  secondActionLabel: 'Tertiary Default',
};
