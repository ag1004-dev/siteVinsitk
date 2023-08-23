import React from "react";
import { Switch, Route } from 'react-router-dom';
import Test from './components/test';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        Página Inicial
      </Route>

      <Route exact path="/config">
        Configurações
      </Route>

      <Route exact path="/test">
      <Test /> 



      </Route>

    </Switch>




    
  );
}