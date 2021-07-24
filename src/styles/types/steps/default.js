import { injectMotion } from '@meiuca/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  line: {
    left: globalTokens.spacingSizeNano,
    height: '2px',
    width: '40px',
    motion: injectMotion('switch-slow'),

    finish: {
      backgroundColor: brandingTokens.brandColorSecondaryPure
    },

    next: {
      backgroundColor: brandingTokens.neutralColorLowPure
    }
  }
};
