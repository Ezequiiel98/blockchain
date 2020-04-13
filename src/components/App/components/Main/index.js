import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from '../../../../screens/LoginScreen';
import Principal from '../../../../screens/Principal';
import PantallaValidacion from '../../../../screens/PantallaValidacion';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={LoginScreen} />
      <Route path="/game" component={Principal} />
      <Route path="/validation" component={PantallaValidacion} />
    </Switch>
  );
}

export default Main;
