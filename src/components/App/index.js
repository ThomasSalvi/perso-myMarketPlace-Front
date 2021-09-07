// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Banner from 'src/components/Banner';
import Objectlist from 'src/containers/Objectlist';

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
    </Switch>
  </div>
);

// == Export
export default App;
