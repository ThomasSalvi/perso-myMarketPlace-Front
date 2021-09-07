import React from 'react';
import imgTest from 'src/assets/images/banner.jpg';
import './style.scss';

const Object = ({ title, price, imageUrl }) => {
  const toto = 'toto';
  return (
      <a href="#">
        <div className="object">
          <img src={imageUrl} alt=""/>
          <div className="object__description">
            <p className="object__title">{title}</p>
            <p className="object__price">{`${price}€`}</p>
          </div>
        </div>
      </a>
  );
};

export default Object;
