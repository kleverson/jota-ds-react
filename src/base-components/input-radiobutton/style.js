import { createGooberGetter as css } from '@jota-ds/context-element-react';
import radiobuttonStyleType from '../../styles/types/input-radiobutton/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(radiobuttonStyleType)`
  &.${namespace}-Radiobutton-label {
    display: flex;
    align-items: center;

    cursor: pointer;
    display: flex;
    font-family: ${({ label }) => label.fontFamily};
    font-size: ${({ label }) => label.fontSize};
    line-height: ${({ label }) => label.lineHeight};
    font-weight: ${({ label }) => label.fontWeight};
    position: relative;
    user-select: none;
    color: #000;
    ${context => context.motion};

    & + .${namespace}-Radiobutton-label {
      margin-top: ${({ label }) => label.marginTop};
    }

    &:hover {
      color: ${({ states }) => states.hover.color};
    }

    &--disabled {
      pointer-events: none;
      cursor: not-allowed;
      color: ${({ states }) => hexToRGB(states.disabled.color, states.disabled.opacity)};
    }

    input {
      appearance: none;

      width: ${({ base }) => base.width};
      height: ${({ base }) => base.height};

      border-width: ${({ base }) => base.borderWidth};
      border-color: ${({ base }) => base.borderColor};
      border-style: solid;

      background-color: transparent;
      cursor: pointer;
      margin: 0;
      margin-right: ${({ base }) => base.margin};
      top: -2px;
      z-index: 2;
      border-radius: 50%;
      ${context => context.motion};

      &:hover {
        border-color: ${({ states }) => states.hover.icon.borderColor};
        background: ${({ states }) => hexToRGB(states.hover.icon.fill, states.hover.icon.opacity)};
      }

      &:focus-visible{
        outline-color: ${({ states }) => states.focus.outlineColor};
        outline-width: ${({ states }) => states.focus.outlineWidth};
      }

      &:disabled {
        pointer-events: none;
        cursor: not-allowed;
        border-color: ${({ states }) => hexToRGB(states.disabled.icon.borderColor, states.disabled.icon.opacity)};
      }

      &:checked {
        border-width: 5px;
        border-color: ${({ states }) => states.base.backgroundColor};

        &:hover {
          border-color: ${({ states }) => states.hover.borderColor};
          background: ${({ states }) => hexToRGB(states.hover.icon.fill, states.hover.icon.opacity)};
        }

        &:disabled {
          pointer-events: none;
          border-color: ${({ states }) => states.disabled.borderColor};
          background: ${({ states }) => states.hover.borderColor};
        }
      }
    }
    &--onColor {
      color: ${({ label }) => label.onColor.color};

      &:hover {
        color: ${({ states }) => states.hover.onColor.borderColor};
      }

      &.${namespace}-Radiobutton-label--disabled {
        color: ${({ states }) => hexToRGB(states.disabled.onColor.color, states.disabled.onColor.opacity)};
      }

      input {
        border-color: ${({ base }) => base.onColor.borderColor};

        &:checked {
          border-color: ${({ base }) => base.onColor.backgroundColor};
          &:hover {
            border-color: ${({ base }) => base.onColor.backgroundColor};
          }
        }

        &:hover{
          border-color: ${({ states }) => states.hover.onColor.borderColor};
          background-color: ${({ states }) => hexToRGB(states.hover.onColor.backgroundColor, states.hover.onColor.opacity)};
        }
        &:disabled {
          pointer-events: none;
          border-color: ${({ states }) => hexToRGB(states.disabled.onColor.borderColor, states.disabled.onColor.opacity)};
        }
      }
    }
  }
`;
