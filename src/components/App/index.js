// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Banner from 'src/components/Banner';
import Objectlist from 'src/containers/Objectlist';
import Oneobject from 'src/containers/Oneobject';

// == Import
import './styles.css';

// == Composant
const App = () => (
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
      </Route>
      <Route exact path="/object/:slug">
        <Header />
        <Oneobject />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
