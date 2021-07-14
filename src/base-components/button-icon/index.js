import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function ButtonIcon({size = "small", icon = "shapes", onColor = false, handleClick, handleBlur, handleKeyDown}){
  const _handleClick = (e) => {
    handleClick(e);
  }

  return (
    <ContextElement contextId={`${namespace}-ButtonIcon`} styles={style}>
      <button
        className={`
        ${namespace}-ButtonIcon
        ${namespace}-ButtonIcon--${size}
        ${onColor ? `${namespace}-ButtonIcon--onColor` : ''}
        `} onClick={_handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      >
        <Icon size={size} icon={icon}></Icon>
      </button>
    </ContextElement>
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  onColor: PropTypes.bool,
  handleClick: PropTypes.func.isRequired
};

export default ButtonIcon;