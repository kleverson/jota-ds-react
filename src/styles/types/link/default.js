import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightMedium,
  lineHeight: globalTokens.lineHeightDefault,

  textDecoration: 'none',

  motion: injectMotion('switch-slow'),

  borderWidth: `${globalTokens.borderWidthThin}`,
  borderColor: `${brandingTokens.neutralColorLowPure}`,
  paddingTop: globalTokens.spacingSizeQuarck,
  paddingBottom: globalTokens.spacingSizeQuarck,

  hover: {
    textDecoration: 'none',
  },
  active: {
    color: brandingTokens.neutralColorLowMedium,
    textDecoration: 'none'
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
  },
  focus: {
    borderColor: brandingTokens.highlightColorPure,
    borderWidth: globalTokens.borderWidthThin,
    color: brandingTokens.neutralColorLowPure,
  },

  disabled: {
    color: brandingTokens.neutralColorHighDark,
    opacity: globalTokens.opacityLevelMedium
  },

  icon: {
    marginLeft: globalTokens.spacingSizeQuarck,
    hover: {
      marginLeft: globalTokens.spacingSizeNano
    }
  }
}