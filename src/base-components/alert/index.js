import React, {useState, useEffect} from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import IconShape from '../icon-shape/index.js';
import Typography from '../typography/index.js';
import ButtonIcon from '../button-icon/index.js';

function Alert({title, icon, text, isOpen = false, handleClose }){
  const [_isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  const _handleClose = (e) => {
    setIsOpen(!_isOpen);
    handleClose(!_isOpen);
  }

  return (
    <ContextElement contextId={`${namespace}-Alert`} styles={style}>
      <div
        className={`
          ${namespace}-Alert
          ${namespace}-Alert__modal
          ${ _isOpen ? `${namespace}-Alert--isOpen` : '' }
        `} 
      >
        <ButtonIcon icon="close" size="small" handleClick={_handleClose}></ButtonIcon>
        <div className={`${namespace}-Alert__content`}>
          <div className={`${namespace}-Alert__icon-side`}>
            <IconShape size="medium" icon={icon} variant={icon === 'check' ? 'warning' : 'helper'}></IconShape>
          </div>
          <div className={`${namespace}-Alert__text-side`}>
            <div className={`${namespace}-Alert__text-title`}><Typography component="heading" size="x-small" variant="h6">{title}</Typography></div>
            <Typography  component="paragraph" size="small">{text}</Typography>
          </div>
        </div>
      </div>
    </ContextElement>
  )
}

Alert.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  isOpen: PropTypes.bool,
  handleClose: PropTypes.func
};

export default Alert;