import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  borderRadius: globalTokens.borderRadiusMd,
  paddingVMobile: globalTokens.spacingInsetSizeSmV,
  paddingHMobile: globalTokens.spacingInsetSizeSmH,
  // paddingVDesktop: $spacingInsetSizeLgV,
  // paddingHDesktop: $spacingInsetSizeLgH,

  shadow: globalTokens.shadowLevel3Stack,
  shadowColor: brandingTokens.neutralColorLowPure,
  shadowOpacity: globalTokens.opacityLevelLight,

  content:{
    spacing: globalTokens.spacingSizeXxs,
  },

  paragraph: {
    lineHeightMobile: globalTokens.lineHeightLg
  },

  motion: injectMotion('expand-medium'),
};
