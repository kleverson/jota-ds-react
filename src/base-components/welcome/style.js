import { createGooberGetter as css } from '@meiuca/context-element-react';
import WelcomeStyleType from '../../styles/types/welcome/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(WelcomeStyleType)`
  &.${namespace}-Welcome{
    font-family: ${ context => context.fontFamily};
    font-weight: ${ context => context.fontWeight};
  }
`;
