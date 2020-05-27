import { combineReducers } from 'redux';
import search from './search';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

export default persistReducer(persistConfig, combineReducers({ search }));