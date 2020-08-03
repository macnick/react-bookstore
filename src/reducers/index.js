import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';

const reducer = combineReducers({ books, filter });

export default reducer;
