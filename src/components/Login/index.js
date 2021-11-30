import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';
import { login } from '../../actions/user';

const Login = ({ panel, changePanel, isLogged, login, newUser, email, password, newEmail, newPassword, prenom, connectInputChange }) => {
  if (isLogged) {
    return <Redirect to='/' />;
  }
  const handleclick = (event) => {
    changePanel(event.target.value);
  };
  const submit = () => {
    login();
  };
  const submitNew = (event) => {
    event.preventDefault();
    newUser();
  };
  const handleChange = (event) => {
    connectInputChange(event.target.name, event.target.value);
  };
  return (
    <div className="login">
      <div className="login__header">
        <ul>
          <li value={1} onClick={handleclick} className={panel === 1 ? 'login__active' : undefined}>Se connecter</li>
          <li value={2} onClick={handleclick} className={panel === 2 ? 'login__active' : undefined}>Créer un compte</li>
        </ul>
      </div>
      <div className="login__wrapper">
        {panel == 1 && (
        <div className="login__wrapper-tab1">
          <div className="connection">
            <h1 className="connection__title">Connection</h1>
            <p className="connection__email">Email</p>
            <input type="text" name="email" placeholder="email" value={email} onChange={handleChange}/>
            <p className="connection__email">Password</p>
            <input type="password" name="password" placeholder="password" value={password} onChange={handleChange}/>
            <button className="connection__button" onClick={submit}>Connection</button>
          </div>
        </div>
        )}
        {panel == 2 &&
          <div className="login__wrapper-tab2">
            <div className="connection">
            <h1 className="connection__title">Créer un compte</h1>
            <p className="connection__email">Prénom</p>
            <input type="text" name="prenom" placeholder="prénom" value={prenom} onChange={handleChange}/>
            <p className="connection__email">Email</p>
            <input type="text" name="newEmail" placeholder="email" value={newEmail} onChange={handleChange}/>
            <p className="connection__email">Password</p>
            <input type="text" name="newPassword" placeholder="password" value={newPassword} onChange={handleChange}/>
            <button className="connection__button" onClick={submitNew}>S'enregistrer</button>
          </div>
          </div>
        }
      </div>
    </div>
  );
};

Login.propTypes = {
};

export default Login;
