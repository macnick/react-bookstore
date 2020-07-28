import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import reducer from './reducers/index';

const randomId = () => {
  return Math.floor(Math.random() * 10);
}

const randomCat = () => {
  return Math.floor(Math.random() * 7);
}
const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const state = [
  {
    book_id: randomId(),
    category: categories[randomCat],
    title: 'Steve Jobs by Walter Isaacson',
  },
  {
    book_id: randomId(),
    category: categories[randomCat],
    title: 'You don\'t know JavaScript',
  },
  {
    book_id: randomId(),
    category: categories[randomCat],
    title: 'Eloquent JavaScript',
  },
  {
    book_id: randomId(),
    category: categories[randomCat],
    title: 'Pride and Prejudice',
  }
]

const store = Redux.createStore(reducer(state));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
