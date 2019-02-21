import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {LoaderApp} from './bootstrap';
import { configureStore } from './store';

let initialState = {};
const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <LoaderApp/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
