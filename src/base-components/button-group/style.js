import { createGooberGetter as css } from '@meiuca/context-element-react';
import ButtonGroupStyleType from '../../styles/types/button-group/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(ButtonGroupStyleType)`
&.${namespace}-ButtonGroup {
  display:flex;
  .${namespace}-ButtonGroup__button--tertiary{
    min-width: 160px;
    font-family: ${ context => context.tertiary.fontFamilyL};
    font-size: ${ context => context.tertiary.fontSize};
    font-weight: ${ context => context.tertiary.fontWeight};
    height: ${ context => context.tertiary.size};
    background-color: transparent;
    border: 0px;
    width: 100%;
    padding: 0 ${ context => context.tertiary.sidePadding};
    border-radius: ${ context => context.tertiary.border};
     &:hover{
      background-color: ${({ tertiary }) => hexToRGB( tertiary.hoverBackground, tertiary.hoverOpacity)};
    } 
    &:active,
    &:focus{
      background-color: ${({ tertiary }) => hexToRGB( tertiary.hoverBackground, tertiary.hoverOpacity)};
      outline-offset: 1px;
      outline-color: ${({ tertiary }) => tertiary.outline};
    } 
    &[aria-disabled='true'] {
      background-color: transparent;
      color: ${({ disabled }) => disabled.color};
      pointer-events: none;
    }
    &-onColor{
      background-color: transparent;
      border: 0px;
      color: ${ context => context.tertiary.onColor};
      width: fit-content;
      padding: 0 ${ context => context.tertiary.sidePadding};
      border-radius: ${ context => context.tertiary.border};
      &:hover{
        background-color: ${({ tertiary }) => hexToRGB( tertiary.hoverBackground, tertiary.onColorOpacity)};
      } 
      &:active,
      &:focus{
        background-color: ${({ tertiary }) => hexToRGB( tertiary.hoverBackground, tertiary.hoverOpacity)};
        outline-offset: 1px;
        outline-color: ${({ tertiary }) => tertiary.outline};
      } 
      &[aria-disabled='true'] {
        background-color: transparent;
        color: ${({ tertiary }) => hexToRGB( tertiary.onColor, tertiary.disabledOpacity)};
        pointer-events: none;
      }
    }
  }

  @media (min-width: 768px) {
    .${namespace}-ButtonGroup__button--tertiary {
      margin-right: ${ context => context.tertiary.margin};
      width: initial;
    }
  }
  
  @media (max-width: 767px){
    margin-right: 0;
    flex-direction: column-reverse;
    .${namespace}-ButtonGroup__button--tertiary{
      margin-top: ${({ responsive }) => responsive.margin};
    }

      ${namespace}-button{
        &::part(button){
          width: 100%;
        }
      }
    }
  }
`;
