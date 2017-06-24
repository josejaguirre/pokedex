import React from 'react';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import PanelLayout from './containers/panel-layout';

import app from './reducers';

const store = createStore(
  app,
  applyMiddleware(
    promise(),
    thunkMiddleware,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={PanelLayout} />
        <Route exact path="/pokemon/:id" component={PanelLayout} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
