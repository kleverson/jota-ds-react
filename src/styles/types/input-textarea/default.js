import { injectMotion } from '@meiuca/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  motion: injectMotion('switch-slow'),

  textarea: {
    fontWeight: brandingTokens.fontWeightRegular,
    marginBottom: globalTokens.spacingSizeNano,
    padding: globalTokens.spacingSizeXxxs,
    borderRadius: globalTokens.borderRadiusSm,
    borderWidth: globalTokens.borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    lineHeight: globalTokens.lineHeightLg,
    backgroundColor: 'transparent',
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemiopaque,
      fontWeight: brandingTokens.fontWeightRegular,
    },
    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemiopaque,
    },
  },
  label: {
    fontWeight: brandingTokens.fontWeightBold,
    marginBottom: globalTokens.spacingSizeQuarck,
  },
  helper: {
    fontSize: globalTokens.fontSizeXxs,
  },
  error: {
    textarea: {
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      borderColor: brandingTokens.feedbackColorHelperPure,
    },
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    textarea: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure,

      placeholder: {
        color: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelSemiopaque,
      },
    },
    error: {
      textarea: {
        backgroundColor: brandingTokens.feedbackColorHelperDark,
        borderColor: brandingTokens.feedbackColorHelperPure,
      },
    },
  },
  states: {
    hover: {
      textarea: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent,
      },
      onColor: {
        textarea: {
          backgroundColor: brandingTokens.neutralColorHighPure,
          opacity: globalTokens.opacityLevelLight,
        },
      },
    },
    disabled: {
      opacity: globalTokens.opacityLevelMedium,
    },
    focus: {
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: globalTokens.borderWidthThin,
      textarea: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent,
      },
    },
  },
};
