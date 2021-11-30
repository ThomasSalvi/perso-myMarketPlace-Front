import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import './style.scss';

const Oneobject = ({ oneObject, userId, deleteObject, redirectUrl, findOwner, owner }) => {
  const handleClick = (event) => {
    deleteObject(oneObject._id);
  };
  if (redirectUrl) {
    return <Redirect to='/' />;
  }
  useEffect(() => {
    findOwner(oneObject.userId);
  }, [redirectUrl]);
  return (
    <div className="oneObject">
      <div className="oneObject__image__wrapper">
        <img className="oneObject__image" src={oneObject.imageUrl} alt=""/>
        <p className="oneObject__image__owner">Vendeur: {owner}</p>
      </div>
      <h2 className="oneObject__title">{oneObject.title}</h2>
      <p className="oneObject__price">{`${oneObject.price} €`}</p>
      <p className="oneObject__desc"><span>Description</span> {oneObject.description}</p>
      {userId == oneObject.userId && <button className="oneObject__delete" onClick={handleClick}>Effacer</button>}
    </div>
  );
};

Oneobject.propTypes = {

};

export default Oneobject;
