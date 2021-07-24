import React, { useEffect, useState } from 'react';
import { ContextElement } from '@jota-ds/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';

function TabGroup({
  onColor = false,
  ariaLabel = '',
  children,
  handleTabClick
}){

  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index) => {
    setActiveTab(index);

    if(handleTabClick){
      handleTabClick({currentTab: index});
    }
  }

  return (
    <ContextElement contextId={`${namespace}-TabGroup`} styles={style}>
      <div
        className={`
          ${namespace}-Tab-group
          ${onColor ? `${namespace}-Tab-group--onColor` : ''}
        `}
      >
        <div
          className={`${namespace}-Tab-group__List`}
          role="tablist"
          aria-label={ariaLabel}
        >
          {
            children.map(({props}, index) =>
              <button
                className={`
                  ${namespace}-Tab-group__Label
                  ${index === activeTab ? `${namespace}-Tab-group__Label--actived` : ''}
                `}
                role="tab"
                aria-selected="false"
                aria-controls={`panel-${index}`}
                id={`tab-${index}`}
                key={index}
                onClick={() => handleActiveTab(index)}
              >
                <span>{props.label}</span>
              </button>
            )
          }
        </div>
        {
          children.map((tab, index) => {
            if(tab.type.name === 'TabItem') {
              return (
                <div
                  className={`
                    ${namespace}-TabItem
                  `}
                  role="tabpanel"
                  id={`panel-${index}`}
                  tabIndex="0"
                  aria-labelledby={`id-${index}`}
                  key={index}
                  hidden={index !== activeTab}
                >
                  {tab.props.children}
                </div>
              )
            }
          })
        }
      </div>
    </ContextElement>
  )
}

TabGroup.propTypes = {
  children: PropTypes.any
};

export default TabGroup;