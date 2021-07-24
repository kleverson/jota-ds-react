import { injectMotion } from '@meiuca_design/motion-tokens/helpers';
import brandingTokens from '../../tokens/branding.js';
import * as globalTokens from '../../tokens/global.js';

export default {
  motion: injectMotion('switch-medium'),

  selector: {
    borderWidth: globalTokens.borderWidthThin,
    borderColor: brandingTokens.neutralColorLowPure,
    borderRadius: globalTokens.borderRadiusPill,

    icon:{
      fill: brandingTokens.neutralColorLowPure,
      borderRadius: globalTokens.borderRadiusCircular,
    }
  },
  label: {
    paddingLeft: globalTokens.spacingSizeNano,
    fill: brandingTokens.neutralColorLowPure,
    fontFamilies: brandingTokens.fontFamilyHighlight,
    fontWeights: brandingTokens.fontWeightRegular,
    fontSizes: globalTokens.fontSizeXs,
    lineHeights: globalTokens.lineHeightDefault
  },

  states: {
    hover: {
      selector: {
        fill: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelSemitransparent
      }
    },
    checked: {
      selector: {
        fill: brandingTokens.brandColorSecondaryPure,
        icon: {
          fill: brandingTokens.neutralColorHighPure,
        }
      }
    },
    disabled: {
      selector: {
        borderWidth: globalTokens.borderWidthThin,
        borderColor: brandingTokens.neutralColorLowPure,
        borderOpacity: globalTokens.opacityLevelMedium,
        icon: {
          fill: brandingTokens.neutralColorLowPure,
          opacity: globalTokens.opacityLevelMedium
        }
      },
      label: {
        fill: brandingTokens.neutralColorLowPure,
        opacity: globalTokens.opacityLevelMedium
      }
    },
    focus: {
      outlineColor: brandingTokens.highlightColorPure,
      outlineWidth: globalTokens.borderWidthThin
    }
  },

  onColor: {
    selector: {
      borderColor: brandingTokens.neutralColorHighPure,
      icon: {
        fill: brandingTokens.neutralColorHighPure
      }
    },
    label: {
      fill: brandingTokens.neutralColorHighPure
    },
    states: {
      hover: {
        selector: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: globalTokens.opacityLevelLight
        }
      },
      focus: {
        selector: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: globalTokens.opacityLevelLight
        }
      },      
      checked: {
        selector: {
          fill: brandingTokens.neutralColorHighPure,
          icon: {
            fill: brandingTokens.brandColorSecondaryPure,
          }
        }
      },
      disabled: {
        selector: {
          borderColor: brandingTokens.neutralColorHighPure,
          borderOpacity: globalTokens.opacityLevelMedium,
          icon: {
            fill: brandingTokens.neutralColorHighPure,
            opacity: globalTokens.opacityLevelMedium
          }
        },
        label: {
          fill: brandingTokens.neutralColorHighPure,
          opacity: globalTokens.opacityLevelMedium
        }
      }
    }
  }
};
