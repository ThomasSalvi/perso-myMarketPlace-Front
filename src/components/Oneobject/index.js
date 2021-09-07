import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Oneobject = ({ oneObject }) => {
  console.log(oneObject)
  return(
  <div className="oneObject">
    <img className="oneObject__image" src={oneObject.imageUrl} alt=""/>
    <h2 className="oneObject__title">{oneObject.title}</h2>
    <p className="oneObject__price">{`${oneObject.price} €`}</p>
    <p className="oneObject__desc">{oneObject.description}</p>
  </div>
  )
  };

Oneobject.propTypes = {

};

export default Oneobject;
