import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../typography/index.js';

function Welcome({title}){
  return (
    <ContextElement contextId={`${namespace}-Welcome`} styles={style}>
      <Typography component="heading" variant="h1" size="large">Welcome</Typography>
    </ContextElement>
  )
}

Welcome.propTypes = {
  title: PropTypes.string
};

export default Welcome;