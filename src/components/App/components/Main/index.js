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
      <PrivateRouter exact path="/game" component={Principal} />
      <PrivateRouter exact path="/validation" component={PantallaValidacion} />
      <Route path="/" render={() => <Redirect to="/" />} />
    </Switch>
  );
}

export default Main;
