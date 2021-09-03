// == Import npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';

// == Import
import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/'>
        <Header />
      </Route>
    </Switch>
  </div>
);

// == Export
export default App;
