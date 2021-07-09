import { createGooberGetter as css } from '@meiuca/context-element-react';
import AvatarStyleType from '../../styles/types/avatar/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(AvatarStyleType)`
  &.${namespace}-Avatar{
    position: relative;

    .${namespace}-Avatar__image-box{
      background-color: ${ context => context.backgroundColor };
      border-radius: ${ context => context.borderRadius };
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    .${namespace}-Avatar__notification {
      position: relative;
      border-radius: 50%;
      background-color: ${({ notification }) => notification.backgroundColor };
      display: block;
      height: 8px;
      width: 8px;
      position: absolute;
      top: 0;
    }

    .${namespace}-Icon {
      color: ${({ icon }) => icon.color};
    }

    &--small {
      height: 24px;
      width: 24px;

      .${namespace}-Avatar__img { 
        height: 24px;
      }

      .${namespace}-Avatar__notification{
        right: -2px;
      }
    }

    &--medium {
      height: 40px;
      width: 40px;

      .${namespace}-Avatar__img { 
        height: 40px;
      }

      .${namespace}-Avatar__notification{
        right: 3px;
      }
    }

    &--large {
      height: 64px;
      width: 64px;

      .${namespace}-Avatar__img { 
        height: 64px;
      }   
      
      .${namespace}-Avatar__notification{
        display: none;
      }
    }

    &--onColor {
      .${namespace}-Avatar__image-box {
        background-color: ${({ onColor }) => onColor.backgroundColor };
      }

      &--small {
        .${namespace}-Avatar__notification {
          right: -2px;
        }
      }

      &--medium {
        .${namespace}-Avatar__notification{
          right: 3px;
        }
      }
      
      .${namespace}-Icon {
        color: ${({ onColor }) => onColor.icon.color};
      }
    }
  }
`;
