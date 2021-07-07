import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Brand from '../brand/index.js';

function HeaderEmpty({
  ghost, 
  logoSource, 
  children
}){
  return (
    <ContextElement contextId={`${namespace}-HeaderEmpty`} styles={style}>
      <div
        className={`
          ${namespace}-HeaderEmpty
          ${ghost ? `${namespace}-HeaderEmpty--ghost` : ''}
        `}
      >
        <Brand alt="Logo" type="logotype" size="medium" source={logoSource}/>
        {children}
      </div>
    </ContextElement>
  )
}

HeaderEmpty.propTypes = {
  ghost: PropTypes.bool,
  logo: PropTypes.string
};

export default HeaderEmpty;