import { createGooberGetter as css } from '@meiuca/context-element-react';
import buttonStyleType from '../../styles/types/button/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';


export default css(buttonStyleType)`
  &.${namespace}-Button {
    height: ${({ button }) => button.height};
    padding: 0 ${({ button }) => button.sidePadding};
    border-radius: ${({ button }) => button.borderRadius};
    font-size: ${({ button }) => button.fontSize};
    font-family: ${({ button }) => button.fontFamily};
    border: 0;
    min-width: 160px;
    font-weight: ${({ button }) => button.fontWeight};
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    .${namespace}-Icon {
      margin-right: ${({ icon }) => icon.padding};
    }
    &[aria-disabled='true'] {
      background-color: ${({ disabled }) => hexToRGB(disabled.backgroundColor, disabled.opacityBackground)};
      color: ${({ disabled }) => hexToRGB(disabled.color, disabled.opacityColor)};
      pointer-events: none;
      border: transparent;
    }
    &--primary {
      background-color: ${({ buttonPrimary }) => buttonPrimary.background};
      color: ${({ buttonPrimary }) => buttonPrimary.color};
      &:hover {
        background-color: ${({ buttonPrimary }) =>
          hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground)};
      }
      &:focus:not(:focus-visible) {
        outline: transparent;
      }
      &:focus-visible,
      &:active {
        outline-offset: 1px;
        background-color: ${({ buttonPrimary }) =>
          hexToRGB(buttonPrimary.backgroundHover, buttonPrimary.opacityBackground)};
        outline-color: ${({ button }) => button.outlineColor};
      }
      &-onColor {
        background-color: ${({ buttonPrimaryOnColor }) => buttonPrimaryOnColor.background};
        color: ${({ buttonPrimaryOnColor }) => buttonPrimaryOnColor.color};
        &:hover {
          background-color: ${({ buttonPrimaryOnColor }) =>
            hexToRGB(buttonPrimaryOnColor.backgroundHover, buttonPrimaryOnColor.opacityBackground)};
        }
        &:focus:not(:focus-visible) {
          outline: transparent;
        }
        &:focus-visible,
        &:active {
          outline-offset: 1px;
          outline-color: ${({ button }) => button.outlineColor};
        }
      }
    }
    &--secondary {
      background-color: transparent;
      color: ${({ buttonSecondary }) => buttonSecondary.color};
      border: ${({ buttonSecondary }) => buttonSecondary.borderColor} ${({ buttonSecondary }) => buttonSecondary.borderWidth} solid;
      &:hover {
        background-color: ${({ buttonSecondary }) =>
          hexToRGB(buttonSecondary.backgroundHover, buttonSecondary.opacityBackground)};
        color: ${({ buttonSecondary }) => buttonSecondary.color};
      }
      &:focus:not(:focus-visible) {
        outline: transparent;
      }
      &:focus-visible,
      &:active {
        outline-color: ${({ button }) => button.outlineColor};
        outline-offset: 1px;
      }
      &[aria-disabled='true'] {
        background-color: ${({ disabledSecondary }) => hexToRGB(disabledSecondary.backgroundColor, disabledSecondary.opacityBackground)};
        color: $${({ disabledSecondary }) => hexToRGB(disabledSecondary.color, disabledSecondary.opacityColor)};
        pointer-events: none;
        border: transparent;
      }
      &-onColor {
        background-color: transparent;
        color: ${({ buttonSecondaryOnColor }) => buttonSecondaryOnColor.color};
        border-color: ${({ buttonSecondaryOnColor }) => buttonSecondaryOnColor.color};
        &:hover {
          background-color: ${({ buttonSecondaryOnColor }) =>
            hexToRGB(
              buttonSecondaryOnColor.backgroundHover,
              buttonSecondaryOnColor.opacityBackground,
            )};
          color: ${({ buttonSecondaryOnColor }) => buttonSecondaryOnColor.color};
        }
        &[aria-disabled='true'] {
          background-color: ${({ disabledSecondaryOnColor }) =>
            hexToRGB(disabledSecondaryOnColor.backgroundColor, disabledSecondaryOnColor.opacityBackground)};
          color: ${({ disabledSecondaryOnColor }) =>
          hexToRGB( disabledSecondaryOnColor.shapeColor , disabledSecondaryOnColor.shapeOpacity)};
          pointer-events: none;
          border: transparent;
          ${namespace}-icon {
            color: ${({ disabledSecondaryOnColor }) =>
            hexToRGB( disabledSecondaryOnColor.shapeColor , disabledSecondaryOnColor.shapeOpacity)};
          }
        }
      }
    }
  }
`;
