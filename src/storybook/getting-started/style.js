import { createGooberGetter as css } from '@meiuca/context-element-react';
import WelcomeStyleType from './style-type.js';
import { namespace } from '../../utils/setup.js';

export default css(WelcomeStyleType)`
  &.${namespace}-Welcome{
    font-family: ${context => context.fontFamily};
    font-weight: ${context => context.fontWeight};
  }
`;
