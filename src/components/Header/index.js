import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => {
  return (
    <div className="header">
      <a href="#" className="header__title">MyMarketPlace</a>
      <ul>
        <li><NavLink exact to='/'>Objets à vendre</NavLink></li>
        <li><NavLink exact to='/'>Vendre un objet</NavLink></li>
        <li><NavLink exact to='/'>Connection</NavLink></li>
      </ul>

    </div>
  )
}

export default Header;
