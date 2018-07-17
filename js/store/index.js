import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducers';

const middleware = process.env.NODE_ENV === 'production' ? [] : [logger()];

const initialStore = {
  username: '',
  messages: []
};

export default function configureStore() {
  return createStore(reducer, initialStore, composeWithDevTools(
    applyMiddleware(...middleware)
  ));
}
