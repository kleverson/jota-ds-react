import { createGooberGetter as css } from '@meiuca/context-element-react';
import TabGroupStyleType from '../../styles/types/tab-group/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(TabGroupStyleType)`
&.${namespace}-Tab-group {
  .${namespace}-Tab-group__List {
    display: flex;
    .${namespace}-Tab-group__Label {
      background: none;
      border: none;
      padding: 0;
      display: flex;
      flex-direction: column;
      white-space: nowrap;
      cursor: pointer;

      span{
        padding: ${ context => context.label.paddingTop } ${ context => context.label.paddingSide };
        font-family: ${ context => context.label.fontFamilies };
        font-weight: ${ context => context.label.fontWeights };
        font-size: ${ context => context.label.fontSizes };
        line-height: ${ context => context.label.lineHeights };
        color: ${ context => hexToRGB(context.label.color, context.label.opacity)};
      }

      &::after {
        display: block;
        width: 100%;
        height: 2px;
        content: "";
        border-radius: ${ context => context.label.underline.borderRadius };
        ${context => context.motion};
      }
      &--actived {
        span{
          color: ${ context => context.label.color};
          font-weight:${ context => context.states.active.label.fontWeights };
        }
        &::after {
          background-color: ${ context => context.label.underline.fill };
        }
      }

      &:hover {
        background: ${ context => hexToRGB(context.states.hover.fill, context.states.hover.opacity)};
        &::after {
          background-color: ${ context => context.states.hover.label.underline.fill };
        }
      }

      &:focus-visible {
        background: ${ context => hexToRGB(context.states.hover.fill, context.states.hover.opacity)};
        &::after {
          background-color: ${ context => context.states.hover.label.underline.fill };
        }
        outline-width: ${context => context.states.focus.outlineWidth};
        outline-style: solid;
        outline-color: ${context => context.states.focus.outlineColor};
      }

    }
  }
  &--onColor {
    .${namespace}-Tab-group__List {
      .${namespace}-Tab-group__Label {

        span {
          color: ${ context => hexToRGB(context.onColor.label.color, context.onColor.label.opacity)};
        }

        &--actived {
          span{
            color: ${ context => context.onColor.label.color};
          }
          &::after {
            background-color: ${ context => context.onColor.label.underline.fill };
          }

        }

        &:hover {
          background: ${ context => hexToRGB(context.onColor.states.hover.fill, context.onColor.states.hover.opacity)};
          &::after {
            background-color: ${ context => context.onColor.states.hover.label.underline.fill };
          }
        }

        &:focus-visible {
          background: ${ context => hexToRGB(context.onColor.states.hover.fill, context.onColor.states.hover.opacity)};
          &::after {
            background-color: ${ context => context.onColor.states.hover.label.underline.fill };
          }
        }
      }
    }
  }
}
`;
