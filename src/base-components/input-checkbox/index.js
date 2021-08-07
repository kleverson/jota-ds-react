import React, { useState, useEffect } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function Checkbox({ value, name, checked, disabled, onColor, handleChange }) {
  const [checkedIpt, setCheckedIpt] = useState(checked);

  useEffect(() => {
    setCheckedIpt(checked);
  }, [checked]);

  const _handleChange = () => {
    handleChange(!checkedIpt);
    setCheckedIpt(!checkedIpt);
  }

  const _handleKeyUp = (e) => {
    if(e.code === 'Enter' || e.code === 'Space'){
      handleChange(!checkedIpt);
      setCheckedIpt(!checkedIpt);
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Checkbox`} styles={style}>
      <label
        className={`
          ${namespace}-Checkbox-label
          ${disabled ? `${namespace}-Checkbox-label--disabled` : ''}
          ${onColor ? `${namespace}-Checkbox-label--onColor` : ''}
          ${onColor && disabled ? `${namespace}-Checkbox-label--onColor--disabled` : ''}
        `}
        htmlFor={name}
        aria-checked={checkedIpt}
        tabIndex="0"
        onKeyUp={(e) => _handleKeyUp(e)}
        role="checkbox"
      >
        <input
          className={`${namespace}-Checkbox`}
          type="checkbox"
          id={name}
          name={name}
          checked={checkedIpt}
          disabled={disabled}
          value={value}
          onChange={_handleChange}
          tabIndex={-1}
        />
        {value}
      </label>
    </ContextElement>
  );
}

Checkbox.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;