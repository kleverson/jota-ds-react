import React, { useRef } from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Link({ label, href, target, disabled, icon, onColor }) {
  const refLink = useRef(null);

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
};

export default Link;
