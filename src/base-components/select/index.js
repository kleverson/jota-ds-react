import React , { useState, useRef, useEffect }  from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes, { func } from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';
import useOutsideClick from '../../mixins/mouse-handler.js';

function Select({
  label, 
  disabled, 
  error, 
  errorMsg = 'error', 
  placeholder, 
  selected,
  onColor, 
  options = ['label 1', 'label 2', 'label 3']}){

  const [status, setStatus] = useState({
    open: false,
    placeholder: placeholder ? placeholder : 'Select'
  });

  const [currentIndex, setCurrentIndex] = useState(-1);
  const [keyboardFocus, setKeyboardFocus] = useState(false);

  const selectReference = useRef(null);
  const optionsTriggerReference = useRef(null);

  const _handleClick = () => {
    setStatus({...status, open : !status.open});
  }

  const _selectOption = (item, index) => {
    setStatus({...status, placeholder : item, open : false});
    setCurrentIndex(index);
  }

  const _handleKeyUp = (e) => {
    if(e.code === "Space"){
      setStatus({...status, open : true});

      if(currentIndex < 0){
        setCurrentIndex(0);
      }
    }

    if(e.code === "Enter"){
      setStatus({...status, open : !status.open});
      optionsTriggerReference.current.focus();

      if(currentIndex < 0){
        setCurrentIndex(0);
      }
    }

    if (e.code === 'ArrowDown') {
      setCurrentIndex(currentIndex < options.length - 1 ? currentIndex + 1 : options.length - 1);
    }
    
    if (e.code === 'ArrowUp') {
      setCurrentIndex(currentIndex - 1 < 0 ? 0 : currentIndex - 1);
    }
  }


  const _handleTriggerKeyDown = (e) => {
    if(e.code === "Tab" && status.open){
      e.preventDefault();
      setStatus({...status, open : false});
      optionsTriggerReference.current.focus();
    }
  }

  useEffect(() => {
    if(currentIndex >= 0){
      setStatus({...status, placeholder : options[currentIndex]});
    }
  }, [currentIndex]);

  useOutsideClick(selectReference, function(){
    console.log(status, currentIndex)
    //setStatus({...status, open : false});
  });

  return (
    <ContextElement contextId={`${namespace}-Select`} styles={style}>
      <div
        className={`
          ${namespace}-Select
          ${onColor ? `${namespace}-Select--onColor` : ''}
          ${keyboardFocus ? `${namespace}-Select--focus` : ''}
          ${error ? `${namespace}-Select--error` : ''}
        `}
        ref={selectReference}
        id="wrapper" onKeyUp={_handleKeyUp}>
        <span className={`
        ${namespace}-Select__label
        ${disabled ? `${namespace}-Select__label--disabled` : ''}`
      }>{label}</span>
          <button
          onFocus={() => setKeyboardFocus(!keyboardFocus)}
          onBlur={() => setKeyboardFocus(false)}
          onKeyDown={(e) => _handleTriggerKeyDown(e)}
          onMouseUp={_handleClick}
          disabled={!!disabled}
          aria-haspopup="true" 
          ref={optionsTriggerReference}
          className={`${namespace}-Select__trigger
          ${error ? `${namespace}-Select__trigger--error` : ''}
          `}>
            {status.placeholder}
            <Icon icon="chevron-down"></Icon>
          </button>
          <ul className={`${namespace}-Select__option-list`} role="listbox" tabIndex="-1" aria-expanded={!!status.open}>
            {
              options.map((item, index) => 
                <li
                key={index} 
                role="option"
                id={item.toLowerCase().replace(" ", "-")}
                onMouseUp={() => _selectOption(item, index)}
                onMouseOver={() => setCurrentIndex(index)}
                data-value={item}
                aria-label={item}
                className={`
                ${namespace}-Select__option
                ${index === currentIndex ? `${namespace}-Select__option--current`:''}
                ${options.length - 1 === index ? `${namespace}-Select__option--last` : ''}
                ${index === 0 ? `${namespace}-Select__option--first` : ''}`}>{item}</li>
              )
            }
          </ul>
          <span aria-hidden={!error} className={`${namespace}-Select__errorMsg`}>{errorMsg}</span>
      </div>

    </ContextElement>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  errorMsg: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  onColor: PropTypes.bool
};

export default Select;