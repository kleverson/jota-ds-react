import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Step from '../step/index.js';

function Steps({ ariaLabel = '', steps }) {
  return (
    <ContextElement contextId={`${namespace}-Steps`} styles={style}>
      <div role="group" aria-label={ariaLabel} className={`${namespace}-Steps`}>
        <ol className={`${namespace}-Steps__wrapper`}>
          {steps.map(({ type, title }, index) => (
            <Step type={type} title={title} index={index + 1} key={index}></Step>
          ))}
        </ol>
      </div>
    </ContextElement>
  );
}

Steps.propTypes = {
  ariaLabel: PropTypes.string,
  children: PropTypes.any,
  steps: PropTypes.array,
};

export default Steps;
