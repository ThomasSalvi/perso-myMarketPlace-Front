import React, { useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const NewObject = ({ objectInput, newObjects, submitNewObject, redirectUrl, isLogged }) => {
  if (!isLogged) {
    return <Redirect to='/login' />
  }
  if (redirectUrl) {
    return <Redirect to='/' />;
  }
  const handleChange = (event) => {
    if (event.target.name !== 'picture') {
      objectInput(event.target.name, event.target.value);
    }
    else {
      objectInput(event.target.name, event.target.files[0]);
    }
  };
  const handleSubmit = () => {
    submitNewObject();
  };
  return (
    <div className="newObject">
      <h1 className="newObject__title">Vendre un nouvel object</h1>
      <div className="newObject__form">
        <p className="newObject__subtitle">Titre</p>
        <input type="text" name="title" placeholder="titre" onChange={handleChange} value={newObjects} />
        <p className="newObject__subtitle">Description</p>
        <input type="text" name="desc" placeholder="description" onChange={handleChange} />
        <p className="newObject__subtitle">Prix</p>
        <input type="text" name="price" placeholder="prix (€)" onChange={handleChange} />
        <p className="newObject__subtitle">image</p>
        <input type="file" name="picture" onChange={handleChange} />
        <button className="newObject__button" onClick={handleSubmit}>Vendre</button>
      </div>
    </div>
  )
}
NewObject.propTypes = {
};

export default NewObject;
