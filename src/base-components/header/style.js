import { createGooberGetter as css } from '@meiuca_design/context-element-react';
import HeaderStyleType from '../../styles/types/header/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(HeaderStyleType)`
  &.${namespace}-Header{
    position: relative;

    .${namespace}-Header__NavLinks{
      position: absolute;
      top: 87px;
      display: none;
      width: 100%;
      left: 0;
      padding: ${({menu}) => menu.padding};
      box-sizing: border-box;
      background-color: ${({menu}) => menu.backgroundColor};

      &--ghost {
        background-color: ${ ({ menu }) => menu.ghost.backgroundColor };
      }

      &--open{
        display: block;
      }
    }

    .${namespace}-Header__LinksList{
      margin: 0px;
      padding: 0px;
      list-style-type: none;

      .${namespace}-Header__LinksItem{
        margin-right: ${({links}) => links.marginRight};
        margin-bottom: ${({links}) => links.marginBottom};

        &:last-child{
          margin-right: 0px;
          margin-bottom: 0px;
        }

        .${namespace}-Link{
          font-weight: ${({links}) => links.fontWeight};

          &:after{
            opacity: 0;
          }
        }

        &:hover{
          .${namespace}-Link{
            &:after{
              opacity: 1;
            }
          }
        }

        &.${namespace}-Header__LinksItem--active{
          pointer-events: none;
          .${namespace}-Link{
            font-weight: ${({links}) => links.active.fontWeight};
          }
        }
      }
    }

    .${namespace}-Header__UserInfo{
      cursor: pointer;

      .${namespace}-Typography.Caption{
        display: none;
      }
    }

    .${namespace}-Header__NavMenu{
      margin-left: auto;
    }

    .${namespace}-Header__UserInfo,
    .${namespace}-Header__NavMenu{
      display: flex;
      align-items: center;
      min-width: fit-content;
    }

    .${namespace}-Header__UserInfo{
      margin-right: ${({user}) => user.margin};
    }

    @media screen and (min-width: 1024px){
      .${namespace}-Header__NavLinks{
        position: relative;
        top: initial;
        display: flex;
        padding: 0px;
        justify-content: center;
        align-items: center;
      }

      .${namespace}-Header__LinksList{
        position: relative;
        display: flex;

        .${namespace}-Header__LinksItem{
          margin-bottom: 0px;
        }
      }

      .${namespace}-Header__UserInfo{
        .${namespace}-Typography.Caption{
          display: block;
        }

        .${namespace}-Avatar{
          margin-right: ${({user}) => user.margin};
        }
      }
    }
  }
`;
