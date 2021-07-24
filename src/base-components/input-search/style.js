import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import InputSearchStyleType from '../../styles/types/input-search/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(InputSearchStyleType)`
  &.${namespace}-InputSearch{
    display: flex;
    flex-direction: column;
    font-family: ${ context => context.fontFamily};
    font-size: ${ context => context.fontSize};
    font-weight: ${ context => context.fontWeight};
    color: ${ context => context.color};
    border-radius: none;
    border: ${({states}) => `${states.focus.borderWidth} solid transparent`};

    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
      display: none;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 400s ease-in-out 0s;
    }

    &--focus {
      border: ${({states}) => `${states.focus.borderWidth} solid ${states.focus.borderColor}`};

      .${namespace}-InputSearch__input{
        background-color: ${({states}) => hexToRGB(states.focus.input.backgroundColor, states.focus.input.opacity)};
      }
    }

    .${namespace}-InputSearch__wrapper{
      border-radius: ${({input}) => input.borderRadius};
      border: ${({input}) => `${input.borderWidth} solid ${input.borderColor}`};
      background-color: ${({input}) => input.backgroundColor};
      transition-property: background-color;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      height: ${({input}) => input.height};
      padding: ${({input}) => input.padding};

      ${context => context.motion};

      &:hover{
        background-color: ${({states}) => hexToRGB(states.hover.input.backgroundColor, states.hover.input.opacity)};
      }
    }

    .${namespace}-InputSearch__clear{
      cursor: pointer;
      .${namespace}-Icon{
        margin-right: 0px;
      }
    }

    .${namespace}-Icon{
      margin-right: ${({icon}) => icon.marginRight};
    }

    .${namespace}-InputSearch__input{
      font-family: ${ context => context.fontFamily};
      font-size: ${ context => context.fontSize};
      line-height: ${({input}) => input.lineHeight};
      outline: transparent;
      color: ${({input}) => input.color};
      height: ${({input}) => input.height};
      border: none;
      background: transparent;
      width: 100%;

      &::placeholder {
        color: ${ context => context.color};
        opacity: ${({input}) => input.placeholder.opacity};
      }
    }

    &--disabled{
      opacity: ${({states}) => states.disabled.opacity};
      pointer-events: none;
    }

    &--onColor{
      color: ${({onColor}) => onColor.color};

      .${namespace}-InputSearch__wrapper{
        background-color: ${({onColor}) => onColor.input.backgroundColor};
        border-color: ${({onColor}) => onColor.input.borderColor};

        &:hover{
          background-color: ${({states}) => hexToRGB(states.hover.onColor.input.backgroundColor, states.hover.onColor.input.opacity)};
        }
      }

      .${namespace}-InputSearch__input{
        color:  ${({onColor}) => onColor.input.color};
        &::placeholder {
          color: ${({onColor}) => onColor.input.color};
          opacity: ${({input}) => input.placeholder.opacity};
        }
      }
    }
  }
`;
