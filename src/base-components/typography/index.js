import React from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function Typography({ variant, size, onColor, component, children }) {
  let template;

  const createHeading = (variant, size, onColor, type = 'Heading') => {
    const patternSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'display'].includes(size)
      ? size
      : 'medium';
    const patternVariant = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'h1';
    const tagName = patternVariant;

    switch (tagName) {
      case 'h1':
        return (
          <h1
            part="heading"
            className={`${namespace}-Typography 
            ${type} ${type}--${patternSize} 
            ${onColor ? `${namespace}-Typography--onColor` : ''}`}
          >
            {children}
          </h1>
        );
      case 'h2':
        return (
          <h2
            part="heading"
            className={`${namespace}-Typography 
            ${type} ${type}--${patternSize} 
            ${onColor ? `${namespace}-Typography--onColor` : ''}`}
          >
            {children}
          </h2>
        );
      case 'h3':
        return (
          <h3
            part="heading"
            className={`${namespace}-Typography 
            ${type} ${type}--${patternSize} 
            ${onColor ? `${namespace}-Typography--onColor` : ''}`}
          >
            {children}
          </h3>
        );
      case 'h4':
        return (
          <h4
            part="heading"
            className={`${namespace}-Typography 
            ${type} ${type}--${patternSize} 
            ${onColor ? `${namespace}-Typography--onColor` : ''}`}
          >
            {children}
          </h4>
        );
      case 'h5':
        return (
          <h5
            part="heading"
            className={`${namespace}-Typography 
            ${type} ${type}--${patternSize} 
            ${onColor ? `${namespace}-Typography--onColor` : ''}`}
          >
            {children}
          </h5>
        );
      case 'h6':
        return (
          <h6
            part="heading"
            className={`${namespace}-Typography 
            ${type} ${type}--${patternSize} 
            ${onColor ? `${namespace}-Typography--onColor` : ''}`}
          >
            {children}
          </h6>
        );
      default:
        return null;
    }
  };

  const createSubtitle = (variant, size, onColor = false) => {
    const patternSize = ['small', 'large'].includes(size) ? size : 'large';
    const patternVariant = ['h2', 'h3', 'h4', 'h5', 'h6'].includes(variant) ? variant : 'h2';
    return createHeading(patternVariant, patternSize, onColor, 'Subtitle');
  };

  const createParagraph = (size, onColor = false) => {
    const patternSize = ['small', 'large'].includes(size) ? size : 'large';

    return (
      <p
        part="body"
        className={`${namespace}-Typography 
      Paragraph Paragraph--${patternSize} 
      ${onColor ? `${namespace}-Typography--onColor` : ''}`}
      >
        {children}
      </p>
    );
  };

  const createCaption = (onColor = false) => (
    <span
      className={`${namespace}-Typography 
        Caption ${onColor ? `${namespace}-Typography--onColor` : ''}`}
    >
      {children}
    </span>
  );

  switch (component) {
    case 'heading':
      template = createHeading(variant, size, onColor);
      break;
    case 'subtitle':
      template = createSubtitle(variant, size, onColor);
      break;
    case 'caption':
      template = createCaption(onColor);
      break;
    case 'paragraph':
      template = createParagraph(size, onColor);
      break;
    default:
      template = createHeading(variant, size, onColor);
  }

  return (
    <ContextElement contextId={`${namespace}-Typography`} styles={style}>
      {template}
    </ContextElement>
  );
}

Typography.propTypes = {
  variant: PropTypes.string,
  size: PropTypes.string,
  onColor: PropTypes.bool,
  component: PropTypes.string,
};

export default Typography;
