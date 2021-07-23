import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  borderRadius: globalTokens.borderRadiusPill,
  borderWidth: globalTokens.borderWidthThin,
  paddingHorizontal: globalTokens.spacingSizeXxxs,
  paddingVertical: globalTokens.spacingSizeNano,
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontWeight: brandingTokens.fontWeightMedium,
  fontSize: globalTokens.fontSizeXxs,
  lineHeight: globalTokens.lineHeightXs,
  motion: injectMotion('switch-slow'),

  hover: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    color: brandingTokens.neutralColorHighPure,
  },

  focus: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    color: brandingTokens.neutralColorHighPure,
    outlineColor: brandingTokens.highlightColorPure,
    borderWidth: globalTokens.borderWidthThin,
  },

  active: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    color: brandingTokens.neutralColorHighPure,
  },

  disabled: {
    background: brandingTokens.neutralColorLowPure,
    opacityBorder: globalTokens.opacityLevelSemitransparent,
    opacityText: globalTokens.opacityLevelMedium,
    color: brandingTokens.neutralColorLowPure,
  },

  onColor: {
    borderColor: brandingTokens.neutralColorHighPure,
    color: brandingTokens.neutralColorHighPure,

    hover: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure,
    },
    focus: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure,
      outlineColor: brandingTokens.highlightColorPure,
    },
    active: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure,
    },
    disabled: {
      backgroundColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.brandColorSecondaryPure,
      opacity: globalTokens.opacityLevelMedium,
    },
  },
};
