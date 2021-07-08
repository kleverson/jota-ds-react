import * as globalTokens from '../../tokens/global.js';
import * as brandingTokens from '../../tokens/branding.js';

export default {
  fontFamily: brandingTokens.fontFamilyHighlight,
  color: brandingTokens.neutralColorLowPure,

  heading: {
    fontWeight: brandingTokens.fontWeightBold,
    lineHeight: globalTokens.lineHeightDefault,
    sizes: {
      mobile: {
        small: globalTokens.fontSizeSm, 
        medium: globalTokens.fontSizeMd, 
        large: globalTokens.fontSizeXl, 
        xlarge: globalTokens.fontSizeXxl, 
        display: globalTokens.fontSizeXxxl
      },
      desktop: {
        small: globalTokens.fontSizeMd, 
        medium: globalTokens.fontSizeLg, 
        large: globalTokens.fontSizeXxl, 
        xlarge: globalTokens.fontSizeXxxl, 
        display: globalTokens.fontSizeGiant 
      },
      xsmall: globalTokens.fontSizeXs, 
    }
  },

  subtitle: {
    fontWeight: brandingTokens.fontWeightMedium,
    sizes: {
      mobile: {
        small: globalTokens.fontSizeSm,
        large: globalTokens.fontSizeMd,
        lineHeightSmall: globalTokens.lineHeightSm,
        lineHeightLarge: globalTokens.lineHeightLg,
      },
      desktop: {
        small: globalTokens.fontSizeMd,
        large: globalTokens.fontSizeLg,
        lineHeightSmall: globalTokens.lineHeightLg,
        lineHeightLarge: globalTokens.lineHeightLg,
      }
    }
  },

  paragraph: {
    fontWeight: brandingTokens.fontWeightRegular,
    opacity: globalTokens.opacityLevelSemiopaque,
    sizes: {
      mobile: {
        lineHeightSmall: globalTokens.lineHeightLg,
        lineHeightLarge: globalTokens.lineHeightSm,
      },
      desktop: {
        lineHeightSmall: globalTokens.lineHeightLg,
        lineHeightLarge: globalTokens.lineHeightSm,
      },
      small: globalTokens.fontSizeXs,
      large: globalTokens.fontSizeSm,
    }
  },

  caption: {
    fontWeight: brandingTokens.fontWeightRegular,
    lineHeight: globalTokens.lineHeightMd,
    sizes: {
      default: globalTokens.fontSizeXxs,
    }
  },

  onColor: {
    color: brandingTokens.neutralColorHighPure
  }
};
