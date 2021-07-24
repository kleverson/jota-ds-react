import React, { useState, useEffect } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function TagSelect({
  label = 'Tag label',
  disabled = false,
  onColor = false,
  active = false,
  handleChange
}){
  const [_active, setActive] = useState(active);

  useEffect(() => {
    setActive(active);
  }, [active]);

  const _handleClick = () => {
    handleChange(!_active);
    setActive(!_active);
  }

  return (
    <ContextElement contextId={`${namespace}-TagSelect`} styles={style}>
      <button 
        className={`
          ${namespace}-TagSelect
          ${disabled ? `${namespace}-TagSelect--disabled`: ""}
          ${onColor ? `${namespace}-TagSelect--onColor`: ""}
          ${onColor && disabled ? `${namespace}-TagSelect--onColor--disabled`: ""}
          ${_active ? `${namespace}-TagSelect--active`: ""}
          ${onColor && _active ? `${namespace}-TagSelect--onColor--active`: ""}
        `}
        onClick={_handleClick}
        aria-disabled={disabled}
        aria-pressed={_active}>
        {label}
      </button>
    </ContextElement>
  )
}

TagSelect.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  onColor: PropTypes.bool,
  active: PropTypes.bool,
  handleChange: PropTypes.func 
};

export default TagSelect;