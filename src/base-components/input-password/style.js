import { createGooberGetter as css } from '@jota-ds/context-element-react';
import InputPasswordStyleType from '../../styles/types/input-password/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(InputPasswordStyleType)`
  &.${namespace}-InputPassword {
    font-family: ${ context => context.fontFamily};
    font-size: ${ context => context.fontSize};
    font-weight: ${ context => context.fontWeight};
    color: ${ context => context.color};
    border: ${ ({ input }) => `${input.borderWidth} solid transparent`};
    border-radius: 0;
    display: flex;
    flex-direction: column;

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 400s ease-in-out 0s;
    }

    &:focus:not(:focus-visible) {
      outline: transparent;
    }
    &:focus {
      outline: none;
    }

    &--focus,
    &:focus-visible:not(:active) {
      border: ${({ input }) => `${input.focus.borderWidth} solid ${input.focus.borderColor}`};

      .${namespace}-InputPassword__wrapper {
        background-color: ${({ input }) => hexToRGB(input.focus.backgroundColor, input.focus.opacity)};
      }
    }    

    .${namespace}-Icon--active{
      .${namespace}-Icon{
        opacity: 1;
      } 
    }
    
    .${namespace}-Icon {
      margin-right: ${({ input }) => input.icon.right};
      opacity: ${  ({ input }) => input.placeholder.opacity };
      cursor: pointer;
    }

    .${namespace}-InputPassword__helperBox {
      display: flex;
      justify-content: space-between;
      font-size: ${({ helper }) => helper.fontSize};
      color: ${({ helper }) => helper.color};
      opacity: 0;
    }
    
    &--error {
      .${namespace}-InputPassword__helperBox {
        opacity: 1;
      }  
    }

    .${namespace}-InputPassword__input {
      font-family: ${ context => context.fontFamily};
      font-size: ${ context => context.fontSize};
      font-weight: ${({ input }) => input.fontWeight};
      line-height: ${({ input }) => input.lineHeight};
      padding: ${({ input }) => input.padding};
      background-color: ${({ input }) => input.backgroundColor};
      outline: transparent;
      color: ${context => context.color};
      resize: vertical;
      transition-property: background-color;
      box-sizing: border-box;
      width: 100%;
      border: none;
      line-height: ${ ({ input }) => input.lineHeight };

      &::placeholder {
        color: ${ ({ input }) => input.placeholder.color };
        opacity: ${  ({ input }) => input.placeholder.opacity };
        line-height: ${ ({ input }) => input.placeholder.lineHeight };
        font-weight: ${ context => context.fontWeight};
      }
    }

    &--disabled{
      opacity: ${({ disabled }) => disabled.opacity};
      pointer-events: none;

      .${namespace}-InputText__helperBox{
        display: none;
      }

      .${namespace}-InputPassword__wrapper {
        -webkit-box-shadow: inset 0px 0px 0px ${({ input }) => `${input.borderWidth} ${input.borderColor}`};
        -moz-box-shadow: inset 0px 0px 0px  ${({ input }) => `${input.borderWidth} ${input.borderColor}`};
        box-shadow: inset 0px 0px 0px  ${({ input }) => `${input.borderWidth} ${input.borderColor}`};
      }      
    }

    .${namespace}-InputPassword__label {
      font-weight: ${ ({ label }) => label.fontWeight };
      margin-bottom: ${ ({ label }) => label.marginBottom };
      line-height: ${ ({ label }) => label.lineHeight };
    }
    
    .${namespace}-InputPassword__container {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .${namespace}-InputPassword__labels {
      flex-direction: column;
      display: flex;
      width: 100%;
    }
    
    .${namespace}-InputPassword__wrapper {
      border-radius: ${({ input }) => input.borderRadius};
      -webkit-box-shadow: inset 0px 0px 0px ${({ input }) => `${input.borderWidth} ${input.borderColor}`};
      -moz-box-shadow: inset 0px 0px 0px  ${({ input }) => `${input.borderWidth} ${input.borderColor}`};
      box-shadow: inset 0px 0px 0px  ${({ input }) => `${input.borderWidth} ${input.borderColor}`};      
      margin-bottom: ${({ input }) => input.marginBottom}; 
      width: 100%;
      display: flex;
      align-items: center;
      ${({ input }) => input.hover.motion };

      &:hover {
        background-color: ${({ input }) => hexToRGB(input.hover.backgroundColor, input.hover.opacity)};
      }
      
      &--error {
        border-radius: ${({ input }) => input.borderRadius};
        background-color: ${({ error }) => error.input.backgroundColor};
        -webkit-box-shadow: inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ error }) => error.input.borderColor};
        -moz-box-shadow: inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ error }) => error.input.borderColor};
        box-shadow: inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ error }) => error.input.borderColor};                    
      }
    }

    &--onColor {
      color: ${ ({ onColor }) => onColor.color };

      .${namespace}-InputPassword__wrapper {
        color: ${ ({ onColor }) => onColor.input.color };
        -webkit-box-shadow:inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ onColor }) => onColor.input.borderColor};
        -moz-box-shadow:inset 0px 0px 0px  ${({ input }) => input.borderWidth} ${({ onColor }) => onColor.input.borderColor};
        box-shadow:inset 0px 0px 0px  ${({ input }) => input.borderWidth} ${({ onColor }) => onColor.input.borderColor};
        ${({ input }) => input.hover.motion };
        
        &:hover {
          background-color: ${({ onColor }) => hexToRGB(onColor.input.hover.backgroundColor, onColor.input.hover.opacity)};
        }

        &--error{
          background-color: ${({ onColor }) => onColor.error.input.backgroundColor};
          -webkit-box-shadow: inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ onColor }) => onColor.error.input.borderColor};
          -moz-box-shadow: inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ onColor }) => onColor.error.input.borderColor};
          box-shadow: inset 0px 0px 0px ${({ input }) => input.borderWidth} ${({ onColor }) => onColor.error.input.borderColor};              

          .${namespace}-InputPassword__helperBox {
            opacity: 1;
          }           
        }        
      }

      .${namespace}-InputPassword__helperBox {
        color: ${ ({ onColor }) => onColor.input.color };
      }

      &--error {
        .${namespace}-InputPassword__helperBox {
          opacity: 1;
        }  
      }

      .${namespace}-InputPassword__input {
        color: ${ ({ onColor }) => onColor.color };

        &::placeholder {
          color: ${ ({ onColor }) => onColor.color };
        }        
      }
    }    
  }
`;
