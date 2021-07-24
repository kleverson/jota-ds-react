import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  padding: {
    small: '2px',
    large: globalTokens.spacingSizeQuarck,
  },
};
