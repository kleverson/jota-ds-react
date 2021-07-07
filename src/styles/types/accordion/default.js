import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-slow'),

  borderBottomSize: globalTokens.borderWidthThin,
  borderBottomColor: brandingTokens.neutralColorLowPure,
  label: {
    color: brandingTokens.neutralColorLowPure,
    fontFamilies: brandingTokens.fontFamilyHighlight,
    fontWeights: brandingTokens.fontWeightBold,
    fontSizes: globalTokens.fontSizeXs,
    lineHeights: globalTokens.lineHeightLg,
    spacing: globalTokens.spacingInsetSizeXsStack,
    icon: {
      motion: injectMotion('spin-slow'),
    }
  },

  content: {
    spacing: globalTokens.spacingInsetSizeXsStack
  },

  states: {
    hover: {
      label: {
        fill: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent
      }
    },
    focus:{
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: globalTokens.borderWidthThin
    }
  },

  onColor: {
    borderBottomColor: brandingTokens.neutralColorHighPure,

    label: {
      color: brandingTokens.neutralColorHighPure
    },

    content: {
      color: brandingTokens.neutralColorHighPure,
      opacity: globalTokens.opacityLevelSemiopaque
    },

    states: {
      hover: {
        label: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: globalTokens.opacityLevelLight
        }
      }
    }
  }
};
