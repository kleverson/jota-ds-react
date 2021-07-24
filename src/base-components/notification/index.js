import React, { useState, useEffect } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../typography/index.js';
import Button from '../button/index.js';
import ButtonIcon from '../button-icon/index.js';

function Notification({
  title = '',
  content = '',
  buttonText = '',
  isOpen = false,
  handleConfirm,
  handleClose
}){
  const [_isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const _handleConfirm = (e) => {
    setIsOpen(!_isOpen);
    handleConfirm(e);
  }

  const _handleClose = (e) => {
    setIsOpen(!_isOpen);
    handleClose(e);
  }

  return (
    <ContextElement contextId={`${namespace}-Notification`} styles={style}>
      <div className={`
        ${namespace}-Notification
        ${ _isOpen ? `${namespace}-Notification--isOpen` : '' } 
      `}
        tabIndex="0"
        role="tooltip">
        <div className={`${namespace}-Notification__container`}>
          <div className={`${namespace}-Notification__close`}>
            <ButtonIcon icon="close" size='medium' handleClick={_handleClose}></ButtonIcon>
          </div>
          <div className={`${namespace}-Notification__wrapper`}>
            <Typography component="heading" size="large">{title}</Typography>
            <Typography component="paragraph" size="small">{content}</Typography>
            <Button type="primary" label={buttonText} handleClick={_handleConfirm}></Button>
          </div>
        </div>
      </div>
    </ContextElement>
  )
}

Notification.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  buttonText: PropTypes.string,
  isOpen: PropTypes.bool,
  handleConfirm: PropTypes.any,
  handleClose: PropTypes.any
};

export default Notification;