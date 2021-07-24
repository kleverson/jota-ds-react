import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import TooltipStyleType from '../../styles/types/tooltip/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(TooltipStyleType)`
  &.${namespace}-Tooltip{
    position: relative;

    &--top{
      justify-content: center;
      .${namespace}-Tooltip__Content{
        bottom: 100%;
      }
      &-start{
        .${namespace}-Tooltip__Content{
          bottom: 100%;
          left: 0;
        }
      }
      &-end{
        .${namespace}-Tooltip__Content{
          bottom: 100%;
          right: 0;
        }
      }
    }
    &--right{
      .${namespace}-Tooltip__Content{
        left: 100%;
      }
      &-start{
        align-items: flex-start;
        .${namespace}-Tooltip__Content{
          left: 100%;
        }
      }
      &-end{
        align-items: flex-end;
        .${namespace}-Tooltip__Content{
          left: 100%;
        }
      }
    }
    &--bottom{
      justify-content: center;
      .${namespace}-Tooltip__Content{
        top: 100%;
      }
      &-start{
        .${namespace}-Tooltip__Content{
          top: 100%;
          left: 0;
        }
      }
      &-end{
        .${namespace}-Tooltip__Content{
          top: 100%;
          right: 0;
        }
      }
    }
    &--left{
      .${namespace}-Tooltip__Content{
        right: 100%;
      }
      &-start{
        align-items: flex-start;
        .${namespace}-Tooltip__Content{
          right: 100%;
        }
      }
      &-end{
        align-items: flex-end;
        .${namespace}-Tooltip__Content{
          right: 100%;
        }
      }
    }

    .${namespace}-Tooltip__Content{
      font-family: ${({shape}) => shape.fontFamily};
      font-size: ${({shape}) => shape.fontSize};
      font-weight: ${({shape}) => shape.fontWeight};
      line-height: ${({shape}) => shape.lineHeight};
      visibility: hidden;
      opacity: 0;
      position: absolute;
      width: max-content;
      max-width: 224px;
      padding: ${({shape}) => shape.padding};
      background-color: ${({shape}) => shape.backgroundColor};
      border-radius: ${({shape}) => shape.borderRadius};
      box-sizing: border-box;
      box-shadow: ${({shape}) => `${shape.shadow} ${hexToRGB(shape.shadowColor, shape.shadowOpacity)}`};
      word-break: break-all;

      &--onColor {
        background-color: ${ ({ onColor }) => onColor.backgroundColor };
        color: ${ ({ onColor }) => onColor.color };
      }      
    }

    &:hover{
      .${namespace}-Tooltip__Content{
        visibility: visible;
        opacity: 1;
      }
    }
  }
`;
