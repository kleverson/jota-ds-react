import { createGooberGetter as css } from '@meiuca/context-element-react';
import typographyStyleType from '../../styles/types/typography/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(typographyStyleType)`
  &.${namespace}-Typography{
    font-style: normal;
    text-align: left;
    letter-spacing: normal;
    margin: 0;
    padding: 0;
    color: ${context => `${context.color}`};
    font-family: ${context => `${context.fontFamily}`};

    &.Heading{
        font-weight: ${({heading}) => heading.fontWeight};
        line-height: ${({heading}) => heading.lineHeight};

        &--x-small{
          font-size: ${({heading}) => heading.sizes.xsmall};
        }

        &--small{
          font-size: ${({heading}) => heading.sizes.mobile.small};
        }

        &--medium{
          font-size: ${({heading}) => heading.sizes.mobile.medium};
        }

        &--large{
          font-size: ${({heading}) => heading.sizes.mobile.large};
        }

        &--x-large{
          font-size: ${({heading}) => heading.sizes.mobile.xlarge};
        }

        &--display{
          font-size: ${({heading}) => heading.sizes.mobile.display};
        }

        @media (min-width: 1024px){
          &--small{
            font-size: ${({heading}) => heading.sizes.desktop.small};
          }

          &--medium{
            font-size: ${({heading}) => heading.sizes.desktop.medium};
          }

          &--large{
            font-size: ${({heading}) => heading.sizes.desktop.large};
          }

          &--x-large{
            font-size: ${({heading}) => heading.sizes.desktop.xlarge};
          }

          &--display{
            font-size: ${({heading}) => heading.sizes.desktop.display};
          }
        }
    }

    &.Subtitle{
        font-weight: ${({subtitle}) => subtitle.fontWeight};

        &--small{
          font-size: ${({subtitle}) => subtitle.sizes.mobile.small};
          line-height: ${({subtitle}) => subtitle.sizes.mobile.lineHeightSmall};
        }

        &--large{
          font-size: ${({subtitle}) => subtitle.sizes.mobile.large};
          line-height: ${({subtitle}) => subtitle.sizes.mobile.lineHeightLarge};
        }

        @media (min-width: 1024px){
          &--small{
            font-size: ${({subtitle}) => subtitle.sizes.desktop.small};
            line-height: ${({subtitle}) => subtitle.sizes.desktop.lineHeightSmall};
          }

          &--large{
            font-size: ${({subtitle}) => subtitle.sizes.desktop.large};
            line-height: ${({subtitle}) => subtitle.sizes.desktop.lineHeightLarge};
          }
        }
    }

    &.Paragraph{
        font-weight: ${({paragraph}) => paragraph.fontWeight};
        color: ${ context => hexToRGB(context.color, context.paragraph.opacity)};
        
        &--small{
          font-size: ${({paragraph}) => paragraph.sizes.small};
          line-height: ${({paragraph}) => paragraph.sizes.mobile.lineHeightSmall};
        }

        &--large{
          font-size: ${({paragraph}) => paragraph.sizes.large};
          line-height: ${({paragraph}) => paragraph.sizes.mobile.lineHeightLarge};
        }

        @media (min-width: 1024px){
          &--small{
            line-height: ${({paragraph}) => paragraph.sizes.desktop.lineHeightSmall};
          }

          &--large{
            line-height: ${({paragraph}) => paragraph.sizes.desktop.lineHeightLarge};
          }
        }
    }

    &.Caption{
      font-weight: ${({caption}) => caption.fontWeight};
      line-height: ${({caption}) => caption.lineHeight};
      font-size: ${({caption}) => caption.sizes.default};
    }

    &--onColor{
      color: ${({onColor}) => onColor.color};

      &.Paragraph {
        color: ${ context => hexToRGB(context.onColor.color, context.paragraph.opacity)};
      }
    }
  }
`;
