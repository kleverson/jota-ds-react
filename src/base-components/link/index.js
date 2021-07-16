import React, { useRef } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Link({ label, href, target, disabled, icon, onColor, handleClick }) {
  const refLink = useRef(null);

  const _handleClick = e => {
    if(handleClick){
      handleClick(e)
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Link`} styles={style}>
      <a
        ref={refLink}
        href={href}
        className={`${namespace}-Link
        ${disabled ? `${namespace}-Link--disabled` : ''}
        ${onColor ? `${namespace}-Link--onColor` : ''}
        ${icon ? `${namespace}-Link--icon` : ''}`}
        target={target}
        onClick={(e) => _handleClick(e)}
      >
        {label}
        {icon ? <Icon icon="arrow-right"></Icon> : null}
      </a>
    </ContextElement>
  );
}

Link.propTypes = {
  label: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  inverse: PropTypes.bool,
  onColor: PropTypes.bool,
  handleClick: PropTypes.func
};

export default Link;
