import React from 'react';
import ReactDOM from 'react-dom';
import Connector from './containers/connector';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';

import configStore from './store/configure-store';

const store = configStore();
syncReduxAndRouter(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Connector}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
