import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Icon from '../icon/index.js';

function Avatar({ 
  size = 'small',
  imgUrl = '',
  imgAlt = 'Avatar',
  onColor = false,
  hasNotification = false,
  handleClick
 }){

  const _handleClick = (e) => {
    if(handleClick){
      handleClick(e);
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Avatar`} styles={style}>
      <div className={`
          ${namespace}-Avatar
          ${ `${namespace}-Avatar--${size}`}
          ${ onColor ? `${namespace}-Avatar--onColor` : '' }
        `} onClick={_handleClick}>
        <div className={`${ hasNotification ? `${namespace}-Avatar__notification` : '' }`}></div>
        <div className={`${namespace}-Avatar__image-box`}>
          {
            imgUrl ? 
            <img className={`${namespace}-Avatar__img`} src={imgUrl} alt={imgAlt} /> : 
            <Icon icon="user" size={size}></Icon>
          }
        </div>
      </div>
    </ContextElement>
  )
}

Avatar.propTypes = {
  size: PropTypes.string,
  imgUrl: PropTypes.string,
  imgAlt: PropTypes.string,
  onColor: PropTypes.bool,
  hasNotification: PropTypes.bool,
  handleClick: PropTypes.func
};

export default Avatar;