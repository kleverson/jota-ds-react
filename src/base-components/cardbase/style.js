import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import cardbaseStyleType from '../../styles/types/cardbase/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';


export default css(cardbaseStyleType)`
  &.${namespace}-Cardbase {
    background: ${ context => context.fill };

    border-radius: ${ context => context.borderRadius };
    padding: ${ context => context.padding };
    width: 100%;
    height: 100%;
    min-height: 380px;
    overflow: hidden;
    box-sizing: border-box;

    -webkit-box-shadow: ${context => `inset 0px 0px 0px ${context.borderWidth} ${hexToRGB(context.stroke.color, context.stroke.opacity)}`};
    -moz-box-shadow: ${context => `inset 0px 0px 0px ${context.borderWidth} ${hexToRGB(context.stroke.color, context.stroke.opacity)}`};
    box-shadow: ${context => `inset 0px 0px 0px ${context.borderWidth} ${hexToRGB(context.stroke.color, context.stroke.opacity)}`};
    
    &:focus:not(:focus-visible) {
      outline: transparent;
    }
    &:focus-visible {
      outline: ${context => `${context.outlineWidth} solid ${context.outlineColor}`};
    }

    &--onColor {
      background: ${ context => context.onColor.fill };
    }
    &--noPadding {
      padding: 0;
    }

    @media (min-width: 1024px) {
      &:not(:focus) {
        ${ context => context.motion }
      }

      &:hover {
        box-shadow: ${ context => `${context.hover.boxShadowLevel} ${context.hover.boxShadowColor}`};
        -webkit-box-shadow: ${ context => `${context.hover.boxShadowLevel} ${context.hover.boxShadowColor}`};
        -moz-box-shadow: ${ context => `${context.hover.boxShadowLevel} ${context.hover.boxShadowColor}`};
      }

      &--onColor {
        &:hover {
          box-shadow: ${ context => `${context.hover.boxShadowLevel} ${hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity)}`};
          -webkit-box-shadow: ${ context => `${context.hover.boxShadowLevel} ${hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity)}`};
          -moz-box-shadow: ${ context => `${context.hover.boxShadowLevel} ${hexToRGB(context.hover.onColor.boxShadowColor, context.hover.onColor.boxShadowOpacity)}`};
        }
      }      
    }
  }
`;