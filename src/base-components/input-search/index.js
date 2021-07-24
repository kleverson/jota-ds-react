import React, {useState, useEffect, useRef} from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';


function InputSearch({
  formID = 'form-search',
  formName = 'form-search',
  inputID = 'input-search',
  inputName = 'input-search',
  value= '',
  placeholder = 'Search',
  ariaLabel = "Search form field",
  hasPreventDefault = true,
  onColor = false,
  disabled = false,
  handleSubmit,
  handleInputChange
}){
  const [_value, setValue] = useState(value);
  const [_keyboardFocus, setKeyboardFocus] = useState(false); 
  const inputSearchRef = useRef(null);

  const _handleSubmit = (e) => {
    if(hasPreventDefault){
      e.preventDefault();
    }

    const formData = new FormData(e.target)
    handleSubmit(formData);
  }

  const _handleInputChange = (e) => {
    setValue(e.target.value);
    handleInputChange(e.target.value);
  }

  const _inputFocus = () => {
    inputSearchRef.current.focus();
  }

  const _handleKeyBoardEvents = (e) => {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);
      _inputFocus();
    }
  }

  const _clearSearch = () => {
    setValue('');
    handleInputChange('');
    _inputFocus();
  }

  return (
    <ContextElement contextId={`${namespace}-InputSearch`} styles={style}>
      <form id={formID} name={formName}
        className={`
          ${namespace}-InputSearch
          ${onColor ? `${namespace}-InputSearch--onColor` : ''}
          ${disabled ? `${namespace}-InputSearch--disabled` : ''}
          ${_keyboardFocus ? `${namespace}-InputSearch--focus` : ''}
        `}
        role="search"
        onSubmit={_handleSubmit} onKeyUp={(e) => _handleKeyBoardEvents(e)}
      >
        <div className={`${namespace}-InputSearch__wrapper`}>
          <Icon icon='search' size='medium'></Icon>
          <input className={`
          ${namespace}-InputSearch__input`} ref={inputSearchRef} value={_value} placeholder={placeholder} type="text" type="search" name={inputName} id={inputID} aria-label={ariaLabel} onInput={_handleInputChange}/>
          
          {
            _value ? 
            <div className={`${namespace}-InputSearch__clear`} onClick={_clearSearch}>
              <Icon icon='close' size='small'></Icon>
            </div>:
            null
          }
        </div>
      </form>
    </ContextElement>
  )
}

InputSearch.propTypes = {
  formName: PropTypes.string.isRequired,
  formID: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  inputID: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  hasPreventDefault: PropTypes.bool,
  onColor: PropTypes.bool,
  disabled: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func,
};

export default InputSearch;