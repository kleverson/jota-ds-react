import React, { useState } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function InputTextarea({
  id = 'textarea',
  label = 'Label',
  helperText = 'Helper text',
  placeholder = 'Type here...',
  maxLength = 100,
  error = false,
  onColor = false,
  disabled = false,
  showHelper = false,
  handleChange
}) {
  const [_charactersCount, setCharactersCount] = useState(0);
  const [_value, setValue] = useState('');

  const _handleChange = e => {
    const currentValue = e.target.value;
    setValue(currentValue);
    setCharactersCount(currentValue.length);
    handleChange(e);
  };

  function formatNumber(number) {
    if (number > 99) {
      return `${number}`;
    }
    if (number > 9) {
      return `0${number}`;
    }
    return `00${number}`;
  }

  return (
    <ContextElement contextId={`${namespace}-Textarea`} styles={style}>
      <div
        className={`${namespace}-TextArea 
        ${error ? `${namespace}-TextArea--error` : ''} 
        ${onColor ? `${namespace}-TextArea--onColor` : ''} 
        ${disabled ? `${namespace}-TextArea--disabled` : ''}`}
        tabIndex="0"
      >
        <label className={`${namespace}-TextArea__label`} htmlFor={id}>
          {label}
        </label>
        <textarea
          className={`${namespace}-TextArea__textarea`}
          id={id}
          value={_value}
          maxLength={maxLength}
          placeholder={placeholder}
          onInput={_handleChange}
        ></textarea>
        <div className={`${namespace}-TextArea__helperBox`}>
          {showHelper && helperText ? (
            <span className={`${namespace}-TextArea__helperText`}>{helperText}</span>
          ) : null}
          <span className={`${namespace}-TextArea__counter`}>
            {formatNumber(_charactersCount)}/{formatNumber(maxLength)}
          </span>
        </div>
      </div>
    </ContextElement>
  );
}

InputTextarea.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  error: PropTypes.bool,
  onColor: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputTextarea;
