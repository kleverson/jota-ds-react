import { injectMotion } from '@meiuca/motion-tokens/helpers';
import * as brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-fast'),

  shape: {
    fontFamily: brandingTokens.fontFamilyHighlight,
    fontSize: globalTokens.fontSizeXxs,
    fontWeight: brandingTokens.fontWeightRegular,
    lineHeight: globalTokens.lineHeightXs,
    padding:globalTokens.spacingSizeXxxs,
    borderRadius:globalTokens.spacingSizeXxxs,
    shadow: globalTokens.shadowLevel2Stack,
    shadowColor: brandingTokens.neutralColorHighMedium,
    shadowOpacity: globalTokens.opacityLevelSemitransparent,
    backgroundColor: brandingTokens.neutralColorLowPure,
    borderRadius: globalTokens.borderRadiusSm
  }
};
