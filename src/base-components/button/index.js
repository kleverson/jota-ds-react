import React from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import classMap from '@meiuca_design/context-element-react/directives/class-map';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Button({
  label,
  icon,
  iconType,
  type = 'primary',
  disabled,
  onColor,
  handleClick,
  loading,
}) {
  const classTable = {
    [`${namespace}-Button ${namespace}-Button--${type}`]: true,
    [`${namespace}-Button--${type}-onColor`]: onColor,
    [`${namespace}-Button--icon`]: icon,
  };

  return (
    <ContextElement contextId={`${namespace}-button`} styles={style}>
      <button
        part="button"
        className={classMap(classTable)}
        aria-disabled={!!disabled}
        onClick={handleClick}
      >
        {icon ? <Icon icon={iconType} size="medium"></Icon> : undefined}
        {loading ? <div className={`${namespace}-Button__loading`}></div> : label}
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
  loading: PropTypes.bool,
};

export default Button;
