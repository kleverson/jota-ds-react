import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  lineHeight: globalTokens.lineHeightLg,
  padding: globalTokens.spacingSizeSm,
  opacity: globalTokens.opacityLevelLight,
  color: brandingTokens.neutralColorLowPure,
  backgroundColor: brandingTokens.highlightColorPure,
  borderRadius: globalTokens.borderRadiusMd,
  shadow: globalTokens.shadowLevel3Stack,
  boxShadowColor: brandingTokens.neutralColorLowPure,
  bottom: globalTokens.spacingSizeXl,
  right: "36px",

  title: {
    marginBottom: globalTokens.spacingSizeXxxs
  },

  paragraph: {
    marginBottom: globalTokens.spacingSizeLg
  },

  wrapper: {
    marginRight: globalTokens.spacingSizeXxxs
  },

  mobile: {
    paddingTop: globalTokens.spacingSizeMd,
    padding: globalTokens.spacingSizeXxs
  }
};
