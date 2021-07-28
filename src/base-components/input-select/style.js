import { createGooberGetter } from '@jota-ds/context-element-react';
import SelectStyleType from '../../styles/types/input-select/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

const css = createGooberGetter(SelectStyleType);

export default css`
  &.${namespace}-Select {
    position: relative;
    font-family: ${({ select }) => select.fontFamily};

    &--focus {
      border: ${({ select }) => `${select.outlineWidth} solid ${select.outlineColor}`};
    }

    .${namespace}-Select__icon {
      position: absolute;
      bottom: 41%;
      right: 20px;
      color: ${({ input }) => hexToRGB(input.color, input.opacity)};

      &--select-active,
      &--error {
        color: ${({ select }) => select.color};
      }

      &--disabled {
        color: ${({ disabled }) => hexToRGB(disabled.placeholder.color, disabled.placeholder.opacity)};
      }
    }

    .${namespace}-Select__errorMsg {
      display: flex;
      justify-content: space-between;
      margin-top: ${({ error }) => error.spacing};
      color: ${({ select }) => select.color};
      font-family: ${({ select }) => select.fontFamily};
      font-weight: ${({ error }) => error.fontWeight};
      font-size: ${({ error }) => error.fontSize};
      opacity: 0;
    }

    &--error {
      .${namespace}-Select__errorMsg {
        color: ${({ select }) => select.color};
        opacity: 1;
      }
    }

    .${namespace}-Select__label {
      color: ${({ select }) => select.color};
      font-size: ${({ select }) => select.fontSize};
      font-weight: ${({ select }) => select.fontWeight};
      font-family: ${({ select }) => select.fontFamily};
      margin-bottom: ${({ label }) => label.marginBottom};
      line-height: ${({ select }) => select.lineHeight};
      display: block;

      &--disabled {
        color: ${({ disabled }) => hexToRGB(disabled.label.color, disabled.label.opacity)};
      }
    }

    .${namespace}-Select__tag {
      position: relative;
      height: ${({ select }) => select.height};
      background: transparent;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      border-radius: ${({ select }) => select.borderRadius};
      border: ${({ select }) => `${select.borderWidth} solid ${select.color}`};
      font-size: ${({ select }) => select.fontSize};
      font-family: ${({ select }) => select.fontFamily};
      padding-left: ${({ select }) => select.paddingLeft};
      padding-right: ${({ select }) => select.paddingRight};
      color: ${({ input }) => hexToRGB(input.color, input.opacity)};
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 320px;
      margin-bottom: ${({ select }) => select.marginBottom};
      outline: none;

      &:hover,
      &:active {
        color: ${({ select }) => select.color};
        background-color: ${({ select }) => hexToRGB(select.hover, select.opacity)};
      }

      &--error {
        color: ${({ select }) => select.color};
        background-color: ${({ error }) => error.background};
        border: ${({ select, error }) => `${select.borderWidth} solid ${error.border}`};
      }

      &[disabled] {
        color: ${({ disabled }) => hexToRGB(disabled.placeholder.color, disabled.placeholder.opacity)};
        border: ${({ select, disabled }) => `${select.borderWidth} solid ${hexToRGB(disabled.borderColor, disabled.opacity)}`};
        pointer-events: none;
      }
    }
  }

  &.${namespace}-Select--onColor {
    .${namespace}-Select__label {
      color: ${({ onColor }) => onColor.label.color};
      opacity: 1;

      &--disabled {
        color: ${({ onColor }) => hexToRGB(onColor.label.color, onColor.disabled.opacity)};
      }
    }

    span,
    label {
      color: ${({ onColor }) => onColor.color};
      opacity: ${({ disabled }) => disabled.onColorOpacity};
    }

    .${namespace}-Select__icon {
      color: ${({ onColor }) => onColor.color};

      &--disabled {
        color: ${({ onColor }) => hexToRGB(onColor.disabled.placeholder.color, onColor.disabled.placeholder.opacity)};
      }
    }

    .${namespace}-Select__tag {
      border: ${({ select, onColor }) => `${select.borderWidth} solid ${onColor.color}`};
      color: ${({ onColor }) => onColor.color};

      &:hover,
      &:active {
        color: ${({ onColor }) => onColor.color};
        background-color: ${({ onColor }) => hexToRGB(onColor.hover, onColor.opacity)};
      }
      &:focus:not(:focus-visible) {
        outline: transparent;
      }
      &:focus-visible {
        background-color: ${({ onColor }) => hexToRGB(onColor.hover, onColor.opacity)};
      }
      &[disabled] {
        color: ${({ onColor }) => hexToRGB(onColor.disabled.placeholder.color, onColor.disabled.placeholder.opacity)};
        border: ${({ select, onColor }) => `${select.borderWidth} solid ${hexToRGB(onColor.disabled.color, onColor.disabled.opacity)}`};
        opacity: ${({ disabled }) => disabled.onColorOpacity};
      }

      &--error {
        color: ${({ onColor }) => onColor.color};
        background-color: ${({ onColor }) => onColor.error.backgroundColor};
        border: ${({ select, onColor }) => `${select.borderWidth} solid ${onColor.error.borderColor}`};

        &:hover {
          background-color: ${({ onColor }) => onColor.error.backgroundColor};
        }
      }
    }

    &--error {
      .${namespace}-Select__errorMsg {
        color: ${({ onColor }) => onColor.color};
        opacity: 1;
      }
    }
  }
`;
