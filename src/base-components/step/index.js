import React, { useEffect, useState } from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Step({ 
  title = '', 
  type = '',
  index = 0
}){

  const [patternType, setPatternType] = useState(type);
  const stepsArray = ['finish', 'current', 'next'];

  useEffect(() => {
    setPatternType(stepsArray.includes(type) ? type : 'current');
  }, [type]);

  const renderFinish = () => {
    return (
      <div className={`${namespace}-Step__icon`}>
        <Icon icon={'check'} size='medium'></Icon>
      </div>
    );
  }

  const renderCurrent = () => {
    return (
      <span>{index + " - " + title}</span>
    );
  }

  const renderNext = () => {
    return index;
  }

  const isFinish = (type) => {
    return type === 'finish';
  }

  const isCurrent = (type) => {
    return type === 'current';
  }

  const isNext = (type) => {
    return type === 'next';
  }

  return (
    <ContextElement contextId={`${namespace}-Step`} styles={style}>
      <li className={`
        ${namespace}-Step
        ${namespace}-Step--${patternType}
      `}>
        {
          isFinish(patternType) ? 
          renderFinish() :
          isCurrent(patternType) ?
          renderCurrent() :
          isNext(patternType) ?
          renderNext() :
          null
        }
      </li>
    </ContextElement>
  )
}

Step.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.number
};

export default Step;