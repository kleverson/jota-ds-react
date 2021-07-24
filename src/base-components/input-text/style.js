import { createGooberGetter as css } from '@jota-ds/context-element-react';
import InputTextStyleType from '../../styles/types/input-text/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(InputTextStyleType)`
  &.${namespace}-InputText {
    display: flex;
    flex-direction: column;
    font-family: ${ context => context.fontFamily};
    font-size: ${ context => context.fontSize};
    font-weight: ${ context => context.fontWeight};
    color: ${ context => context.color};
    border-radius: none;
    min-width: 272px;
    border: ${({states}) => `${states.focus.borderWidth} solid transparent`};

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 400s ease-in-out 0s;
    }

    &:focus{
      outline: transparent;
    }

    &--focus {
      border: ${({states}) => `${states.focus.borderWidth} solid ${states.focus.borderColor}`};

      .${namespace}-InputText__input{
        background-color: ${({states}) => hexToRGB(states.focus.input.backgroundColor, states.focus.input.opacity)};
        &::placeholder {
          color: ${({states}) => states.focus.input.color};
          font-weight: ${({states}) => states.focus.input.fontWeight};
          opacity: 1;
        }
      }
    }

    .${namespace}-InputText__helperBox{
      display: flex;
      justify-content: space-between;
      font-size: ${({helper}) => helper.fontSize};
      opacity: 0;
    }

    .${namespace}-InputText__helperText{
      color: ${({helper}) => helper.color};
      opacity: 0;
    }

    .${namespace}-InputText__label{
      font-weight: ${({label}) => label.fontWeight};
      margin-bottom: ${({label}) => label.marginBottom};
    }

    .${namespace}-InputText__input{
      font-family: ${ context => context.fontFamily};
      font-size: ${ context => context.fontSize};
      font-weight: ${({input}) => input.fontWeight};
      line-height: ${({input}) => input.lineHeight};
      margin-bottom: ${({input}) => input.marginBottom};
      padding: ${({input}) => input.padding};
      border-radius: ${({input}) => input.borderRadius};
      border: ${({input}) => `${input.borderWidth} solid ${input.borderColor}`};
      background-color: ${({input}) => input.backgroundColor};
      outline: transparent;
      color: ${({input}) => input.text.color};
      resize: vertical;
      transition-property: background-color;
      height: ${({input}) => input.height};
      box-sizing: border-box;
      ${context => context.motion};

      &:hover{
        background-color: ${({states}) => hexToRGB(states.hover.input.backgroundColor, states.hover.input.opacity)};
      }

      &::placeholder {
        color: ${({input}) => hexToRGB(input.placeholder.color, input.placeholder.opacity)};
        font-weight: ${({input}) => input.placeholder.fontWeight};
        opacity: 1;
      }
    }

    &--disabled{
      opacity: ${({states}) => states.disabled.opacity};
      pointer-events: none;
    }

    &--error{
      .${namespace}-InputText__input{
        color: ${({error}) => error.input.color};
        background-color: ${({error}) => error.input.backgroundColor};
        border-color: ${({error}) => error.input.borderColor};
        &::placeholder {
          color: ${({error}) => error.input.color};
          opacity: 1;
        }
      }

      .${namespace}-InputText__helperBox {
        opacity: 1;
      }      
    }

    &--onColor{
      color: ${({onColor}) => onColor.color};

      .${namespace}-InputText__input{
        background-color: ${({onColor}) => onColor.input.backgroundColor};
        border-color: ${({onColor}) => onColor.input.borderColor};
        color:  ${({onColor}) => onColor.input.color};
        font-weight:  ${({onColor}) => onColor.input.fontWeight};

        &:hover{
          background-color: ${({states}) => hexToRGB(states.hover.onColor.input.backgroundColor, states.hover.onColor.input.opacity)};
        }

        &::placeholder {
          color: ${({onColor}) => hexToRGB(onColor.input.placeHolderColor, onColor.input.placeHolderOpacity)};
          opacity: 1;
        }
      }

      .${namespace}-InputText__helperText{
        color:  ${({onColor}) => onColor.helper.color};
      }

      &.${namespace}-InputText--error {
        .${namespace}-InputText__input{
          background-color: ${({onColor}) => onColor.error.input.backgroundColor};
          border-color: ${({onColor}) => onColor.error.input.borderColor};
        }

        .${namespace}-InputText__helperBox {
          opacity: 1;
        }

      }
    }
  }
`;
