import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  content: {
    padding: globalTokens.spacingSizeXs
  },
  nav: {
    padding: globalTokens.spacingSizeXs,
    backgroundColor: brandingTokens.neutralColorHighLight
  },
  shape: {
    borderRadius: globalTokens.borderRadiusSm,
    shadow: globalTokens.shadowLevel4Stack,
    shadowColor: brandingTokens.neutralColorLowPure,
    shadowOpacity: globalTokens.opacityLevelSemitransparent,
    backgroundColor: brandingTokens.neutralColorHighPure,
  },
  overlay: {
    backgroundColor: brandingTokens.neutralColorLowPure,
    opacity: globalTokens.opacityLevelSemitransparent,
  },
  buttonClose: {
    top: globalTokens.spacingSizeXs,  
    right: globalTokens.spacingSizeXs
  }
};
