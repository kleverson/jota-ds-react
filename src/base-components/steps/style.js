import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import StepsStyleType from '../../styles/types/steps/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(StepsStyleType)`
  &.${namespace}-Steps {
    display: flex;
    align-items: center;

    .${namespace}-Step {
      position: relative;
      margin-right: ${({ line }) => `${parseInt(line.left) * 2 + parseInt(line.width)}px`};

      &:last-child {
        margin-right: 0px;
        
        &:after,
        &:before {
          display: none;
        }
      }

      &:before,
      &:after {
        content: "";
        position: absolute;  
        height: ${({ line }) => line.height};
        left: ${({ line }) => `calc( 100% + ${parseInt(line.left)}px )`};
      }
      
      &:after {
        width: ${({ line }) => line.width};
        background: ${({ line }) => line.next.backgroundColor};
        z-index: 1;
      }

      &:before {
        width: 0px;
        background: ${({ line }) => line.finish.backgroundColor};
        z-index: 2;
      }

      &--finish {        
        &:before {
          animation: lineAnimation 0.5s ease-in-out forwards;
        }

        &:after {
          opacity: 0;
        }
      }
    }

    .${namespace}-Steps__wrapper {
      margin: 0;
      padding: 0;
      list-style-type: none;      
      display: flex;
      align-items: center;
    }
  }

  @keyframes lineAnimation {
    from {
      width: 0px;
    }

    to {
      width: ${({ line }) => line.width};
    }
  }
`;
