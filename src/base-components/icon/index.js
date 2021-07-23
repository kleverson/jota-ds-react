import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import classMap from '@meiuca/context-element-react/directives/class-map';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import '../../mixins/use-icons.js';

function Icon({ icon, size = 'small', className }) {
  const classTable = {
    [`${namespace}-Icon`]: true,
    [`${namespace}-Icon-${icon}`]: true,
    [`${namespace}-Icon--${size}`]: true,
    [`${className}`]: className,
  };

  return (
    <ContextElement contextId={`${namespace}-Icon`} styles={style}>
      <i className={classMap(classTable)}></i>
    </ContextElement>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon;
