import React, {useState, useEffect} from 'react';
import { ContextElement } from '@meiuca_design/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import Brand from '../brand/index.js';
import ButtonIcon from '../button-icon/index.js';

function HeaderEmpty({
  ghost, 
  logoSource, 
  children,
  toggleMainLinksMenu,
  hasLinks,
  mainMenuIsOpen
}){
  const [_menuIsOpen, setOpenMenu] = useState(false);

  const toggleMainList = () => {
    setOpenMenu(!_menuIsOpen);
    toggleMainLinksMenu();
  }

  useEffect(() => {
    setOpenMenu(mainMenuIsOpen);
  }, [mainMenuIsOpen])

  return (
    <ContextElement contextId={`${namespace}-HeaderEmpty`} styles={style}>
      <div
        className={`
          ${namespace}-HeaderEmpty
          ${ghost ? `${namespace}-HeaderEmpty--ghost` : ''}
        `}
      >
        {
          hasLinks ? 
          <div className={`${namespace}-HeaderEmpty_ButtonContainer`}><ButtonIcon icon={_menuIsOpen ? "close" : "menu"} size="medium" handleClick={toggleMainList}></ButtonIcon></div>:
          null
        }
        <Brand alt="Logo" type="logotype" size="medium" externalUrl={logoSource}/>
        {children}
      </div>
    </ContextElement>
  )
}

HeaderEmpty.propTypes = {
  ghost: PropTypes.bool,
  logo: PropTypes.string
};

export default HeaderEmpty;