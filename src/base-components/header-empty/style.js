import { createGooberGetter as css } from '@meiuca/context-element-react';
import HeaderEmptyStyleType from '../../styles/types/header-empty/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(HeaderEmptyStyleType)`
  &.${namespace}-HeaderEmpty{
    padding: ${ context => context.padding};
    height: ${ context => context.height};
    background-color: ${ context => context.backgroundColor};
    border-bottom: ${({border}) => `${border.width} solid ${border.color}`};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;

    &.${namespace}-HeaderEmpty--ghost{
      background-color: ${({ghost}) => ghost.backgroundColor};
      border-bottom: ${({ghost}) => ghost.border};
    }
  }
`;
