import React from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../typography/index.js';

function Tooltip({position = "top", body, onColor, children}){
  return (
    <ContextElement contextId={`${namespace}-Tooltip`} styles={style}>
      <span className={`
        ${namespace}-Tooltip
        ${namespace}-Tooltip--${position}
      `}>
        <span id="tooltipDescription" 
          className={`
            ${namespace}-Tooltip__Content
            ${onColor ? `${namespace}-Tooltip__Content--onColor` : ''}
          `}>
          <Typography component="caption" onColor={!onColor}>
            {body}
          </Typography>
        </span>
        {children}
      </span>
    </ContextElement>
  )
}

Tooltip.propTypes = {
  position: PropTypes.string,
  body: PropTypes.string,
};

export default Tooltip;