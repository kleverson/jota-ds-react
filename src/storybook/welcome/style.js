import { createGooberGetter } from '@meiuca/context-element-react';
import WelcomeStyleType from './style-type.js';
import { namespace } from '../../utils/setup.js';

const css = createGooberGetter(WelcomeStyleType);

export default css`
  &.${namespace}-Welcome {
    position: absolute;
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: space-between;

    background-color: ${({ backgroundColor }) => backgroundColor};
    color: ${({ color }) => color};
    font-family: ${({ fontFamily }) => fontFamily};

    /* transforma a medida rem em uma proporção 16:1  */
    /* de forma que: 1rem == 16px => 1em == 1px */
    font-size: calc(1rem * 0.0625);

    .${namespace}-Welcome__textBox {
      position: relative;

      width: 100%;
      height: 100%;

      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .${namespace}-Welcome__upperTextBox {
      margin-left: 80px;

      h1 {
        font-size: 80em;
        font-weight: 700;
        line-height: 100%;
        margin: 0 46px 32px 0;
      }

      h2 {
        font-size: 32em;
        font-weight: 500;
        line-height: 150%;
        margin: 0;
      }
    }

    .${namespace}-Welcome__bottomTextBox {
      position: absolute;
      bottom: 92px;
      left: 80px;

      caption {
        font-size: 24em;
        font-weight: 500;
        line-height: 150%;

        width: max-content;
        text-align: left;
        margin-bottom: 28px;
      }

      img {
        height: 40px;
        width: 28px;

        margin-left: 18px;
      }
    }
  }

  @media (max-height: 850px) {
    &.${namespace}-Welcome {
      .${namespace}-Welcome__upperTextBox {
        h1 {
          font-size: 48em;
          margin-bottom: 24px;
        }

        h2 {
          font-size: 18em;
        }
      }

      .${namespace}-Welcome__bottomTextBox {
        bottom: 46px;

        caption {
          font-size: 16em;
          margin-bottom: 22px;
        }

        img {
          height: 26px;
          width: 18px;

          margin-left: 10px;
        }
      }
    }
  }
`;
