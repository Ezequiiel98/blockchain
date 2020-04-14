import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Consumer as ConsumerLogin } from '../../../../../../contexts/ContextLogin/ContextLogin';

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <ConsumerLogin>
      {({ successLogin }) => (
        <Route {...rest} render={props => (successLogin ? <Component {...props} /> : <Redirect to="/" />)} />
      )}
    </ConsumerLogin>
  );
}

export default PrivateRoute;
