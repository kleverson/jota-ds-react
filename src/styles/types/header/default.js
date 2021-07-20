import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  menu: {
    padding: `${globalTokens.spacingSizeXs} ${globalTokens.spacingSizeSm}`,
    backgroundColor: brandingTokens.neutralColorHighPure,

    ghost: {
      backgroundColor: "transparent"
    }
  },
  links: {
    marginRight: globalTokens.spacingSizeXs,
    fontWeight: brandingTokens.fontWeightRegular,
    marginBottom: globalTokens.spacingSizeXs,

    active: {
      fontWeight: brandingTokens.fontWeightBold
    }
  },
  user: {
    margin: globalTokens.spacingSizeXxxs
  }
};
