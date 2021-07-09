import { createGooberGetter as css } from '@meiuca/context-element-react';
import AlertStyleType from '../../styles/types/alert/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(AlertStyleType)`
  &.${namespace}-Alert{
    font-family: ${ context => context.fontFamily};
    font-weight: ${ context => context.fontWeight};
    position:relative;
    display: none;

    &--isOpen{
      display: block;

      &.${namespace}-Alert__modal{
        animation: animation 1s;
      }
    }

    &__modal {
      width: 400px;
      min-height: 100px;
      border-radius: ${ context => context.borderRadius};
      padding: ${ context => context.modalPadding};
      background-color: ${ context => context.backgroundColor};
      border: ${ context => context.borderWidth} solid ${ context => context.borderColor};
      right: 20px;
      bottom: 20px;
      position: fixed;
      box-shadow: ${ context => `${context.boxShadowLevel} ${context.boxShadowColor}`};
      ${context => context.motion};
      .${namespace}-Alert__content {
        display: flex;
        .${namespace}-Alert__text-side {
          margin-left: ${context =>  context.text.margin};
          .${namespace}-Alert__text-title {
            height: ${context =>  context.text.height};
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        }
      }
      .${namespace}-ButtonIcon{
        position: absolute;
        right: 0px;
        margin-right: ${context =>  context.text.margin};
      }
    }
    @keyframes animation {
      from {right: -450px;}
      to {right: 20px;}
    }
  }
`;
