import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Step from '../step/index.js';

function Steps({ 
  ariaLabel = '',
  children 
}){

  return (
    <ContextElement contextId={`${namespace}-Steps`} styles={style}>
      <div 
        role="group" 
        aria-label={ariaLabel}
        className={`${namespace}-Steps`}>
        <ol className={`${namespace}-Steps__wrapper`}>
          {
            children.map(({ props }, index) => {
              return (
                <Step type={props.type} title={props.title} index={index + 1} key={index}></Step>
              )
            })
          }
        </ol>
      </div>
    </ContextElement>
  )
}

Steps.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.any
};

export default Steps;