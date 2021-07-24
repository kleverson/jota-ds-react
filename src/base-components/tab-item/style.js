import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import TabItemStyleType from '../../styles/types/tab-item/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(TabItemStyleType)`
  &.${namespace}-TabItem{
    font-family: ${ context => context.fontFamily};
    font-weight: ${ context => context.fontWeight};
  }
`;
