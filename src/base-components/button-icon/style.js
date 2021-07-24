import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import ButtonIconStyleType from '../../styles/types/button-icon/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(ButtonIconStyleType)`
  &.${namespace}-ButtonIcon{
    border: ${context => context.border};
    border-radius: ${context => context.borderRadius};
    background: transparent;
    color: ${context => context.color};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    cursor: pointer;

    &:focus:not(:focus-visible) {
      outline: transparent;
    }
    &:focus-visible {
      outline: ${({ states })  => `${states.focus.outlineWidth} solid ${states.focus.outlineColor}`};
    }
    
    &--onColor{
      color: ${({onColor}) => onColor.color};
    }

    &--small{
      width: ${({sizes}) => sizes.small.width};
      height: ${({sizes}) => sizes.small.height};
    }

    &--medium{
      width: ${({sizes}) => sizes.medium.width};
      height: ${({sizes}) => sizes.medium.height};
    }

    &--large{
      width: ${({sizes}) => sizes.large.width};
      height: ${({sizes}) => sizes.large.height};
    }

    &:hover{
      background-color: ${({states}) => hexToRGB(states.hover.backgroundColor, states.hover.opacity)};

      &.${namespace}-ButtonIcon--onColor{
        background-color: ${({states}) => hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity)};
      }
    }
  }
`;
