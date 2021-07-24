import { createGooberGetter } from '@jota-ds/context-element-react';
import AlertStyleType from '../../styles/types/alert/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

const css = createGooberGetter(AlertStyleType);

export default css`
  &.${namespace}-Alert {
    font-family: ${context => context.fontFamily};
    font-weight: ${context => context.fontWeight};
    position: relative;
    display: none;

    &--isOpen {
      display: block;

      &.${namespace}-Alert__modal {
        animation: animationMobile 1s;
      }
    }

    &__modal {
      width: calc(100% - ${context => parseInt(context.modalPadding) * 2}px);
      min-height: 152px;
      border-radius: ${context => context.borderRadius};
      padding: ${context => context.modalPadding};
      background-color: ${context => context.backgroundColor};
      border: ${context => context.borderWidth} solid ${context => context.borderColor};
      right: 16px;
      bottom: ${({ modal }) => modal.mobile.bottom};
      position: fixed;
      word-break: break-word;
      box-sizing: border-box;
      box-shadow: ${context => `${context.boxShadowLevel} ${context.boxShadowColor}`};
      ${context => context.motion};

      .${namespace}-Alert__content {
        display: flex;

        .${namespace}-Alert__text-side {
          margin-left: ${context => context.text.margin};

          .${namespace}-Alert__text-title {
            height: ${context => context.text.height};
            display: flex;
            flex-direction: row;
            align-items: center;
          }
        }
      }

      .${namespace}-ButtonIcon {
        position: absolute;
        right: 0px;
        margin-right: ${context => context.text.margin};
      }
    }

    @media (min-width: 450px) {
      width: 400px;
      min-height: 100px;
      right: 36px;
      bottom: ${({ modal }) => modal.bottom};

      &--isOpen {
        &.${namespace}-Alert__modal {
          animation: animationDesktop 1s;
        }
      }
    }

    @keyframes animationMobile {
      from {
        right: -450px;
      }
      to {
        right: 16px;
      }
    }

    @keyframes animationDesktop {
      from {
        right: -450px;
      }
      to {
        right: 36px;
      }
    }
  }
`;
