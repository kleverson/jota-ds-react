import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  borderRadius: globalTokens.borderRadiusCircular,

  variants: {
    default: {
      backgroundColor: brandingTokens.brandColorSecondaryLight,
      color: brandingTokens.brandColorSecondaryMedium,
    },
    warning: {
      backgroundColor: brandingTokens.feedbackColorWarningLight,
      color: brandingTokens.feedbackColorWarningMedium,
    },
    helper: {
      backgroundColor: brandingTokens.feedbackColorHelperLight, 
      color: brandingTokens.feedbackColorHelperMedium, 
    }
  },

  sizes: {
    small: {
      width: "32px",
      height: "32px"
    },
    medium: {
      width: "48px",
      height: "48px"
    },
    large: {
      width: "64px",
      height: "64px"
    }
  }

};
