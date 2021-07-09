import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  backgroundColor: brandingTokens.highlightColorPure,
  borderRadius: globalTokens.borderRadiusPill,
  borderWidth: globalTokens.borderRadiusNone,
  color: brandingTokens.neutralColorLowPure,
  fontFamily: brandingTokens.fontFamilyHighlight,
  fontWeight: brandingTokens.fontWeightMedium,
  fontSize: globalTokens.fontSizeXxs,
  lineHeight: globalTokens.lineHeightXs,
  paddingLeft: globalTokens.spacingSizeXxxs,
  paddingRight: globalTokens.spacingSizeXxxs,
  motion: injectMotion('switch-slow'),
};
