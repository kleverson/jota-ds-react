import React, { useState, useEffect, useRef } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Typography from '../typography/index.js';
import Icon from '../icon/index.js';

function Accordion({
  label,
  opened = false,
  onColor = false,
  labelHeadingVariant = 'h2',
  ariaControls = 'accordionControl',
  id = 'accordionId',
  handleOpened,
  children
}){
  const [isOpened, setIsOpened] = useState(opened);
  const [keyboardFocus, setKeyboardFocus ] = useState(false);
  const refButton = useRef();

  useEffect(() => {
    setIsOpened(opened);
  }, [opened]);

  function _handleToggleContent() {
    if(typeof handleOpened === "function"){
      handleOpened(!isOpened);
    }
    setIsOpened(!isOpened);
  }

  function _handleFocus(e) {
    if (e.code === 'Tab') {
      setKeyboardFocus(true);
      refButton.current.focus();
    }
  }

  function _handleBlur() {
    setKeyboardFocus(false);
  }

  return (
    <ContextElement contextId={`${namespace}-Accordion`} styles={style}>
      <div
        className={`
          ${namespace}-Accordion
          ${isOpened ? `${namespace}-Accordion--opened` : ''}
          ${onColor ? `${namespace}-Accordion--onColor` : ''}
          ${keyboardFocus ? `${namespace}-Accordion--focus` : ''}
        `}
        onKeyUp={_handleFocus}
      >
        <button
          className={`${namespace}-Accordion__Label targetFocused`}
          aria-expanded={isOpened}
          aria-controls={ariaControls}
          id={id}
          onClick={_handleToggleContent}
          onBlur={_handleBlur}
          ref={refButton}
        >
          <Typography
            component="heading"
            variant={labelHeadingVariant}
            size="x-small"
          >
            {label}
          </Typography>
          <Icon size="small" icon="plus"></Icon>
        </button>

        <div
          className={`${namespace}-Accordion__Content`}
          role="region"
          area-labelledby={id}
          id={ariaControls}
        >
           <Typography
              component="paragraph"
              size="small"
              onColor={onColor}
            >
              {children}
            </Typography>

        </div>
      </div>
    </ContextElement>
  )
}

Accordion.propTypes = {
  label: PropTypes.string,
  opened: PropTypes.bool,
  onColor: PropTypes.bool,
  labelHeadingVariant: PropTypes.string,
  ariaControls: PropTypes.string,
  id: PropTypes.string,
  handleOpened: PropTypes.func,
  children: PropTypes.any
};

export default Accordion;