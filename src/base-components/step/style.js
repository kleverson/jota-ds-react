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
      animation: opacity 0.3s ease-in-out 0.5s forwards;
      white-space: nowrap;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
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
      animation: animation 0.5s ease-in-out forwards;    
      background-color: ${ ({ current }) => current.backgroundColor };
      border-radius: ${ ({ current }) => current.borderRadius };
      font-weight: ${ ({ current }) => current.fontWeight };
      line-height: ${ ({ current }) => current.lineHeight };
      color: ${ ({ current }) => current.color };
      padding: ${ ({ current }) => current.paddingVertical } ${ ({ current }) => current.paddingHorizontal };
      min-width: 32px;
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
      0% {
        background-color: ${ ({ current }) => current.backgroundColor };
        width: 32px;
      }
      50% {
        width: 32px;
        background-color: ${ ({ finish }) => finish.backgroundColor };
      }

      100% {
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
