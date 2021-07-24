import { createGooberGetter as css } from '@jota-ds/context-element-react';
import NotificationStyleType from '../../styles/types/notification/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(NotificationStyleType)`
  &.${namespace}-Notification {
    width: calc( 100vw - ${({ mobile }) => `${parseInt(mobile.padding) * 2}px`} );
    height: calc( 100vh - 48px );
    z-index: 999;

    font-family: ${ context => context.fontFamily};
    font-size: ${ context => context.fontSize };
    font-weight: ${ context => context.fontWeight};
    color: ${ context => context.color };
    background-color: ${ context => context.backgroundColor };
    padding: ${ ({ mobile }) => mobile.padding };
    
    box-shadow: ${ context => `${context.shadow} ${hexToRGB(context.boxShadowColor, context.opacity)}`};
    -webkit-box-shadow: ${ context => `${context.shadow} ${hexToRGB(context.boxShadowColor, context.opacity)}`};
    -moz-box-shadow: ${ context => `${context.shadow} ${hexToRGB(context.boxShadowColor, context.opacity)}`};    

    display: none;

    &--isOpen {
      display: block;
      animation: animation 1s;
    }

    .${namespace}-Typography.Heading {
      margin-bottom: ${ ({ title }) => title.marginBottom };
      padding-top: ${ ({ mobile }) => mobile.paddingTop };
      width: calc( 100% - 64px );
    }

    .${namespace}-Typography.Paragraph {
      margin-bottom: ${ ({ paragraph }) => paragraph.marginBottom };
      height: 100%;
    }

    .${namespace}-Notification__container {
      position: relative;
      height: 100%;
    }

    .${namespace}-Notification__wrapper {
      padding-right: ${ ({ wrapper }) => wrapper.marginRight };
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;

      .${namespace}-Button {
        justify-self: flex-end;
        flex-shrink: 0;
        flex-grow: 0;
      }
    }

    .${namespace}-Notification__close {
      position: absolute;
      top: 0;
      right: 0;
    }

    @media (min-width: 768px) {
      width: initial;
      height: initial;
      max-width: 672px;
      position: fixed;
      padding: ${ context => context.padding };
      border-radius: ${ context => context.borderRadius };
      bottom: ${ context => context.bottom };
      right: ${ context => context.right };

      .${namespace}-Typography.Heading {
        margin-bottom: ${ ({ title }) => title.marginBottom };
        padding-top: 0;
      }      
    }

    @keyframes animation {
      from { 
        right: -672px; 
      }

      to { 
        right: 20px; 
      }
    }
  }
`;
