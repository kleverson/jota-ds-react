import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  color: brandingTokens.neutralColorLowPure,
  opacity: globalTokens.opacityLevelSemiopaque,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontSize: globalTokens.fontSizeXxs,
  fontWeight: brandingTokens.fontWeightMedium,
  lineHeight: globalTokens.lineHeightXs,
  motion: injectMotion('switch-slow'),

  onColor: {
    color: brandingTokens.neutralColorHighPure
  },

  label: {
    paddingLeft: globalTokens.spacingSizeQuarck
  }
};
