import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function TagCategory({ label = 'Tag category', onColor = false, icon = 'shapes' }) {
  return (
    <ContextElement contextId={`${namespace}-TagCategory`} styles={style}>
      <button
        className={`
         ${namespace}-TagCategory
         ${onColor ? `${namespace}-TagCategory--onColor` : ''}
      `}
      >
        <div className={`${namespace}-TagCategory__icon`}>
          <Icon icon={icon} size="small"></Icon>
        </div>
        <div className={`${namespace}-TagCategory__label`}>{label}</div>
      </button>
    </ContextElement>
  );
}

TagCategory.propTypes = {
  label: PropTypes.string,
  onColor: PropTypes.bool,
  icon: PropTypes.string,
};

export default TagCategory;
