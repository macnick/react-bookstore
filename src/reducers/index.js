import { combineReducers } from 'redux';
import books from './books';
import filter from './filter';
import fetchReducer from './fetch';

// const reducer = combineReducers({
//   fetch: fetchReducer,
//   books: books,
//   filter: filter,
// });
const reducer = combineReducers({ bookList: fetchReducer, filter: filter });

export default reducer;
