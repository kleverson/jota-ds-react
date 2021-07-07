import { createGooberGetter as css } from '@meiuca/context-element-react';
import StepStyleType from '../../styles/types/step/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(StepStyleType)`
  &.${namespace}-Step {
    font-family: ${ context => context.fontFamily};
    font-size: ${context => context.fontSize};
    height: 32px;
    box-sizing: border-box;

    span {
      opacity: 0;
      animation: opacity 0.3s ease-in-out 0.3s forwards;
    }
    
    &--finish {
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${ ({ finish }) => finish.backgroundColor };
      border-radius: ${ ({ finish }) => finish.borderRadius };
    }
    
    &--current {
      animation: animation 0.15s ease-in-out forwards;    
      background-color: ${ ({ current }) => current.backgroundColor };
      border-radius: ${ ({ current }) => current.borderRadius };
      font-weight: ${ ({ current }) => current.fontWeight };
      line-height: ${ ({ current }) => current.lineHeight };
      color: ${ ({ current }) => current.color };
      padding: ${ ({ current }) => current.paddingVertical } ${ ({ current }) => current.paddingHorizontal };
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &--next {
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;      
      background-color: ${ ({ next }) => next.backgroundColor };
      border-radius: ${ ({ next }) => next.borderRadius };
      font-weight: ${ ({ next }) => next.fontWeight };
      color: ${ ({ next }) => next.color };
      border: 2px ${ ({ next }) => next.borderColor } solid;
    }

    .${namespace}-Step__icon {   
      color: ${ ({ icon }) => icon.color };
    }

    @keyframes animation {
      from {
        width: 32px;
      }
      to {
        width: 150px;
      }
    }

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
