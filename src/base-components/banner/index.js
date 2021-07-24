import React from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../typography/index.js';

function Banner({
  title,
  headingVariant = 'h2',
  paragraph,
  bgColor,
  highTypography = true,
  image,
  handleClick,
}) {
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
          ${/* onColor ? `${namespace}-Banner--onColor` : '' */ ''}
        `}
        style={{ backgroundColor: bgColor }}
        onClick={_handleClick}
      >
        <div className={`${namespace}-Banner__Image`}>
          <picture>
            <source media="(max-width: 560px)" srcSet={image.small} />
            <source media="(min-width: 1024px)" srcSet={image.large} />
            <img src={image.default} alt="Image of Banner" />
          </picture>
        </div>

        <div className={`${namespace}-Banner__Content`}>
          <div className={`${namespace}-Banner__Heading`}>
            <Typography
              component="heading"
              variant={headingVariant}
              size="medium"
              onColor={highTypography}
            >
              {title}
            </Typography>
          </div>

          <div className={`${namespace}-Banner__Paragraph`}>
            <Typography component="paragraph" size="small" onColor={highTypography}>
              {paragraph}
            </Typography>
          </div>
        </div>
      </div>
    </ContextElement>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  headingVariant: PropTypes.string,
  paragraph: PropTypes.string,
  bgColor: PropTypes.string,
  highTypography: PropTypes.bool,
  handleClick: PropTypes.func,
  image: PropTypes.shape({
    default: PropTypes.string,
    large: PropTypes.string,
    small: PropTypes.string,
  }).isRequired,
};

export default Banner;
