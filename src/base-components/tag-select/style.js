import { createGooberGetter as css } from '@meiuca/context-element-react';
import TagSelectStyleType from '../../styles/types/tag-select/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(TagSelectStyleType)`
  &.${namespace}-TagSelect {
    font-family: ${ context => context.fontFamily };
    font-weight: ${ context => context.fontWeight };
    font-size: ${ context => context.fontSize };
    border-radius: ${ context => context.borderRadius };
    border: ${ context => context.color } ${ context => context.borderWidth } solid;
    color: ${ context => context.color };
    line-height: ${ context => context.lineHeight };
    padding-left: ${ context => context.paddingLeft };
    padding-right: ${ context => context.paddingRight };
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    height: 32px;

    &:hover {
      border: ${ ({ hover }) => hover.backgroundColor } ${ context => context.borderWidth } solid;
      background-color: ${ ({ hover }) => hover.backgroundColor };
      color: ${ ({ hover }) => hover.color };
      ${context => context.motion};
    }

    &:focus:not(:focus-visible) {
      outline: 0;
    }

    &:focus-visible {
      border: ${ ({ focus }) => focus.backgroundColor } ${ context => context.borderWidth } solid;
      background-color: ${ ({ focus }) => focus.backgroundColor };
      color: ${ ({ focus }) => focus.color };
      outline-color: ${ ({ focus }) => focus.outlineColor };
      outline-style: solid;
      outline-width: 2px;
      ${context => context.motion};
    }

    &:active {
      border: ${ ({ active }) => active.backgroundColor } ${ context => context.borderWidth } solid;
      background-color: ${ ({ active }) => active.backgroundColor };
      color: ${ ({ active }) => active.color };
      ${context => context.motion};
    }

    &--disabled {
      border: transparent ${ context => context.borderWidth } solid;
      background-color: ${({ disabled }) => hexToRGB(disabled.background, disabled.opacityBorder)};
      color: ${ ({ disabled }) => hexToRGB(disabled.color, disabled.opacityText) };
      pointer-events: none;
      cursor: default;
    }

    &--active {
      border: ${ ({ active }) => active.backgroundColor } ${ context => context.borderWidth } solid;
      background-color: ${ ({ active }) => active.backgroundColor };
      color: ${ ({ active }) => active.color };
      ${context => context.motion};      
    }

    &--onColor {
      border: ${ ({ onColor }) => onColor.color } ${ context => context.borderWidth } solid;
      color: ${ ({ onColor }) => onColor.color };
      background: transparent;

      &:hover {
        border: ${ ({ onColor }) => onColor.hover.backgroundColor } ${ context => context.borderWidth } solid;
        background-color: ${ ({ onColor }) => onColor.hover.backgroundColor };
        color: ${ ({ onColor }) => onColor.hover.color };
      }

      &:focus-visible:not(:active) {
        border-radius: ${ context => context.borderRadius };
        border: ${ ({ onColor }) => onColor.focus.backgroundColor } ${ context => context.borderWidth } solid;
        background-color: ${ ({ onColor }) => onColor.focus.backgroundColor };
        color: ${ ({ onColor }) => onColor.focus.color };
        outline-color: ${ ({ onColor }) => onColor.focus.outlineColor };
        outline-style: solid;
        outline-width: ${ ({ focus }) => focus.borderWidth };
      }

      &:active {
        border: ${ ({ onColor }) => onColor.active.backgroundColor } ${ context => context.borderWidth } solid;
        background-color: ${ ({ onColor }) => onColor.active.backgroundColor };
        color: ${ ({ onColor }) => onColor.active.color };
      }

      &--disabled {
        border: transparent ${ context => context.borderWidth } solid;
        background-color: ${ ({ onColor }) => hexToRGB(onColor.disabled.backgroundColor, onColor.disabled.opacity) };
        color: ${ ({ onColor }) => onColor.disabled.color };
        pointer-events: none;
        cursor: default;
      }

      &--active {
        border: ${ ({ onColor }) => onColor.active.backgroundColor } ${ context => context.borderWidth } solid;
        background-color: ${ ({ onColor }) => onColor.active.backgroundColor };
        color: ${ ({ onColor }) => onColor.active.color };
      }      
    }
  }
`;
