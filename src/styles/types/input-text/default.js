import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  motion: injectMotion('switch-slow'),

  input: {
    marginBottom: globalTokens.spacingSizeNano,
    padding: globalTokens.spacingSizeXxxs,
    borderRadius: globalTokens.borderRadiusSm,
    borderWidth: globalTokens.borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    lineHeight: globalTokens.lineHeightDefault,
    fontWeight: brandingTokens.fontWeightRegular,
    backgroundColor: 'transparent',
    height: '48px',
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
    color: brandingTokens.neutralColorLowPure,
  },
  error: {
    input: {
      color: brandingTokens.neutralColorLowPure,
      backgroundColor: brandingTokens.feedbackColorHelperLight,
      borderColor: brandingTokens.feedbackColorHelperPure,
    },
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    input: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure,
      fontWeight: brandingTokens.fontWeightMedium,
      placeHolderColor: brandingTokens.neutralColorHighPure,
      placeHolderOpacity: globalTokens.opacityLevelSemiopaque,
    },
    error: {
      input: {
        color: brandingTokens.neutralColorLowPure,
        backgroundColor: brandingTokens.feedbackColorHelperDark,
        borderColor: brandingTokens.feedbackColorHelperPure,
      },
    },
    helper: {
      color: brandingTokens.neutralColorHighPure,
    },
  },
  states: {
    hover: {
      input: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent,
      },
      onColor: {
        input: {
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
      input: {
        fontWeight: brandingTokens.fontWeightMedium,
        color: brandingTokens.neutralColorLowPure,
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent,
      },
    },
  },
};
