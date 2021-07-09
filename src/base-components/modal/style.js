import { createGooberGetter as css } from '@meiuca/context-element-react';
import ModalStyleType from '../../styles/types/modal/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(ModalStyleType)`
  &.${namespace}-Modal{
    justify-content: center;
    align-items: center;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${({overlay}) => hexToRGB(overlay.backgroundColor, overlay.opacity)};

    &--open{
      display: flex;
    }

    .${namespace}-ButtonIcon{
      position: absolute;
      top: ${({buttonClose}) => buttonClose.top};
      right: ${({buttonClose}) => buttonClose.right};
    }

    .${namespace}-Modal__shape {
      background-color: ${({shape}) => shape.backgroundColor};
      box-shadow: ${({shape}) => `${shape.shadow} ${hexToRGB(shape.shadowColor, shape.shadowOpacity)}`};
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    .${namespace}-Modal__content{
      flex: 1;
      padding: ${({content}) => content.padding};
    }

    .${namespace}-Modal__stackfix{
      height: ${({content}) => content.padding};
    }

    .${namespace}-Modal__nav{
      display: flex;
      justify-self: flex-end;
      justify-content: center;
      padding: ${({nav}) => nav.padding};
      background-color: ${({nav}) => nav.backgroundColor};
    }
  }

  @media screen and (min-width: 601px){
    &.${namespace}-Modal{
      .${namespace}-Modal__stackfix{
        display: none;
      }

      .${namespace}-Modal__nav {
        justify-content: flex-end;
        border-radius: ${({shape}) => shape.borderRadius};
      }

      .${namespace}-Modal__shape{
        width: 464px;
        height: initial;
        min-height: 450px;
        border-radius: ${({shape}) => shape.borderRadius};
      }
    }
  }
`;
