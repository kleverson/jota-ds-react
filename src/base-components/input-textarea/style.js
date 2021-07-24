import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import inputTextareaStyleType from '../../styles/types/input-textarea/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(inputTextareaStyleType)`
  &.${namespace}-TextArea{
    display: flex;
    flex-direction: column;
    font-family: ${ context => context.fontFamily};
    font-size: ${ context => context.fontSize};
    font-weight: ${ context => context.fontWeight};
    color: ${ context => context.color};
    border-radius: 0px;
    border: ${({states}) => `${states.focus.borderWidth} solid transparent`};
    min-width: 320px;

    &:focus{
      outline: transparent;
    }

    &--focus,
    &:focus-visible:not(:active) {
      border: ${({states}) => `${states.focus.borderWidth} solid ${states.focus.borderColor}`};

      .${namespace}-TextArea__textarea{
        background-color: ${({states}) => hexToRGB(states.focus.textarea.backgroundColor, states.focus.textarea.opacity)};
      }
    }

    .${namespace}-TextArea__helperBox{
      display: flex;
      justify-content: flex-end;
      font-size: ${({helper}) => helper.fontSize};
    }

    .${namespace}-TextArea__label{
      font-weight: ${({label}) => label.fontWeight};
      margin-bottom: ${({label}) => label.marginBottom};
    }

    .${namespace}-TextArea__textarea{
      font-family: ${ context => context.fontFamily};
      font-size: ${ context => context.fontSize};
      font-weight: ${({textarea}) => textarea.fontWeight};
      line-height: ${({textarea}) => textarea.lineHeight};
      margin-bottom: ${({textarea}) => textarea.marginBottom};
      padding: ${({textarea}) => textarea.padding};
      border-radius: ${({textarea}) => textarea.borderRadius};
      border: ${({textarea}) => `${textarea.borderWidth} solid ${textarea.borderColor}`};
      background-color: ${({textarea}) => textarea.backgroundColor};
      outline: transparent;
      color: ${({textarea}) => textarea.color};
      resize: none;
      transition-property: background-color;
      height: 224px;
      ${context => context.motion};

      &:hover{
        background-color: ${({states}) => hexToRGB(states.hover.textarea.backgroundColor, states.hover.textarea.opacity)};
      }

      &::placeholder {
        color: ${({textarea}) => hexToRGB(textarea.placeholder.color, textarea.placeholder.opacity)};
        font-weight: ${({textarea}) => textarea.placeholder.fontWeight};
      }
    }

    .${namespace}-TextArea__helperText{
      flex: 1;
    }

    .${namespace}-TextArea__counter{

    }

    &--disabled{
      opacity: ${({states}) => states.disabled.opacity};
      pointer-events: none;

      .${namespace}-TextArea__helperBox{
        opacity: 0;
      }
    }

    &--error{
      .${namespace}-TextArea__textarea{
        background-color: ${({error}) => error.textarea.backgroundColor};
        border-color: ${({error}) => error.textarea.borderColor};
      }
    }

    &--onColor{
      color: ${({onColor}) => onColor.color};

      .${namespace}-TextArea__textarea{
        background-color: ${({onColor}) => onColor.textarea.backgroundColor};
        border-color: ${({onColor}) => onColor.textarea.borderColor};
        color:  ${({onColor}) => onColor.textarea.color};

        &:hover{
          background-color: ${({states}) => hexToRGB(states.hover.onColor.textarea.backgroundColor, states.hover.onColor.textarea.opacity)};
        }

        &::placeholder {
          color: ${({onColor}) => hexToRGB(onColor.textarea.placeholder.color, onColor.textarea.placeholder.opacity)};
          opacity: 1;
        }
      }

      &.${namespace}-TextArea--error{
        .${namespace}-TextArea__textarea{
          background-color: ${({onColor}) => onColor.error.textarea.backgroundColor};
          border-color: ${({onColor}) => onColor.error.textarea.borderColor};
        }
      }
    }
  }
`;
