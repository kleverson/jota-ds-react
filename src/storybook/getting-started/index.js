import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../../base-components/typography/index.js';

function Welcome() {
  return (
    <ContextElement contextId={`${namespace}-Welcome`} styles={style}>
      <Typography component="heading" variant="h1" size="large">
        Welcome
      </Typography>
    </ContextElement>
  );
}

export default Welcome;
