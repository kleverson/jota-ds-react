import React from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Cardbase from '../cardbase/index.js';

function Cardimage({ onColor, handleClick, image, children }) {
  return (
    <ContextElement contextId={`${namespace}-Cardimage`} styles={style}>
      <div
        className={`
          ${namespace}-Cardimage
        `}
      >
        <Cardbase onColor={onColor} noPadding handleClick={handleClick}>
          <div className="slotted-image">
            <img src={image} />
          </div>
          <div className="slotted-content">{children}</div>
        </Cardbase>
      </div>
    </ContextElement>
  );
}

Cardimage.propTypes = {
  onColor: PropTypes.bool,
  handleClick: PropTypes.func,
  image: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Cardimage;
