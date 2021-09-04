import React from 'react';
import bannerImg from 'src/assets/images/banner.jpg';
import './style.scss';

const Banner = () => {
  const toto = 'toto';
  return (
    <div className="banner">
      <img className="banner__image" src={bannerImg} alt="champ de fleurs" />
      <h1 className="banner__title">Venez vendre vos objets</h1>
    </div>
  )
};

export default Banner;

