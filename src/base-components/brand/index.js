import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function Brand({ 
  source, 
  size, 
  type = 'symbol',
  alt 
}){
  const normalizeSizes = (size) => {
    const patternSize = ['small', 'medium', 'large'].includes(size)
      ? size
      : 'medium';
    return patternSize;
  };

  const normalizeTypes = (type) => {
    const patternType = ['logotype', 'symbol'].includes(type)
      ? type
      : 'logotype';
    return patternType;
  };


  return (
    <ContextElement contextId={`${namespace}-Brand`} styles={style}>
      <div
        className={`
          ${namespace}-Brand
          ${namespace}-Brand--${normalizeSizes(size)}
          ${namespace}-Brand--${normalizeTypes(type)}
        `}
      >
        <img className={`${namespace}-Brand__img`} src={source} alt={alt} />
      </div>
    </ContextElement>
  )
}

Brand.propTypes = {
  source: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  size: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Brand;