import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './components/home';
import { OldHome } from './old';
import { PropertyView } from './components/propertyView';
import { Footer } from './components/common';

export const Routing = () => (
  <>
    <Router>
      <Switch>
        <Route path="/" exact>
          <OldHome />
        </Route>
        <Route path="/search">
          <Home />
        </Route>
        <Route
          path="/property/:propertyId?"
          component={PropertyView}
        />
      </Switch>
    </Router>
    <Footer />
  </>
);
