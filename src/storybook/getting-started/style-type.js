import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../styles/tokens/branding.js';
import * as globalTokens from '../../styles/tokens/global.js';

export default {
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightMedium,
  motion: injectMotion('switch-fast'),
};
