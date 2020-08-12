import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import books from './books';
import filter from './filter';
import fetchReducer from './fetch';

const reducer = combineReducers({ fetchReducer, books, filter });
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
