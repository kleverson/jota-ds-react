import React, { useState, useEffect } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function Checkbox({ value, name, checked, disabled, onColor, handleChange }) {
  const [checkedIpt, setCheckedIpt] = useState(checked);

  useEffect(() => {
    setCheckedIpt(checked);
  }, [checked]);

  function _handleChange() {
    handleChange(!checkedIpt);
    setCheckedIpt(!checkedIpt);
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
        aria-checked={checked}
        tabIndex="0"
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
        />

        <slot>{value}</slot>
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
