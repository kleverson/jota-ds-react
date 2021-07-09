import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  links: {
    marginRight: globalTokens.spacingSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,

    active: {
      fontWeight: brandingTokens.fontWeightBold
    }
  },
  user: {
    marginRight: globalTokens.spacingSizeXxxs
  }
};
