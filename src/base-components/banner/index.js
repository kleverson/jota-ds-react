import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../typography/index.js';

function Banner({
  title,
  headingVariant = 'h2',
  paragraph,
  bgColor,
  onColor = false,
  children,
  handleClick
}){

  function _handleClick() {
    if (typeof handleClick === 'function') {
      handleClick(true);
    }
  }

  return (
    <ContextElement contextId={`${namespace}-Banner`} styles={style}>
      <div
        className={`
          ${namespace}-Banner
          ${onColor ? `${namespace}-Banner--onColor` : ''}
        `}
        style={{backgroundColor: bgColor}}
        onClick={_handleClick}
      >
        <div className={`${namespace}-Banner__Image`}>
          {children}
          {/* <img src={image} alt={imageAlt} /> */}

        </div>

        <div className={`${namespace}-Banner__Content`}>
          <div className={`${namespace}-Banner__Heading`}>
            <Typography
              component="heading"
              variant={headingVariant}
              size="medium"
              onColor={onColor}
            >
              {title}
            </Typography>
          </div>

          <div className={`${namespace}-Banner__Paragraph`}>
            <Typography
              component="paragraph"
              size="small"
              onColor={onColor}
            >
              {paragraph}
            </Typography>
          </div>
        </div>
      </div>
    </ContextElement>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  headingVariant: PropTypes.string,
  paragraph: PropTypes.string,
  bgColor: PropTypes.string,
  onColor: PropTypes.bool,
  handleClick: PropTypes.func
};

export default Banner;