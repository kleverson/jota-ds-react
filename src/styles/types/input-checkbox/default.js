import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-slow'),

  base: {
    width: `16px`,
    height: `16px`,
    borderColor: brandingTokens.neutralColorLowPure,
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    borderWidth: globalTokens.borderWidthThin,
    margin: globalTokens.spacingSizeNano,
    borderRadius: `2px`,
    onColor: {
      borderColor: brandingTokens.neutralColorHighPure,
      backgroundColor: brandingTokens.neutralColorHighPure,
    }
  },
  label: {
    color: brandingTokens.brandColorPrimaryPure,
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontiSize: globalTokens.fontSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,
    lineHeight: globalTokens.lineHeightDefault,
    onColor: {
      color: brandingTokens.neutralColorHighPure
    }
  },
  states: {
    // base: {
    //   backgroundColor: brandingTokens.brandColorPrimaryPure,
    //   color: brandingTokens.brandColorPrimaryPure,
    // },
    icon: {
      color: brandingTokens.neutralColorHighPure,
      width: `16px`,
      height: `16px`,
      onColor: {
        color: brandingTokens.brandColorSecondaryPure
      }
    },
    hover: {
      borderColor: brandingTokens.brandColorPrimaryDark,
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemitransparent,
      onColor: {
        borderColor: brandingTokens.neutralColorHighPure,
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelLight
      }
    },
    disabled: {
      borderColor: brandingTokens.neutralColorLowPure,
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelMedium,
      onColor: {
        borderColor: brandingTokens.neutralColorHighPure,
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelMedium
      }      
    },
    disabledCheck: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      borderWidth: globalTokens.borderWidthNone,
      color: brandingTokens.neutralColorLowPure,
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: globalTokens.borderWidthThin
    }
  },
};
