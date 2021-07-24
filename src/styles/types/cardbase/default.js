import { injectMotion } from '@meiuca/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('expand-small', [':hover']),
  fill: brandingTokens.neutralColorHighPure,
  borderRadius: globalTokens.borderRadiusMd,
  borderWidth: globalTokens.borderWidthHairline,
  padding: globalTokens.spacingInsetSizeSmStack,
  outlineWidth: globalTokens.borderWidthThin,
  outlineColor: brandingTokens.highlightColorPure,
  stroke: {
    color: brandingTokens.neutralColorLowPure,
    opacity: globalTokens.opacityLevelSemitransparent
  },
  hover: {
    boxShadowLevel: globalTokens.shadowLevel3Stack,
    boxShadowColor: brandingTokens.neutralColorHighMedium,
    onColor: {
      boxShadowColor: brandingTokens.neutralColorLowPure,
      boxShadowOpacity: globalTokens.opacityLevelLight
    }
  },
  onColor: {
    fill: brandingTokens.neutralColorHighPure,
  }
};
