import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  lineHeight: globalTokens.lineHeightDefault,

  input: {
    fontWeight: brandingTokens.fontWeightRegular,
    marginBottom: globalTokens.spacingSizeNano,
    borderColor: brandingTokens.neutralColorLowPure,
    borderRadius: globalTokens.borderRadiusSm,
    borderWidth: globalTokens.borderWidthThin,
    padding: globalTokens.spacingInsetSizeXsStack,
    lineHeight: globalTokens.lineHeightDefault,
    backgroundColor: 'transparent',

    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemiopaque,
      lineHeight: globalTokens.lineHeightDefault,
    },

    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemiopaque,
    },

    hover: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemitransparent,
      motion: injectMotion('switch-slow'),

      text: {
        color: brandingTokens.neutralColorLowPure,
      },
    },

    focus: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemitransparent,
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: globalTokens.borderWidthThin,

      text: {
        color: brandingTokens.neutralColorLowPure,
      },
    },

    icon: {
      top: globalTokens.spacingInsetSizeXsV,
      right: globalTokens.spacingInsetSizeXsH,
    },
  },

  label: {
    fontWeight: brandingTokens.fontWeightBold,
    marginBottom: globalTokens.spacingSizeQuarck,
    lineHeight: globalTokens.lineHeightDefault,
  },

  helper: {
    fontSize: globalTokens.fontSizeXxs,
    color: brandingTokens.neutralColorLowDark,
  },

  error: {
    input: {
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      borderColor: brandingTokens.feedbackColorHelperPure,
    },
  },

  disabled: {
    color: brandingTokens.neutralColorLowPure,
    opacity: globalTokens.opacityLevelMedium,
  },

  onColor: {
    color: brandingTokens.neutralColorHighPure,

    input: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure,

      hover: {
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelLight,
      },
    },

    error: {
      input: {
        backgroundColor: brandingTokens.feedbackColorHelperDark,
        borderColor: brandingTokens.feedbackColorHelperPure,
      },
    },

    hover: {
      opacity: globalTokens.opacityLevelLight,
      backgroundColor: brandingTokens.neutralColorHighPure,
    },

    focus: {
      opacity: globalTokens.opacityLevelLight,
      backgroundColor: brandingTokens.neutralColorHighPure,
    },

    disabled: {
      label: {
        opacity: globalTokens.opacityLevelMedium,
      },
      text: {
        opacity: globalTokens.opacityLevelMedium,
      },
    },
  },
};
