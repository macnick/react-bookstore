import { combineReducers } from 'redux';
import filter from './filter';
import fetchReducer from './fetch';

const reducer = combineReducers({
  bookList: fetchReducer,
  filter,
});

export default reducer;
