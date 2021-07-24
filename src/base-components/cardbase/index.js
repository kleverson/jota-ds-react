import React from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function Cardbase({ onColor, handleClick, noPadding = false, children }) {
  function _handleClick() {
    if (typeof handleClick === 'function') {
      handleClick(true);
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Cardbase`} styles={style}>
      <div
        className={`
          ${namespace}-Cardbase
          ${onColor ? `${namespace}-Cardbase--onColor` : ''}
          ${noPadding ? `${namespace}-Cardbase--noPadding` : ''}
        `}
        tabIndex="0"
        onClick={_handleClick}
      >
        {children}
      </div>
    </ContextElement>
  );
}

Cardbase.propTypes = {
  onColor: PropTypes.bool,
  handleClick: PropTypes.func,
  noPadding: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default Cardbase;
