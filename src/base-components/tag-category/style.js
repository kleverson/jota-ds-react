import { createGooberGetter } from '@meiuca/context-element-react';
import TagCategoryStyleType from '../../styles/types/tag-category/default.js';
import { namespace } from '../../utils/setup.js';

const css = createGooberGetter(TagCategoryStyleType);

export default css`
  &.${namespace}-TagCategory {
    background-color: transparent;
    font-family: ${context => context.fontFamily};
    font-weight: ${context => context.fontWeight};
    font-size: ${context => context.fontSize};
    /* line-height: ${context => context.lineHeight}; */
    color: ${context => context.color};
    opacity: ${context => context.opacity};
    display: inline-flex;
    align-items: center;
    border: 0;

    .${namespace}-TagCategory__label {
      padding-left: ${({ label }) => label.paddingLeft};
    }

    .${namespace}-TagCategory__icon {
      color: ${context => context.color};
      display: initial;
      padding: 0;
    }

    &--onColor {
      .${namespace}-TagCategory__label {
        color: ${({ onColor }) => onColor.color};
      }

      .${namespace}-TagCategory__icon {
        color: ${({ onColor }) => onColor.color};
      }
    }
  }
`;
