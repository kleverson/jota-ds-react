import React from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function TabItem({ label, children }){
  return (
    <ContextElement contextId={`${namespace}-TabItem`} styles={style}>
      <div
        className={`
          ${namespace}-TabItem
        `}
        role="tabpanel"
      >
        {children}
      </div>
    </ContextElement>
  )
}

TabItem.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any
};

export default TabItem;