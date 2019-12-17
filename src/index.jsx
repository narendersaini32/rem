import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/home';
import { OldHome } from './old';
import { PropertyView } from './components/propertyView';

export const Routing = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <OldHome />
      </Route>
      <Route path="/search" exact>
        <Home />
      </Route>
      <Route path="/property/:propertyId?" exact>
        <PropertyView />
      </Route>
    </Switch>
  </Router>
);
