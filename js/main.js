import React from 'react';
import {Provider} from 'react-redux';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import 'styles/main.scss';

import Routes from './routes';
import configureStore from './store';

export const store = configureStore();

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/** Initialize app */
render(
  <Provider store={store}>
    <Routes />
  </Provider>, document.querySelector('.app')
);
