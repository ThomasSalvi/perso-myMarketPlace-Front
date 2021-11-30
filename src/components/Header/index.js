import React, { useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ isLogged, toggleMenu, visibleSubmenu, getAllPosts, userName, logOut, redirectUrl }) => {
  const handleClick = () => {
    toggleMenu();
  };
  const handleLogOut = () => {
    logOut();
  };
  useEffect(getAllPosts, []);
  return (
    <div className="header">
      <a href="#" className="header__title">MyMarketPlace</a>
      <ul className="header__nav">
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/'>Objets à vendre</NavLink></li>
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/vendre'>Vendre un objet</NavLink></li>
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/login'>{isLogged ? '' : 'connection'}</NavLink></li>
      </ul>
      <div>
        <p onClick={handleClick} className="header__back"> {isLogged == false  ? '' : userName}</p>
        {visibleSubmenu && (
        <ul className="header__submenu" onMouseLeave={handleClick}>
          <li className="header__submenu__item"><NavLink exact to='/profil'>
            Mon Profil
          </NavLink></li>
          <li className="header__submenu__item" onClick={handleLogOut} >Me déconnecter</li>
        </ul>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};

export default Header;
