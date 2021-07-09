import { createGooberGetter as css } from '@meiuca/context-element-react';
import HeaderStyleType from '../../styles/types/header/default.js';
import { namespace } from '../../utils/setup.js';
import { hexToRGB } from '../../utils/colors.js';

export default css(HeaderStyleType)`
  &.${namespace}-Header{
    .${namespace}-Header__LinksList{
      margin: 0px;
      padding: 0px;
      list-style-type: none;
      display: flex;

      .${namespace}-Header__LinksItem{
        margin-right: ${({links}) => links.marginRight};

        &:last-child{
          margin-right: 0px;
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
    }

    .${namespace}-Header__UserInfo,
    .${namespace}-Header__NavMenu{
      display: flex;
      align-items: center;
    }

    .${namespace}-Header__UserInfo,
    .${namespace}-Header__UserInfo .${namespace}-Avatar{
      margin-right: ${({user}) => user.marginRight};
    }
  }
`;
