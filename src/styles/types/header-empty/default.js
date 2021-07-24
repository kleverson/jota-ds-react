import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  height: '88px',
  padding: `0px ${globalTokens.spacingSizeSm}`,
  paddingMobile: `0px ${globalTokens.spacingSizeXxs}`,
  backgroundColor: brandingTokens.neutralColorHighPure,
  border: {
    color: brandingTokens.neutralColorHighMedium,
    width: globalTokens.borderWidthHairline
  },
  ghost: {
    backgroundColor: 'transparent',
    border: 'none'
  }
};
