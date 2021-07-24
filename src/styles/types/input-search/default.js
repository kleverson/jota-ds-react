import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  fontSize: globalTokens.fontSizeXs,
  fontWeight: brandingTokens.fontWeightRegular,
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,
  motion: injectMotion('switch-slow'),

  input: {
    marginBottom: globalTokens.spacingSizeNano,
    padding: globalTokens.spacingSizeXxxs,
    borderRadius: globalTokens.borderRadiusLg,
    borderWidth: globalTokens.borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    lineHeight: globalTokens.lineHeightLg,
    backgroundColor: "transparent",
    height: '48px',
    placeholder: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemiopaque
    },
    text: {
      color: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemiopaque
    }
  },
  icon: {
    marginRight: globalTokens.spacingSizeXxxs,
  },
  onColor: {
    color: brandingTokens.neutralColorHighPure,
    input: {
      borderColor: brandingTokens.neutralColorHighPure,
      color: brandingTokens.neutralColorHighPure
    },
  },
  states: {
    hover: {
      input: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent
      },
      onColor: {
        input: {
          backgroundColor: brandingTokens.neutralColorHighPure,
          opacity: globalTokens.opacityLevelLight
        }
      }
    },
    disabled: {
      opacity: globalTokens.opacityLevelMedium
    },
    focus: {
      borderColor: brandingTokens.highlightColorPure,
      borderWidth: globalTokens.borderWidthThin,
      input: {
        backgroundColor: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent
      }
    }
  }
};
