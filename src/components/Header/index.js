import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const Header = ({ isLogged, toggleMenu, visibleSubmenu }) => {
  const handleClick = () => {
    toggleMenu();
  };
  return (
    <div className="header">
      <a href="#" className="header__title">MyMarketPlace</a>
      <ul className="header__nav">
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/'>Objets à vendre</NavLink></li>
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/vendre'>Vendre un objet</NavLink></li>
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/z'>{isLogged ? 'déconnection' : 'connection'}</NavLink></li>
      </ul>
      <div>
        <p onClick={handleClick} className="header__back"> Mon compte</p>
        {visibleSubmenu && (
        <ul className="header__submenu">
          <li className="header__submenu__item">Voir mes objets</li>
          <li className="header__submenu__item">Me déconnecter</li>
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
