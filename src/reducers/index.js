import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import fetchReducer from './fetch';

const reducer = combineReducers({
  bookList: fetchReducer,
  filter: filter,
  books: books,
});

export default reducer;
