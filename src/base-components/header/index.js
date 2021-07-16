import React, {useState} from 'react';
import { ContextElement } from '@meiuca/context-element-react';
import PropTypes from 'prop-types';
import style from './style.js';
import { namespace } from '../../utils/setup.js';
import HeaderEmpty from '../header-empty/index.js';
import OverflowMenu from '../overflow-menu/index.js';
import Avatar from '../avatar/index.js';
import Typography from '../typography/index.js';
import Link from '../link/index.js';


function Header({
  ghost = false,
  isLoggedIn = false,
  logoSource,
  linkList,
  menuList,
  avatar,
  handleUserClick
}){
  const [_mainMenuIsOpen, toggleMainMenu] = useState(false);

  const _handleUserClick = (e) => {
    if(handleUserClick){
      handleUserClick(e);
    }
  }

  const _toggleMainLinksMenu = () => {
    toggleMainMenu(!_mainMenuIsOpen);
  }

  return (
    <ContextElement contextId={`${namespace}-Header`} styles={style}>
      <header className={`${namespace}-Header`}>
        <HeaderEmpty ghost={ghost} logoSource={logoSource} toggleMainLinksMenu={_toggleMainLinksMenu} mainMenuIsOpen={_mainMenuIsOpen} hasLinks={linkList ? linkList.length : false}>
          <nav className={`${namespace}-Header__NavLinks ${_mainMenuIsOpen ? `${namespace}-Header__NavLinks--open`: ''}`}>
            <ul className={`${namespace}-Header__LinksList`}>
              {
                linkList ? linkList.map((link, index) => (
                  <li className={`
                    ${namespace}-Header__LinksItem 
                    ${link.currentActive ? `${namespace}-Header__LinksItem--active`:''}`
                  } key={index}>
                    <Link {...link} key={index}/>
                  </li>
                )) : null
              }
            </ul>
          </nav>
          <nav className={`${namespace}-Header__NavMenu`}>
            {
              isLoggedIn ? (
                <div className={`${namespace}-Header__UserInfo`} onClick={_handleUserClick}>
                  <Avatar {...avatar} size="medium"/>
                  <Typography component="caption">Olá, {avatar.name}!</Typography>  
                </div>
              ): null
            }
            <OverflowMenu menuList={menuList} toggleMenu={() => toggleMainMenu(false)}/>
          </nav>
        </HeaderEmpty>
      </header>
    </ContextElement>
  )
}

Header.propTypes = {
  ghost: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  logoSource: PropTypes.string,
  avatar: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
      imgAlt: PropTypes.string.isRequired,
      hasNotification: PropTypes.bool
  }),
  menuList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      tagLabel: PropTypes.string,
      onClick: PropTypes.func,
    }),
  ),
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      currentActive: PropTypes.bool
    }),
  )
};

export default Header;