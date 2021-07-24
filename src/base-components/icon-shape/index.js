import React from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function IconShape({icon = "shapes", size= "small", variant = "default"}){
  return (
    <ContextElement contextId={`${namespace}-IconShape`} styles={style}>
      <div
        className={`
          ${namespace}-IconShape
          ${namespace}-IconShape--${size}
          ${namespace}-IconShape--${variant}
        `}
      >
        <Icon size={size} icon={icon}></Icon>
      </div>
    </ContextElement>
  )
}

IconShape.propTypes = {
  icon: PropTypes.string,
  size: PropTypes.string,
  variant: PropTypes.string,
};

export default IconShape;