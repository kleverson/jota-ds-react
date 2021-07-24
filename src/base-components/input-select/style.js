import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import SelectStyleType from '../../styles/types/input-select/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(SelectStyleType)`
  &.${namespace}-Select {
    position: relative; 
    font-family: ${({ select }) => select.fontFamily}; 
    
    &--focus{
      border: ${({ select }) => select.outlineWidth} solid ${({ select }) => select.outlineColor};
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
        color:  ${({ disabled }) => hexToRGB(disabled.label.color, disabled.label.opacity)};
      }
    }
    .${namespace}-Select__trigger {
      height: ${({ select }) => select.height};
      background: transparent;
      border-radius: ${({ select }) => select.borderRadius};
      border: ${({ select }) => select.borderWidth} solid ${({ select }) => select.color} ;
      font-size: ${({ select }) => select.fontSize};
      text-align: left;
      padding: 0px ${({ select }) => select.padding};
      color: ${({ input }) => hexToRGB(input.color, input.opacity)};
      display: flex;
      align-items: center;
      min-width: 320px;
      justify-content: space-between;
      margin-bottom: ${({ select }) => select.marginBottom};
      &:hover,
      &:active {
        color: ${({ select }) => select.color};
        background-color: ${({ select }) => hexToRGB(select.hover, select.opacity)};
      }

      &--error {
        color: ${({ select }) => select.color};
        background-color: ${({ error }) => error.background};
        border:${({ select }) => select.borderWidth} solid ${({ error }) => error.border};      
      }
      &[disabled]{
        color: ${({ disabled }) =>
          hexToRGB(disabled.placeholder.color, disabled.placeholder.opacity)};
        border: ${({ select }) => select.borderWidth} solid ${({ disabled }) =>
  hexToRGB(disabled.borderColor, disabled.opacity)};
        pointer-events: none;
      }
    }

    .${namespace}-Select__option-list{
      opacity: 0;
      background-color: ${({ list }) => list.background};
      width: 100%;
      border-radius: ${({ list }) => list.borderRadius};
      margin-top: ${({ list }) => list.marginTop};
      position: absolute;
      visibility: hidden;
      list-style-type: none;
      padding: 0px;
      margin-left: 0px;
      margin-right: 0px;
      &[aria-expanded=true]{
        opacity: 1;
        visibility: visible;
      }
      .${namespace}-Select__option{
        background-color: transparent;
        color: ${({ listItem }) => listItem.color};
        font-size: ${({ listItem }) => listItem.fontSize};
        border: none;
        width: 100%;
        padding: 16px;
        text-align: left;
        box-sizing: border-box;
        
        &:focus:not(:focus-visible) {
          outline: transparent;
        }

        &--current,
        &:focus-visible,
        &:hover{
          background-color: ${({ listItem }) => listItem.hover};
          opacity: ${({ listItem }) => listItem.opacity};
          outline: transparent;
          &:before,
          &:after {
            background-color: transparent;
          }
        }
        &:before{
          content: "";
          height: 1px;
          background-color: ${({ listItem }) => listItem.borderColor};;
          display: block;
          top: -16px;
          position: relative;
        }
        &:after{
          content: "";
          height: 1px;
          background-color: ${({ listItem }) => listItem.borderColor};;
          display: block;
          bottom: -16px;
          position: relative;
        }
        &--last{
          &:after,
          &:before{
            display: none;
          }
          &:focus:not(:focus-visible) {
            outline: transparent;
          }
          &:focus-visible,
          &:hover{
            background-color: ${({ listItem }) => listItem.hover};
            outline: transparent;
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
          }
        }
        &--first{
          &:after,
          &:before{
            display: none;
          }
          &:focus,
          &:hover{
            background-color: ${({ listItem }) => listItem.hover};
            outline: transparent;
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
          }
        }
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

    span {
      color: ${({ onColor }) => onColor.color};
      opacity: ${({ disabled }) => disabled.onColorOpacity};
    }

    .${namespace}-Select__trigger {
      border: ${({ select }) => select.borderWidth} solid ${({ onColor }) => onColor.color} ;
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
        color: ${({ onColor }) =>
          hexToRGB(onColor.disabled.placeholder.color, onColor.disabled.placeholder.opacity)};
        border: ${({ select }) => select.borderWidth} solid ${({ onColor }) =>
  hexToRGB(onColor.disabled.color, onColor.disabled.opacity)};
        opacity: ${({ disabled }) => disabled.onColorOpacity};
      }

      &--error {
        color: ${({ onColor }) => onColor.color};
        background-color: ${({ onColor }) => onColor.error.backgroundColor};
        border: ${({ select }) => select.borderWidth} solid ${({ onColor }) =>
  onColor.error.borderColor};

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
