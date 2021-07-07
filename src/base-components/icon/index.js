import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import '../../mixins/use-icons.js';

function Icon({ icon, size = "small" }) {

  return (
    <ContextElement contextId={`${namespace}-Icon`} styles={style}>
      <i
        className={`${namespace}-Icon ${namespace}-Icon-${icon} ${namespace}-Icon--${size}`}
      ></i>
    </ContextElement>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon;
