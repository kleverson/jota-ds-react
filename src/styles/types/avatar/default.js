import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  backgroundColor: brandingTokens.neutralColorLowPure,
  borderRadius: globalTokens.borderRadiusCircular,

  icon: {
    color: brandingTokens.neutralColorLowLight
  },

  onColor: {
    backgroundColor: brandingTokens.neutralColorHighPure,

    icon: {
      color: brandingTokens.neutralColorLowMedium
    } 
  },
  
  notification: {
    backgroundColor: brandingTokens.highlightColorPure
  }
};
