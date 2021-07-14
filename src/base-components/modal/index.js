import React, {useState, useEffect} from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Button from '../button/index.js';
import ButtonGroup from '../button-group/index.js';
import ButtonIcon from '../button-icon/index.js';

function Modal({
  isOpen = false,
  isCloseDisabled = false,
  isDoubleAction = false,
  firstActionLabel = "Ok",
  secondActionLabel = "Cancel",
  handleConfirm,
  handleCancel,
  handleClose,
  children
}){

  const [_isOpen, setOpen] = useState(isOpen);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen])

  const _closeModal = (e) => {
    setOpen(false);
    handleClose({isOpen: false}, e);
  }

  const _handleConfirm = (e) => {
    _closeModal(e)
    handleConfirm({confirmed: true}, e)
  }

  const _handleCancel = (e) => {
    _closeModal(e)
    if(handleCancel){
      handleCancel({canceled: true}, e)
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Modal`} styles={style}>
      <div
        className={`
          ${namespace}-Modal
          ${_isOpen ? `${namespace}-Modal--open` : ''}
        `}
      >
        <div className={`${namespace}-Modal__shape`}>
          {
            isCloseDisabled ?
              null :
              <ButtonIcon icon="close" size="small" handleClick={_closeModal}/> 
          }
          <div className={`${namespace}-Modal__content`}>
            <div className={`${namespace}-Modal__stackfix`}></div>
            {children}
          </div>
          <nav className={`${namespace}-Modal__nav`}>
            {
              isDoubleAction ? 
              <ButtonGroup tertiaryLabel={secondActionLabel} primaryLabel={firstActionLabel} handleConfirm={_handleConfirm} handleCancel={_handleCancel}></ButtonGroup>:
              <Button type="primary" label={firstActionLabel} handleClick={_handleConfirm}></Button>
            }
          </nav>
        </div>
      </div>
    </ContextElement>
  )
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isCloseDisabled: PropTypes.bool,
  isDoubleAction: PropTypes.bool.isRequired,
  firstActionLabel: PropTypes.bool,
  secondActionLabel: PropTypes.bool,
  handleConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleCancel: PropTypes.func,
};

export default Modal;