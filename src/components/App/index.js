// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Banner from 'src/components/Banner';
import Objectlist from 'src/containers/Objectlist';
import Oneobject from 'src/containers/Oneobject';
import Login from 'src/containers/Login';
import NewObject from 'src/containers/NewObject';
import Profil from 'src/containers/Profil';

// == Import
import './styles.css';

// == Composant
const App = ({ isLogged }) => (
  <div className="app">
    <Switch>
      <Route exact path='/'>
        <Header />
        <Banner />
        <Objectlist />
      </Route>
      <Route exact path='/vendre'>
        <Header />
        <Banner />
        <NewObject />
      </Route>
      <Route exact path="/object/:slug">
        <Header />
        <Oneobject />
      </Route>
      <Route exact path="/login">
        <Header />
        <Login />
      </Route>
      <Route exact path="/profil">
        <Header />
        <Profil />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
