import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Button({ label, icon, iconType, type = 'primary', disabled, onColor, handleClick }) {
  return (
    <ContextElement contextId={`${namespace}-button`} styles={style}>
      <button 
        part="button" 
        className={`${namespace}-Button ${namespace}-Button--${type} 
        ${onColor ? `${namespace}-Button--${type}-onColor` : ''}
        ${namespace}-Button--icon`} 
        aria-disabled={!!disabled} 
        onClick={handleClick}
        >
            {icon ? (
              <Icon icon={iconType} size="medium"></Icon>
            ) : undefined}
            {label}
      </button>
    </ContextElement>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  type: PropTypes.string.isRequired,
  iconType: PropTypes.string,
  disabled: PropTypes.bool,
  onColor: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
