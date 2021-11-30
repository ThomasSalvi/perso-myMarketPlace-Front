import React, { useEffect} from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Object from 'src/components/Object';
import './style.scss';

const Profil = ({user, userId, deleteObject, toggleProfilSubmit, profilSubmit, editSubmit, userEmail, objects, editProfil, editForm, toggleEditForm, editEmail, editName}) => {
  const handleClick = () => {
    toggleEditForm();
  };
  const handleSubmit = () => {
    editSubmit();
  };
  const handleChange = (event) => {
    editProfil(event.target.name, event.target.value);
  };
    if (profilSubmit == true) {
      toggleProfilSubmit();
    return <Redirect to='/' />;
  }
  const handleDelete = (event) => {
    deleteObject(event.target.value);
  };
  return (
    <div className="profil">
      {editForm && <div className="profil__edit">
          <p className="profil__edit-close" onClick={handleClick}>X</p>
          <div>
            <label htmlFor="">Nom</label>
            <input type="text" value = {editName} name='nom' onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" value={editEmail} name='email' onChange={handleChange}/>
          </div>
          <button className="profil__delete__button profil__delete__button-edit" onClick={handleSubmit}>Modifier</button>
        </div>}
      <p className="profil__title">Bienvenue {user}</p>
      <div className="profil__info">
        <p><span className="profil__span">Id:</span> {userId}</p>
        <p><span className="profil__span">Nom: </span>{user}</p>
        <p><span className="profil__span">Email:</span> {userEmail}</p>
        <button className="profil__delete__button profil__delete__button-edit" onClick={handleClick}>Modifier</button>
      </div>
      <div className="profil__object">
      {objects.map((objects) => { 
        return (<div className="profil__object__wrapper">
          <Object className="" title={objects.title} price={objects.price} imageUrl={objects.imageUrl} objectId={objects._id}/>
          <div className="profil__delete">
            <button className="profil__delete__button profil__delete__button-show">Voir</button>
            <button className="profil__delete__button profil__delete__button-edit">Modifier</button>
            <button className="profil__delete__button profil__delete__button-delete" onClick={handleDelete} value={objects._id}>Effacer</button>
          </div>
        </div>)
      })}
      </div>
    </div>
  )
}

export default Profil;
