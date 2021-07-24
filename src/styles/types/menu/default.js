import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default /** @type {import('@meiuca_design/zero-builder/types/components').StyleType} */ ({
  backgroundColor: brandingTokens.neutralColorLowMedium,

  borderRadius: globalTokens.borderRadiusSm,

  paddingBottom: globalTokens.spacingSizeNano,
  paddingTop: globalTokens.spacingSizeNano,

  boxShadowColor: brandingTokens.neutralColorLowPure,
  boxShadowOpacity: globalTokens.opacityLevelLight,
  boxShadowLevel: globalTokens.shadowLevel2Stack,

  motion: injectMotion('switch-slow'),

  item: {
    minHeight: '58px',

    fontFamily: brandingTokens.fontFamilyHighlight,
    fontWeight: brandingTokens.fontWeightRegular,
    fontSize: globalTokens.fontSizeXs,
    color: brandingTokens.neutralColorHighPure,
    lineHeight: globalTokens.lineHeightDefault,

    paddingLeft: globalTokens.spacingSizeXxs,
    paddingRight: globalTokens.spacingSizeXxs,

    borderTopWidth: '2px',
    borderColor: brandingTokens.neutralColorLowLight,

    hover: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelIntense,
    },
  },
});
