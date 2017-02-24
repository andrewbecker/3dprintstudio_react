import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Shop from './components/shop';
import Store from './components/store';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Shop} />
        <Route path="/store" component={Store} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
