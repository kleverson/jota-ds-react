import React, { useState, useEffect } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import classMap from '@jota-ds/context-element-react/directives/class-map';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Select({ errorMsg = 'error', options = [], ...props }) {
  const [_open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const _handleKeyUp = (e) => {
    if(e.code === 'Tab'){
      setOpen(false);
      setFocus(true);
    }
  };

  const _handleKeyDown = (e) => {
    if(e.code === 'Enter'){
      setOpen(true);
    }
  }

  const _handleBlur = () => {
    setOpen(false);
    setFocus(false);
  };

  const _handleChange = (e) => {
    props.handleChange(e.target.value);
    setOpen(false);
  }

  const _handleClick = (e) => {
    //trigger from mouse
    if(e.screenX !== 0 && e.screenY !== 0){
      setOpen(!_open);
    } 
  }

  return (
    <ContextElement contextId={`${namespace}-Select`} styles={style}>
      <div
        className={classMap({
          [`${namespace}-Select`]: true,
          [`${namespace}-Select--onColor`]: props.onColor,
          [`${namespace}-Select--focus`]: focus,
          [`${namespace}-Select--error`]: props.error,
          [`${namespace}-Select--onColor--error`]: props.onColor && props.error,
        })}
      >
        <label
          className={classMap({
            [`${namespace}-Select__label`]: true,
            [`${namespace}-Select__label--disabled`]: props.disabled,
          })}
          htmlFor={`${namespace}-select-${props.name}`}
        >
          {props.label}
        </label>

        <select
          className={classMap({
            [`${namespace}-Select__tag`]: true,
            [`${namespace}-Select__tag--error`]: props.error,
          })}
          onKeyUp={(e) => _handleKeyUp(e)}
          onClick={(e) => _handleClick(e)}
          onKeyDown={(e) => _handleKeyDown(e)}
          onBlur={_handleBlur}
          onChange={(e) => _handleChange(e)}
          disabled={props.disabled}
          aria-disabled={props.disabled}
          id={props.id}
          name={props.id}
        >
          <option hidden value="">
            {props.placeholder}
          </option>

          {options.map((item, index) => (
            <option key={index} value={item} aria-label={item} className={`${namespace}-Select__option`}>
              {item}
            </option>
          ))}
        </select>

        <Icon
          icon={_open ? 'chevron-up' : 'chevron-down'}
          className={classMap({
            [`${namespace}-Select__icon`]: true,
            [`${namespace}-Select__icon--error`]: props.error,
            [`${namespace}-Select__icon--disabled`]: props.disabled,
          })}
        ></Icon>

        <span aria-hidden={!props.error} className={`${namespace}-Select__errorMsg`}>
          {errorMsg}
        </span>
      </div>
    </ContextElement>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onColor: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
};

export default Select;
