import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Object = ({ title, price, imageUrl, objectId }) => {
  const toto = 'toto';
  return (
      <NavLink exact to={`/object/${objectId}`} >
        <div className="object">
          <img src={imageUrl} alt=""/>
          <div className="object__description">
            <p className="object__title">{title}</p>
            <p className="object__price">{`${price}€`}</p>
          </div>
        </div>
      </NavLink>
  );
};

export default Object;
