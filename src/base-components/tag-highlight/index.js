import React from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function TagHighlight({
  label = 'Tag Highlight',
  tabIndex,
  role
}){
  return (
    <ContextElement contextId={`${namespace}-TagHighlight`} styles={style}>
      <button className={`${namespace}-TagHighlight`} tabIndex={tabIndex} role={role}>
        {label}
      </button>
    </ContextElement>
  )
}

TagHighlight.propTypes = {
  label: PropTypes.string,
  tabIndex: PropTypes.number,
  role: PropTypes.string
};

export default TagHighlight;