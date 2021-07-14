import { createGooberGetter as css } from '@meiuca/context-element-react';
import OverflowMenuStyleType from '../../styles/types/overflow-menu/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(OverflowMenuStyleType)`
  &.${namespace}-OverflowMenu{
    position:relative;
    
    .${namespace}-Icon{
      transform: rotate(90deg);
    }

    .${namespace}-Menu{
      position: absolute;
      right: calc(100% - 48px);
      top: 56px;
      z-index: 10;
    }
  }
`;
