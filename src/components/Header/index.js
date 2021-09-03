import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="header__title">MyMarketPlace</a>
      <ul className="header__nav">
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/'>Objets à vendre</NavLink></li>
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/a'>Vendre un objet</NavLink></li>
        <li className="header__nav__item"><NavLink activeClassName="header__selected" exact to='/z'>Connection</NavLink></li>
      </ul>
      <a className="header__back" href="#"> Retour</a>
    </div>
  )
}

export default Header;
