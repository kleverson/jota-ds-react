import React, { useRef, useState, useEffect } from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function InputPassword({ 
  id = `${namespace}-input`,
  label = "Label",
  helperText = "Helper text",
  placeholder = "Insira a sua senha",
  maxLength = 100,
  error = false,
  onColor = false,
  disabled = false,
  handleChange,
  handleFocus
}){
  const [_value, setValue] = useState("");
  const [_keyboardFocus, setKeyboardFocus] = useState(false); 
  const [_showPassword, setShowPassword] = useState(false);
  const [_error, setError] = useState(error);
  const inputElementRef = useRef(null);

  useEffect(() => {
    setError(error && !disabled);
  },[disabled, error]);

  const _handleFocus = (e) => {
    handleFocus(e);
  }

  const _handleChange = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);
    handleChange(currentValue);
  }

  const _handleBlur = () => {
    setKeyboardFocus(false);
  }  

  const _handleClick = () => {
    setShowPassword(!_showPassword);
  }

  const _inputFocus = () => {
    inputElementRef.current.focus();
  }

  const _handleKeyBoardEvents = (e) => {
      if (e.code === 'Tab') {
        setKeyboardFocus(true);
        _inputFocus();
      }
  }

  return (
    <ContextElement contextId={`${namespace}-InputPassword`} styles={style}>
      <div
        className={`
          ${namespace}-InputPassword
          ${error ? `${namespace}-InputPassword--error` : ''}
          ${onColor ? `${namespace}-InputPassword--onColor` : ''}
          ${disabled ? `${namespace}-InputPassword--disabled` : ''}
          ${_keyboardFocus ? `${namespace}-InputPassword--focus` : ''}  
        `} onKeyUp={(e) => _handleKeyBoardEvents(e)}
      >
        <div className={`${namespace}-InputPassword__container`}>
          <div className={`${namespace}-InputPassword__labels`}>
            <label className={`${namespace}-InputPassword__label`} htmlFor={id}>{label}</label>
            <div className={`
              ${namespace}-InputPassword__wrapper
              ${_error ? `${namespace}-InputPassword__wrapper--error` : ''}
              ${_error && onColor ? `${namespace}-InputPassword__wrapper--onColor--error` : ''}            
            `}>
              <input ref={inputElementRef} 
                className={`${namespace}-InputPassword__input`} 
                id={id} 
                value={_value} 
                maxLength={maxLength} 
                placeholder={placeholder}
                type={_showPassword ? 'text' : 'password'}
                onInput={_handleChange} 
                onBlur={_handleBlur} 
                onFocus={_handleFocus} 
                autoComplete="false" />

              <div onClick={_handleClick} className={_value ? `${namespace}-Icon--active` : ''}>
                <Icon icon={_showPassword ? 'eye' : 'eye-slash'} size='medium'></Icon>
              </div>
            </div>
          </div>
        </div>
        <div aria-hidden={!_error} className={`${namespace}-InputPassword__helperBox`}>
          <span>{helperText}</span>
        </div>
      </div>
    </ContextElement>
  )
}

InputPassword.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  error: PropTypes.bool,
  onColor: PropTypes.bool,
  disabled: PropTypes.bool,
  handleChange: PropTypes.func,
  handleFocus: PropTypes.func,
};

export default InputPassword;