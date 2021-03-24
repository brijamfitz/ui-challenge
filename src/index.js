import React, { Fragment } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import { StoreProvider } from './store/StoreContext';
import { initialState, appReducer } from './store/appReducer';

/****** Pages *****/
import SignIn from './pages/SignIn.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import NoRouteMatch from './pages/NoRouteMatch.jsx';

render(
  <StoreProvider initialState={initialState} reducer={appReducer}>
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route exact={true} path="/" component={SignIn} />
          <Route exact={true} path="/resetPassword" component={ResetPassword} />
          <Route exact={true} path="*" component={NoRouteMatch} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  </StoreProvider>, document.getElementById('root')
);
