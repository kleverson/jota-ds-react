import { createGooberGetter as css } from '@meiuca/context-element-react';
import TagHighlightStyleType from '../../styles/types/tag-highlight/default.js';
import { namespace } from '../../utils/setup.js';

export default css(TagHighlightStyleType)`
  &.${namespace}-TagHighlight {
    background-color: ${ context => context.backgroundColor };
    border-radius: ${ context => context.borderRadius };
    border: ${ context => context.backgroundColor } ${ context => context.borderWidth } solid;
    color: ${ context => context.color };    
    font-family: ${ context => context.fontFamily};
    font-weight: ${ context => context.fontWeight};
    font-size: ${ context => context.fontSize };
    line-height: ${ context => context.lineHeight };
    padding-left: ${ context => context.paddingLeft };
    padding-right: ${ context => context.paddingRight };
    display: inline-flex;
    align-items: center;
    height: 24px;    
  }
`;
