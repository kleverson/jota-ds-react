import { injectMotion } from '@meiuca/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: globalTokens.fontSizeXs,
  motion: injectMotion('switch-slow'),

  finish: {
    backgroundColor: brandingTokens.brandColorSecondaryPure,
    borderRadius: globalTokens.borderRadiusCircular,
  },

  current: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    borderRadius: globalTokens.borderRadiusPill,
    fontWeight: brandingTokens.fontWeightBold,
    color: brandingTokens.neutralColorHighPure,
    lineHeight: globalTokens.lineHeightLg,
    paddingVertical: globalTokens.spacingSizeQuarck,
    paddingHorizontal: globalTokens.spacingSizeXxxs
  },

  next: {
    backgroundColor: "transparent",
    borderRadius: globalTokens.borderRadiusCircular,
    borderColor: brandingTokens.neutralColorLowPure,
    fontWeight: brandingTokens.fontWeightMedium,
    color: brandingTokens.neutralColorLowPure,    
  },

  icon: {
    color: brandingTokens.neutralColorHighPure
  }
};
