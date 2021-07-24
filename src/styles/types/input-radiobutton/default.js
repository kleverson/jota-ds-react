import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-slow'),

  base: {
    width: '16px',
    height: '16px',
    borderColor: brandingTokens.neutralColorLowPure,
    borderWidth: globalTokens.borderWidthThin,
    margin: globalTokens.spacingSizeNano,
    onColor: {
      borderColor: brandingTokens.neutralColorHighPure,
      backgroundColor: brandingTokens.neutralColorHighPure,
    }
  },

  label: {
    color: brandingTokens.neutralColorLowPure,
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontSize: globalTokens.fontSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,
    marginTop: globalTokens.spacingSizeXxxs,

    lineHeight: globalTokens.lineHeightDefault,

    onColor: {
      color: brandingTokens.neutralColorHighPure
    }
  },

  states: {
    base: {
      backgroundColor: brandingTokens.brandColorSecondaryPure,
      color: brandingTokens.brandColorSecondaryPure,
    },
    icon: {
      color: brandingTokens.neutralColorHighPure,
      width: '8px',
      height: '8px',
    },
    hover: {
      borderColor: brandingTokens.brandColorSecondaryPure,
      color: brandingTokens.neutralColorLowPure,
      icon: {
        borderColor: brandingTokens.neutralColorLowPure,
        fill: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent
      },
      onColor: {
        borderColor: brandingTokens.neutralColorHighPure,
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelLight
      }
    },
    disabled: {
      borderColor: brandingTokens.neutralColorHighDark,
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelMedium,
      icon: {
        borderColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelMedium
      },
      onColor: {
        color: brandingTokens.neutralColorHighPure,
        borderColor: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelMedium,
      }
    },
    disabledChecked: {
      backgroundColor: brandingTokens.neutralColorHighDark,
      color: brandingTokens.neutralColorHighDark,
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: globalTokens.borderWidthThin
    }
  },
};
