import { createGooberGetter } from '@meiuca/context-element-react';
import linkStyleType from '../../styles/types/link/default.js';
import { namespace } from '../../utils/setup.js';

const css = createGooberGetter(linkStyleType);

export default css`
  &.${namespace}-Link {
    margin: 0;
    padding: 0;
    color: ${context => context.color};
    font-family: ${context => context.fontFamily};
    font-size: ${context => context.fontSize};
    font-weight: ${context => context.fontWeight};
    line-height: ${context => context.lineHeight};
    position: relative;
    text-decoration: ${context => context.textDecoration};
    border: ${context => `${context.borderWidth} solid transparent`};
    padding-top: ${context => context.paddingTop};
    padding-bottom: ${context => context.paddingBottom};
    display: flex;
    box-sizing: border-box;
    width: fit-content;
    align-items: center;

    &::after {
      content: '';
      position: absolute;
      right: 0px;
      bottom: 0px;
      height: ${context => `${context.borderWidth}`};
      background-color: ${context => `${context.borderColor}`};
      transition-property: width;
      width: 100%;
      ${context => context.motion};
    }

    &:focus:not(:focus-visible) {
      outline: transparent;
    }

    &:focus-visible:not(:active) {
      border: ${({ focus }) => `${focus.borderWidth} solid ${focus.borderColor}`};
      color: ${({ focus }) => focus.color};
      outline: 0;
      text-decoration: none;

      &::after {
        transition-property: width;
        width: 100%;
        ${context => context.motion};
      }
    }

    &:hover {
      text-decoration: ${({ hover }) => hover.textDecoration};

      &::after {
        width: 50%;
      }
    }

    &--disabled {
      pointer-events: none;
      cursor: default;
      text-decoration: none;
      opacity: ${({ disabled }) => disabled.opacity};

      &::after {
        width: 100%;
      }
    }

    &--onColor {
      color: ${({ onColor }) => onColor.color};

      &::after {
        background-color: ${({ onColor }) => onColor.color};
      }

      &:focus-visible:not(:active) {
        color: ${({ onColor }) => onColor.color};
      }
    }

    &--icon {
      &::after {
        display: none;
      }

      .${namespace}-Icon {
        position: relative;
        margin-left: ${({ icon }) => icon.marginLeft};

        ${context => context.motion};
      }

      &:hover {
        .${namespace}-Icon {
          transform: translateX(${({ icon }) => icon.hover.translateX});
        }
      }
    }
  }
`;
