import React from 'react';
import ReactDOM from 'react-dom';
import Connector from './containers/connector';
import {Provider} from 'react-redux';
import {createHistory} from 'history';
import {Router, Route} from 'react-router';
import {syncReduxAndRouter} from 'redux-simple-router';

import configStore from './store/configure-store';

const store = configStore();
const history = createHistory();
syncReduxAndRouter(history, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Connector}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
