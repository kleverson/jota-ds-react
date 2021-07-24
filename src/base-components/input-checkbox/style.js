import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import checkboxStyleType from '../../styles/types/input-checkbox/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(checkboxStyleType)`
  &.${namespace}-Checkbox-label {
    display: inline-flex;
    align-items: center;
    color: ${({ label }) => label.color};
    font-family: ${({ label }) => label.fontFamily};
    font-size: ${({ label }) => label.fontiSize};
    font-weight: ${({ label }) => label.fontWeight};
    line-height: ${({ label }) => label.lineHeight};
    align-items: center;
    cursor: pointer;
    position: relative;
    user-select: none;

    &:hover {
      color: ${({ states }) => states.hover.borderColor};
      ${context => context.motion};
    }

    &:focus:not(:focus-visible) {
      outline: transparent;
    }
    
    &:focus-visible {
      outline: ${({ states }) => `${states.focus.outlineWidth} solid ${states.focus.outlineColor}`};
    }

    &--disabled {
      color: ${({ states }) => states.disabled.color};
      opacity: ${({ states }) => states.disabled.opacity};
    }

    input {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0px;
      margin: 0;
      width: ${({ base }) => base.width};
      height: ${({ base }) => base.height};
      border-width: ${({ base }) => base.borderWidth};
      border-color: ${({ base }) => base.borderColor};
      margin-right: ${({ base }) => base.margin};
      border-style: solid;
      border-radius: ${({ base }) => base.borderRadius};
      cursor: pointer;
      position: relative;
      z-index: 2;

      &::before {
        position: absolute;
        display: block;
        border-color: ${({ states }) => states.icon.color};
        border-style: solid;
        border-width: 0 1px 1px 0;
        height: 12px;
        width: 5px;
        left: 3px;
        top: -2px;
        opacity: 0;
        transform: rotate(45deg);
        z-index: 3;
        content: '';
      }

      &:hover {
        border-color: ${({ states }) => states.hover.borderColor};
        background-color: ${({ states }) =>
          hexToRGB(states.hover.backgroundColor, states.hover.opacity)};
        ${context => context.motion};
      }

      &:disabled {
        cursor: not-allowed;
        border-color: ${({ states }) => states.disabled.borderColor};
        color: ${({ states }) => states.disabled.color};
      }

      &:checked {
        border-color: ${({ base }) => base.backgroundColor};
        background: ${({ base }) => base.backgroundColor};
        color: #fff;

        &::before {
          opacity: 1;
        }

        &:hover {
          border-color: ${({ base }) => base.backgroundColor};
          background: ${({ base }) => base.backgroundColor};
          ${context => context.motion};
        }

        &:disabled {
          background-color: ${({ states }) => states.disabledCheck.backgroundColor};
          border-width: ${({ states }) => states.disabledCheck.borderWidth};
          color: ${({ states }) => states.disabledCheck.color};

          &::before {
            left: 5px;
            top: -1px;
          }
        }
      }
    }

    &--onColor {
      color: ${({ label }) => label.onColor.color};

      &--disabled {
        pointer-events: none;
        outline: none;

        &:focus-visible {
          outline: none;
        }
      }

      &:hover {
        color: ${({ states }) => states.hover.onColor.borderColor};
      }

      input {
        border-color: ${({ base }) => base.onColor.borderColor};

        &::before {
          border-color: ${({ states }) => states.icon.onColor.color};
        }

        &:disabled {
          pointer-events: none;
          border-color: ${({ states }) =>
            hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity)};
        }

        &:checked {
          border-color: ${({ base }) => base.onColor.backgroundColor};
          background: ${({ base }) => base.onColor.backgroundColor};
          &:hover {
            border-color: ${({ base }) => base.onColor.backgroundColor};
            background: ${({ base }) => base.onColor.backgroundColor};
          }

          &:disabled {
            pointer-events: none;
            border-color: ${({ states }) =>
              hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity)};
            background-color: ${({ states }) => states.disabled.onColor.backgroundColor};
          }          
        }

        &:hover{
          border-color: ${({ states }) => states.hover.onColor.borderColor};
          background-color: ${({ states }) =>
            hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity)};
        }
      }
    }
  }
`;
