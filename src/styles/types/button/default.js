import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-slow'),

  button: {
    borderRadius: globalTokens.borderRadiusSm,
    outlineColor: brandingTokens.highlightColorPure,
    fontSize: globalTokens.fontSizeXs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamily: brandingTokens.fontFamilyHighlight,
    height: globalTokens.spacingSizeMd,
    sidePadding: globalTokens.spacingSizeXxs,
  },
  buttonPrimary: {
    color: brandingTokens.neutralColorHighPure,
    background: brandingTokens.brandColorPrimaryPure,
    backgroundHover: brandingTokens.neutralColorLowPure,
    opacityBackground: globalTokens.opacityLevelSemiopaque,
  },
  buttonPrimaryOnColor: {
    color: brandingTokens.neutralColorHighPure,
    background: brandingTokens.brandColorPrimaryPure,
    backgroundHover: brandingTokens.neutralColorLowPure,
    opacityBackground: globalTokens.opacityLevelIntense,
  },
  buttonSecondary: {
    color: brandingTokens.brandColorPrimaryPure,
    borderColor: brandingTokens.brandColorPrimaryPure,
    borderWidth: globalTokens.borderWidthThin,
    backgroundHover: brandingTokens.neutralColorLowPure,
    opacityBackground: globalTokens.opacityLevelLight,
  },
  buttonSecondaryOnColor: {
    color: brandingTokens.neutralColorHighPure,
    backgroundHover: brandingTokens.neutralColorHighPure,
    opacityBackground: globalTokens.opacityLevelLight,
  },
  icon: {
    padding: globalTokens.spacingSizeNano,
  },
  loading: {
    backgroundColor: brandingTokens.neutralColorHighPure,
  },
  disabled: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacityBackground: globalTokens.opacityLevelSemitransparent,
    color: brandingTokens.neutralColorLowPure,
    opacityColor: globalTokens.opacityLevelMedium,
  },
  onColorDisabled: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacityBackground: globalTokens.opacityLevelSemiopaque,
    color: brandingTokens.neutralColorLowPure,
    opacityColor: globalTokens.opacityLevelMedium,
  },
  disabledSecondary: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacityBackground: globalTokens.opacityLevelSemitransparent,
    color: brandingTokens.neutralColorLowPure,
    opacityColor: globalTokens.opacityLevelMedium,
  },
  disabledSecondaryOnColor: {
    backgroundColor: brandingTokens.neutralColorHighPure,
    opacityBackground: globalTokens.opacityLevelLight,
    color: brandingTokens.neutralColorHighPure,
    opacityColor: globalTokens.opacityLevelMedium,
    shapeColor: brandingTokens.neutralColorHighPure,
    shapeOpacity: globalTokens.opacityLevelMedium,
  },
};
