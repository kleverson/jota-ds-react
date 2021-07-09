import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),
  height: '88px',
  padding: `0px ${globalTokens.spacingSizeSm}`,
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
