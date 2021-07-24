import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-slow'),
  borderWidth: globalTokens.borderWidthHairline,
  borderColor: brandingTokens.neutralColorHighMedium,
  modalPadding: globalTokens.spacingSizeXxxs,
  borderRadius: globalTokens.borderRadiusSm,
  backgroundColor: brandingTokens.neutralColorHighPure,
  boxShadowLevel: globalTokens.shadowLevel1Stack,
  boxShadowColor: brandingTokens.neutralColorHighMedium,

  text: {
    margin: globalTokens.spacingSizeXxxs,
    height: globalTokens.spacingSizeMd
  },


  modal: {
    modalPadding: globalTokens.spacingSizeXxxs,
    borderRadius: globalTokens.borderRadiusSm,
    backgroundColor: brandingTokens.neutralColorHighPure,
    boxShadowLevel: globalTokens.shadowLevel1Stack,
    boxShadowColor: brandingTokens.neutralColorHighMedium,
    bottom: globalTokens.spacingSizeMd,

    mobile: {
      bottom: globalTokens.spacingSizeXs
    }
  }
};
