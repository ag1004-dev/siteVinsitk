import React from "react";
import { Switch, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        Página Inicial
      </Route>

      <Route exact path="/config">
        Configurações
      </Route>
    </Switch>
  );
}