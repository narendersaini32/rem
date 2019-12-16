import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/home';
import { OldHome } from './old';

export const Routing = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <OldHome />
      </Route>
      <Route path="/search" exact>
        <Home />
      </Route>
    </Switch>
  </Router>
);
