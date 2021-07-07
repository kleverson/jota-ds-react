import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  select: {
    color: brandingTokens.brandColorPrimaryPure,
    fontSize: globalTokens.fontSizeXxs,
    fontWeight: brandingTokens.fontWeightBold,
    fontFamily: brandingTokens.fontFamilyHighlight,
    margin: globalTokens.spacingSizeNano,
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
  input: {
    color: brandingTokens.neutralColorLowLight,
    background: brandingTokens.neutralColorHighLight
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    colorInput: brandingTokens.brandColorPrimaryMedium,
    errorBackground: brandingTokens.feedbackColorHelperDark,
    hover: brandingTokens.neutralColorHighPure,
    opacity: globalTokens.opacityLevelLight,
    background: brandingTokens.brandColorPrimaryPure,
    errorBorder: brandingTokens.feedbackColorHelperPure
  },
  error :{
    spacing: globalTokens.spacingSizeQuarck,
    border: brandingTokens.feedbackColorHelperPure,
    background: brandingTokens.feedbackColorHelperLight,
    fontWeight: brandingTokens.fontWeightRegular,
  },
  disabled: {
    color: brandingTokens.brandColorPrimaryLight,
    onColor: brandingTokens.neutralColorHighPure,
    onColorOpacity: globalTokens.opacityLevelMedium
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