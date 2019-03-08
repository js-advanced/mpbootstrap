import * as Redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Thunk from 'redux-thunk';
import { workspace } from './workspace/reducers';
import { workflow } from './workflow/reducers';

function createReducer(asyncReducers: any) {
  return Redux.combineReducers({
    workspace,
    workflow,
    ...asyncReducers
  });
}

export async function injectAsyncReducer(store: any, name: any, asyncReducer: any) {
  if (store.asyncReducers[name]) {
    return;
  }
  store.asyncReducers[name] = asyncReducer;
  await store.replaceReducer(createReducer(store.asyncReducers));
}

export function configureStore(initialState: any = {}) {
  const store: any = Redux.createStore(
    createReducer({}),
    composeWithDevTools(Redux.applyMiddleware(Thunk.default))
  );
  store.asyncReducers = {};
  return store;
}
