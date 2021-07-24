import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightMedium,
  motion: injectMotion('switch-fast'),
};
