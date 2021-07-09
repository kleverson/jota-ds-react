import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Button from '../button/index.js';

function ButtonGroup({
  tertiaryLabel = 'aaa', 
  primaryLabel="aaa", 
  primaryDisabled, 
  tertiaryDisabled, 
  onColor,
  handleConfirm,
  handleCancel
}){

  const _confirmAction = (e) => {
    handleConfirm(e);
  }

  const _cancelAction = (e) => {
    handleCancel(e);
  }

  return (
    <ContextElement contextId={`${namespace}-ButtonGroup`} styles={style}>
    <div className={`${namespace}-ButtonGroup`}>
      <button 
      aria-disabled={!!tertiaryDisabled}
      className={`
          ${namespace}-ButtonGroup__button
          ${namespace}-ButtonGroup__button--tertiary
          ${onColor ? `${namespace}-ButtonGroup__button--tertiary-onColor` : ''}
        `} onClick={_cancelAction}
        >
      {tertiaryLabel}
      </button>
      <Button type="primary" label={primaryLabel} disabled={!!primaryDisabled} handleClick={_confirmAction}>
      </Button>
      </div>
    </ContextElement>
  )
}

ButtonGroup.propTypes = {
  tertiaryLabel: PropTypes.string,
  primaryLabel: PropTypes.string,
  primaryDisabled: PropTypes.bool,
  tertiaryDisabled: PropTypes.bool,
  onColor: PropTypes.bool,
  handleConfirm: PropTypes.func,
  handleCancel: PropTypes.func,
};

export default ButtonGroup;