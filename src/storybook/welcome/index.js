import React from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import style from './style.js';
import { namespace, ds } from '../../utils/setup.js';
import IlustraWelcome from '../../assets/storybook/ilustra-welcome.svg';
import MeiucaLogo from '../../assets/storybook/meiuca-logo.svg';

function Welcome() {
  return (
    <ContextElement contextId={`${namespace}-Welcome`} styles={style}>
      <div className={`${namespace}-Welcome`}>
        <div className={`${namespace}-Welcome__textBox`}>
          <div className={`${namespace}-Welcome__upperTextBox`}>
            <h1>
              {ds} <br /> Design System
            </h1>
            <h2>React</h2>
          </div>

          <div className={`${namespace}-Welcome__bottomTextBox`}>
            <caption>
              O Design System <br /> Open Source da Meiuca
            </caption>

            <img src={MeiucaLogo} alt="logo meiuca" />
          </div>
        </div>

        <img aria-hidden="true" src={IlustraWelcome} alt="ilustra welcome" />
      </div>
    </ContextElement>
  );
}

export default Welcome;
