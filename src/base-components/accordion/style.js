import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import AccordionStyleType from '../../styles/types/accordion/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(AccordionStyleType)`
  &.${namespace}-Accordion{
    width: 100%;
    border-bottom: ${ context => `${context.borderBottomSize} solid ${context.borderBottomColor}`};
    .${namespace}-Accordion__Label{
      display: flex;
      background: none;
      border: none;
      width: 100%;
      justify-content: space-between;
      cursor: pointer;
      color: ${ context => context.label.color };
      font-family: ${ context => context.label.fontFamilies };
      font-weight: ${ context => context.label.fontWeights };
      font-size: ${ context => context.label.fontSizes };
      line-height: ${ context => context.label.lineHeights };
      padding: ${ context => context.label.spacing };

      .${namespace}-Typography{
        &.Heading{
          color: ${ context => context.label.color };
          line-height: ${ context => context.label.lineHeights };
        }
      }

      .${namespace}-Icon{
        ${context => context.label.icon.motion};
      }

      &:hover {
        background-color: ${ context => hexToRGB(context.states.hover.label.fill, context.states.hover.label.opacity)};
      }

      &:focus-visible {
        outline: transparent;
      }
    }
    .${namespace}-Accordion__Content{
      display: block;
      max-height: 0;
      overflow: hidden;
      ${context => context.motion}

      .${namespace}-Typography{
        &.Paragraph{
          padding: ${ context => context.content.spacing };
        }
      }
    }

    &.${namespace}-Accordion--focus{
      outline-width: ${context => context.states.focus.outlineWidth};
      outline-style: solid;
      outline-color: ${context => context.states.focus.outlineColor};
    }

    &--opened {
      .${namespace}-Accordion__Label{
        .${namespace}-Icon{
          transform: rotate(45deg);
        }
      }
      .${namespace}-Accordion__Content{
        max-height: 5000px;
      }
    }

    &--onColor {
      border-color: ${ context => context.onColor.borderBottomColor };

      .${namespace}-Accordion__Label{
        color: ${ context => context.onColor.label.color };
        .${namespace}-Typography{
          &.Heading{
            color: ${ context => context.onColor.label.color };
          }
        }

        &:hover {
          background-color: ${ context => hexToRGB(context.onColor.states.hover.label.fill, context.onColor.states.hover.label.opacity)};
        }
      }
    }
  }
`;
