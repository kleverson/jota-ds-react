import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  backgroundColor: brandingTokens.highlightColorPure,
  borderRadius: globalTokens.borderRadiusPill,
  borderWidth: globalTokens.borderRadiusNone,
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontWeight: brandingTokens.fontWeightRegular,
  fontSize: globalTokens.fontSizeXxs,
  lineHeight: globalTokens.lineHeightXs,
  paddingHorizontal: globalTokens.spacingSizeXxxs,
  paddingVertical: globalTokens.spacingSizeQuarck,
  motion: injectMotion('switch-slow'),
};
