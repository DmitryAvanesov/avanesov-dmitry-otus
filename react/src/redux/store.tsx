import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface IRootState {
  search: {
    added: Array<string>,
    query: string,
    errorMessage: string
  },
  favorite: {
    selected: string
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, composeEnhancers());