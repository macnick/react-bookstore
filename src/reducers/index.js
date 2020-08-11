import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import fetchReducer from './fetch';

const reducer = combineReducers({ fetchReducer, books, filter });

export default reducer;
