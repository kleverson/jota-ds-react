import { injectMotion } from '@meiuca/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-slow'),

  label: {
    paddingTop: globalTokens.spacingSizeNano,
    paddingSide: globalTokens.spacingSizeXxxs,
    color: brandingTokens.neutralColorLowPure,
    opacity: globalTokens.opacityLevelSemiopaque,
    fontFamilies: brandingTokens.fontFamilyHighlight,
    fontWeights: brandingTokens.fontWeightRegular,
    fontSizes: globalTokens.fontSizeXs,
    lineHeights: globalTokens.lineHeightLg,

    underline: {
      fill: brandingTokens.brandColorSecondaryPure,
      borderRadius: globalTokens.borderRadiusPill
    }
  },

  states: {
    hover: {
      fill: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemitransparent,
      label:{
        underline: {
          fill: brandingTokens.neutralColorLowPure
        }
      }
    },

    active: {
      label: {
        fontWeights: brandingTokens.fontWeightBold
      }
    },

    focus:{
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: globalTokens.borderWidthThin
    }
  },

  onColor: {
    label: {
      color: brandingTokens.neutralColorHighPure,
      opacity: globalTokens.opacityLevelSemiopaque,
      underline: {
        fill: brandingTokens.neutralColorHighPure,
      },
    },

    states: {
      hover: {
        fill: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelLight,
        label:{
          underline: {
            fill: brandingTokens.neutralColorHighPure
          }
        }
      }
    }
  }
};