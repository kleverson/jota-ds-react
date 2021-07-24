import { injectMotion } from '@jota-ds/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  border: 'none',
  motion: injectMotion('switch-fast'),
  borderRadius: globalTokens.borderRadiusCircular,
  color: brandingTokens.neutralColorLowPure,

  states: {
    hover: {
      backgroundColor: brandingTokens.neutralColorLowPure,
      opacity: globalTokens.opacityLevelSemitransparent,

      onColor: {
        backgroundColor: brandingTokens.neutralColorHighPure,
        opacity: globalTokens.opacityLevelLight,
      }
    },

    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: globalTokens.borderWidthThin
    }    
  },

  onColor: {
    color: brandingTokens.neutralColorHighPure,
  },

  sizes: {
    small: {
      width: "32px",
      height: "32px"
    },
    medium: {
      width: "48px",
      height: "48px"
    },
    large: {
      width: "64px",
      height: "64px"
    }
  }
};
