import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store from './reducers/store';
// import { BrowserRouter as Router } from 'react-router-dom';
// import thunk from 'redux-thunk';
import App from './components/App';
// import reducer from './reducers/index';
// import { getBooks } from './api-services/services';
// import fetchBooks from './actions/async';
import './styles/reset.css';
import './styles/main.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
