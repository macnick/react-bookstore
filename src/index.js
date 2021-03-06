import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers/index';
import { randomId, randomCat } from './randomGen/random';
import './styles/reset.css';
import './styles/main.css';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const initialState = {
  books: [
    {
      bookId: randomId(),
      category: categories[randomCat()],
      title: 'Steve Jobs by Walter Isaacson',
    },
    {
      bookId: randomId(),
      category: categories[randomCat()],
      title: "You don't know JavaScript",
    },
    {
      bookId: randomId(),
      category: categories[randomCat()],
      title: 'Eloquent JavaScript',
    },
    {
      bookId: randomId(),
      category: categories[randomCat()],
      title: 'Pride and Prejudice',
    },
  ],
  filter: 'All',
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
