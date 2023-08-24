import React from "react";
import { Switch, Route } from 'react-router-dom';
import Test from './components/test';
import Config from './pages/config';
import Dashboard from './components/Dashboard';

export default function Routes() {
  return (
    <Switch>
      
      <Route exact path="/">
      <Dashboard />
      </Route>

      <Route exact path="/config">
        <Config />
      </Route>

    
      <Route exact path="/test">
      <Test /> 



      </Route>

    </Switch>




    
  );
}