import { createGooberGetter as css } from '@jota-ds/context-element-react';
import iconStyleType from '../../styles/types/icon/default.js';
import { namespace } from '../../utils/setup.js';

export default css(iconStyleType)`
  &.${namespace}-Icon{
    display: flex;
    justify-content: center;
    align-items: center;
    color: currentColor;
    width: fit-content;
    max-width: 40px;
    box-sizing: border-box;
    padding: ${ context => context.padding.small};

    &--large{
        padding:  ${ context => context.padding.large};
    }
  }
`;
