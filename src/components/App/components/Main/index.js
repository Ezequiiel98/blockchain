import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import LoginScreen from '../../../../screens/LoginScreen';
import Principal from '../../../../screens/Principal';
import PantallaValidacion from '../../../../screens/PantallaValidacion';

import PrivateRouter from './components/PrivateRoute';

function Main() {
  return (
    <Switch>
      <Route exact path="/" component={LoginScreen} />

      <PrivateRouter path="/game" component={Principal} />
      <PrivateRouter path="/validation" component={PantallaValidacion} />
    </Switch>
  );
}

export default Main;
