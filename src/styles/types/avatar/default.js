import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
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