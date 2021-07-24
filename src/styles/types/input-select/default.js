import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  select: {
    color: brandingTokens.brandColorPrimaryPure,
    fontSize: globalTokens.fontSizeXxs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamily: brandingTokens.fontFamilyHighlight,
    margin: globalTokens.spacingSizeNano,
    marginBottom: globalTokens.spacingSizeNano,
    height: globalTokens.spacingSizeMd,
    outlineWidth: globalTokens.borderWidthThin,
    outlineColor: brandingTokens.highlightColorPure,
    borderRadius: globalTokens.borderRadiusSm,
    borderWidth: globalTokens.borderWidthThin,
    lineHeight: globalTokens.lineHeightDefault,
    hover: brandingTokens.neutralColorLowPure,
    padding: globalTokens.spacingSizeXxxs,
    opacity: globalTokens.opacityLevelSemitransparent
  },
  label: {
    marginBottom: globalTokens.spacingSizeQuarck
  },
  input: {
    color: brandingTokens.neutralColorLowPure,
    background: brandingTokens.neutralColorHighLight,
    opacity: globalTokens.opacityLevelSemiopaque
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    colorInput: brandingTokens.brandColorPrimaryMedium,
    hover: brandingTokens.neutralColorHighPure,
    opacity: globalTokens.opacityLevelLight,
    background: brandingTokens.brandColorPrimaryPure,

    error: {
      backgroundColor: brandingTokens.feedbackColorHelperDark,
      borderColor: brandingTokens.feedbackColorHelperPure      
    },

    label: {
      color: brandingTokens.neutralColorHighPure
    },

    disabled: {
      color: brandingTokens.neutralColorHighPure,
      opacity: globalTokens.opacityLevelMedium,

      placeholder: {
        color: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelMedium
      }      
    }
  },
  error :{
    spacing: globalTokens.spacingSizeQuarck,
    border: brandingTokens.feedbackColorHelperPure,
    background: brandingTokens.feedbackColorHelperLight,
    fontWeight: brandingTokens.fontWeightRegular,
    fontSize: globalTokens.fontSizeXxs
  },
  disabled: {
    color: brandingTokens.brandColorPrimaryLight,
    onColor: brandingTokens.neutralColorHighPure,
    onColorOpacity: globalTokens.opacityLevelMedium,
    borderColor: brandingTokens.neutralColorLowPure,
    opacity: globalTokens.opacityLevelMedium,

    label: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelMedium
    },

    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelMedium
    }
  },
  list: {
    background: brandingTokens.neutralColorLowMedium,
    borderRadius: globalTokens.borderRadiusSm,
    paddingTop: globalTokens.spacingSizeXxxs,
    paddingSide: globalTokens.spacingSizeXxs,
    marginTop: globalTokens.spacingSizeQuarck
  },
  listItem: {
    border: globalTokens.borderWidthThin,
    borderColor: brandingTokens.neutralColorLowLight,
    fontSize: globalTokens.fontSizeXs,
    hover:  brandingTokens.neutralColorLowPure,
    opacity: globalTokens.opacityLevelIntense,
    marginBottom: globalTokens.spacingSizeXxxs,
    color: brandingTokens.neutralColorHighPure
  }
};