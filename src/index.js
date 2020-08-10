import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import reducer from './reducers/index';
import { randomId, randomCat } from './randomGen/random';
import { getBooks } from './api-services/services';
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

const initialState = getBooks()
  .then(response => {
    JSON.parse(response.filt)
  })
  .catch(e => {
    console.log(e);
  });
// const initialState = {
//   books: [
//     {
//       bookId: randomId(),
//       category: categories[randomCat()],
//       title: 'Steve Jobs by Walter Isaacson',
//       author: 'Steve J.',
//     },
//     {
//       bookId: randomId(),
//       category: categories[randomCat()],
//       title: "You don't know JavaScript",
//       author: 'Abdusaid A',
//     },
//     {
//       bookId: randomId(),
//       category: categories[randomCat()],
//       title: 'Eloquent JavaScript',
//       author: 'Nick H.',
//     },
//     {
//       bookId: randomId(),
//       category: categories[randomCat()],
//       title: 'Pride and Prejudice',
//       author: 'Jane Austen',
//     },
//   ],
//   filter: 'All',
// };

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
