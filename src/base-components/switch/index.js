import React, { useState, useEffect, useRef } from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function Switch({ label, checked = false, disabled = false, onColor = false, handleChange }){

  const [checkedIpt, setCheckedIpt] = useState(checked);
  const btnRef = useRef();

  useEffect(() => {
    setCheckedIpt(checked);
  }, [checked]);

  function _handleSwitch(){
    if (typeof handleChange === 'function') {
      handleChange(!checkedIpt);
    }
    setCheckedIpt(!checkedIpt);
  }

  return (
    <ContextElement contextId={`${namespace}-Switch`} styles={style}>
      <div
        className={`
          ${namespace}-Switch
          ${checkedIpt ? `${namespace}-Switch--checked` : ''}
          ${disabled ? `${namespace}-Switch--disabled` : ''}
          ${onColor ? `${namespace}-Switch--onColor` : ''}
        `}
        tabIndex="0"
        onKeyUp={(e) => console.log(e)}
      >
        <button
          className={`${namespace}-Switch__Selector targetFocused`}
          ref={btnRef}
          role="switch"
          aria-checked={checkedIpt}
          id="switchButton"
          onClick={_handleSwitch}
          disabled={disabled}>
          <span className={`${namespace}-Switch__SelectorThumb`}>
            {checkedIpt ? 'on' : 'off'}
          </span>
        </button>
        <label htmlFor="switchButton" className={`${namespace}-Switch__Label`}>{label}</label>
      </div>
    </ContextElement>
  )
}

Switch.propTypes = {
  label: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func
};

export default Switch;