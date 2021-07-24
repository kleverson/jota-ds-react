import { createGooberGetter as css } from '@jota-ds/context-element-react';
import SwitchStyleType from '../../styles/types/switch/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(SwitchStyleType)`
  &.${namespace}-Switch{
    display: inline-flex;
    align-items: center;
    .${namespace}-Switch__Selector{
      position: relative;
      height: 24px;
      width: 40px;
      cursor: pointer;
      outline: none;
      background-color: transparent;
      border: ${context => `${context.selector.borderWidth} solid ${context.selector.borderColor}`};
      border-radius: ${context => context.selector.borderRadius};
      ${context => context.motion};

      .${namespace}-Switch__SelectorThumb {
        width: 16px;
        height: 16px;
        display:inline-block;
        text-indent: 10000%;
        overflow: hidden;
        position: absolute;
        top: 2px;
        left: 2px;
        background-color: ${context => context.selector.icon.fill};
        border-radius: ${context => context.selector.icon.borderRadius};
        ${context => context.motion};
      }
    }

    &.${namespace}-Switch--checked {
      .${namespace}-Switch__Selector{
        .${namespace}-Switch__SelectorThumb {
          left: 18px;
        }
      }
      &:not(.${namespace}-Switch--disabled){
        .${namespace}-Switch__Selector{
          background-color: ${context => context.states.checked.selector.fill};
          border-color: ${context => context.states.checked.selector.fill};
          .${namespace}-Switch__SelectorThumb {
            background-color: ${context => context.states.checked.selector.icon.fill};
          }
        }
      }
    }

    .${namespace}-Switch__Label {
      padding-left: ${context => context.label.paddingLeft};
      font-family: ${context => context.label.fontFamilies};
      font-size: ${context => context.label.fontSizes};
      font-weight: ${context => context.label.fontWeights};
      line-height: ${context => context.label.lineHeights};
      color: ${context => context.label.fill};
      cursor: pointer;
      ${context => context.motion};
    }

    &:hover:not(&.${namespace}-Switch--disabled):not(&.${namespace}-Switch--checked){
      .${namespace}-Switch__Selector{
        background-color: ${context => hexToRGB(context.states.hover.selector.fill, context.states.hover.selector.opacity)};
      }
    }

    &.${namespace}-Switch--disabled{
      .${namespace}-Switch__Selector{
        border: ${context => `${context.states.disabled.selector.borderWidth} solid ${hexToRGB(context.states.disabled.selector.borderColor, context.states.disabled.selector.borderOpacity)}`};
        .${namespace}-Switch__SelectorThumb {
          background-color: ${context => hexToRGB(context.states.disabled.selector.icon.fill, context.states.disabled.selector.icon.opacity)};
        }
      }

      .${namespace}-Switch__Label {
        color: ${context => hexToRGB(context.states.disabled.label.fill, context.states.disabled.label.opacity)};
      }
    }

    &:focus:not(:focus-visible) {
      outline: transparent;
    }

    &:focus-visible {
      outline-style: solid;
      outline-width: ${context => context.states.focus.outlineWidth};
      outline-color: ${context => context.states.focus.outlineColor};

      .${namespace}-Switch__Selector {
        background-color: ${context => hexToRGB(context.onColor.states.focus.selector.fill, context.onColor.states.focus.selector.opacity)};
      }
    }

    &--onColor {
      .${namespace}-Switch__Selector{
        border-color: ${context => context.onColor.selector.borderColor};
        .${namespace}-Switch__SelectorThumb {
          background-color: ${context => context.onColor.selector.icon.fill};
        }
      }
      .${namespace}-Switch__Label {
        color: ${context => context.onColor.label.fill};
      }

      &:hover {
        &:not(&.${namespace}-Switch--disabled){
          &:not(&.${namespace}-Switch--checked) {
            .${namespace}-Switch__Selector{
              background-color: ${context => hexToRGB(context.onColor.states.hover.selector.fill, context.onColor.states.hover.selector.opacity)};
            }
          }
        }
      }

      &.${namespace}-Switch--checked {
        &:not(.${namespace}-Switch--disabled){
          .${namespace}-Switch__Selector{
            background-color: ${context => context.onColor.states.checked.selector.fill};
            border-color: ${context => context.onColor.states.checked.selector.fill};
            .${namespace}-Switch__SelectorThumb {
              background-color: ${context => context.onColor.states.checked.selector.icon.fill};
            }
          }
        }
      }

      &.${namespace}-Switch--disabled {
        .${namespace}-Switch__Selector{
          border-color: ${context => hexToRGB(context.onColor.states.disabled.selector.borderColor, context.onColor.states.disabled.selector.borderOpacity)};
          .${namespace}-Switch__SelectorThumb {
            background-color: ${context => hexToRGB(context.onColor.states.disabled.selector.icon.fill, context.onColor.states.disabled.selector.icon.opacity)};
          }
        }

        .${namespace}-Switch__Label {
          color: ${context => hexToRGB(context.onColor.states.disabled.label.fill, context.onColor.states.disabled.label.opacity)};
        }
      }
    }
  }
`;