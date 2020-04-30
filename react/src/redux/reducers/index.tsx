import { combineReducers } from 'redux';
import search from './search';
import favorite from './favorite';

export default combineReducers({ search, favorite });