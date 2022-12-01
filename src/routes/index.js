import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from '../screens/homepage';

const Routing = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routing;
