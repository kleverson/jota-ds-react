import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import IconShapeStyleType from '../../styles/types/icon-shape/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(IconShapeStyleType)`
  &.${namespace}-IconShape{
    border-radius:  ${context => context.borderRadius};
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    &--default{
      background-color: ${({variants}) => variants.default.backgroundColor};
      color: ${({variants}) => variants.default.color};
    }

    &--warning{
      background-color: ${({variants}) => variants.warning.backgroundColor};
      color: ${({variants}) => variants.warning.color};
    }

    &--helper{
      background-color: ${({variants}) => variants.helper.backgroundColor};
      color: ${({variants}) => variants.helper.color};
    }

    &--small {
      width: ${({sizes}) => sizes.small.width};
      height: ${({sizes}) => sizes.small.height};
    }

    &--medium {
      width: ${({sizes}) => sizes.medium.width};
      height: ${({sizes}) => sizes.medium.height};
    }

    &--large {
      width: ${({sizes}) => sizes.large.width};
      height: ${({sizes}) => sizes.large.height};
    }
  }
`;
