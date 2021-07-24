import { createGooberGetter as css } from '@jota-ds/context-element-react';
import cardimageStyleType from '../../styles/types/cardimage/default.js';
import { namespace } from '../../utils/setup.js';

export default css(cardimageStyleType)`
  &.${namespace}-Cardimage{
    .slotted-image{
      width: 100%;
      top: 0;
      left: 0;

      img {
        height: 190px;
      }

      &::slotted(img){
        width: 100%;
      }
    }
    .slotted-content{
      padding: ${context => context.padding};
    }
  }
`;
