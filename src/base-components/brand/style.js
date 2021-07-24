import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import BrandStyleType from '../../styles/types/brand/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(BrandStyleType)`
  &.${namespace}-Brand{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;


    &.${namespace}-Brand--logotype{
      &.${namespace}-Brand--small{
        width: ${({ logotype }) => logotype.small.width};
        height: ${({ logotype }) => logotype.small.height};
      }
  
      &.${namespace}-Brand--medium{
        width: ${({ logotype }) => logotype.medium.width};
        height: ${({ logotype }) => logotype.medium.height};
      }
  
      &.${namespace}-Brand--large{
        width: ${({ logotype }) => logotype.large.width};
        height: ${({ logotype }) => logotype.large.height};
      }
    }

    &.${namespace}-Brand--symbol{
      &.${namespace}-Brand--small{
        width: ${({ symbol }) => symbol.small.width};
        height: ${({ symbol }) => symbol.small.height};
      }
  
      &.${namespace}-Brand--medium{
        width: ${({ symbol }) => symbol.medium.width};
        height: ${({ symbol }) => symbol.medium.height};
      }
  
      &.${namespace}-Brand--large{
        width: ${({ symbol }) => symbol.large.width};
        height: ${({ symbol }) => symbol.large.height};
      }
    }

    .${namespace}-Brand__img{
      max-width: 100%;
    }
  }
`;
