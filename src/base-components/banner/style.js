import { createGooberGetter } from '@jota-ds/context-element-react';
import BannerStyleType from '../../styles/types/banner/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

const css = createGooberGetter(BannerStyleType);

export default css`
  &.${namespace}-Banner {
    width: 100%;
    border-radius: ${context => context.borderRadius};
    display: flex;
    flex-direction: column;
    cursor: pointer;

    padding: ${context => `${context.paddingHMobile} ${context.paddingVMobile}`};

    .${namespace}-Banner__Image {
      display: flex;
      justify-content: flex-end;
      margin: ${context => `-${context.paddingHMobile} -${context.paddingVMobile} 0px`};
    }

    .${namespace}-Banner__Content {
      .${namespace}-Banner__Heading {
        padding-bottom: ${context => context.content.spacing};
        .${namespace}-Typography.Heading {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          -webkit-box-orient: vertical;
        }
      }
      .${namespace}-Banner__Paragraph {
        .${namespace}-Typography.Paragraph {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; /* number of lines to show */
          -webkit-box-orient: vertical;
          line-height: ${context => context.paragraph.lineHeightMobile};
        }
      }
    }

    @media (min-width: 560px) {
      & {
        ${context => context.motion}
        flex-direction: row-reverse;
        padding: ${'40px' /* context => context.paddingDesktop*/};
      }

      &:hover {
        box-shadow: ${context =>
          `${context.shadow} ${hexToRGB(context.shadowColor, context.shadowOpacity)}`};
      }

      .${namespace}-Banner__Image {
        margin: -40px -40px -40px 0;
      }

      .${namespace}-Banner__Content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
  }
`;
