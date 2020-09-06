import React from 'react';
import Repository from '../pages/Repository';
import Dashboard from '../pages/Dashboard';
import { Switch, Route } from 'react-router-dom';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={Dashboard} />
    <Route path="/" component={Repository} />
  </Switch>
);
