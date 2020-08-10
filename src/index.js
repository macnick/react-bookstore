import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import reducer from './reducers/index';
import { randomId, randomCat } from './randomGen/random';
import { getBooks } from './api-services/services';
import thunk from 'redux-thunk';
import fetchBooks from './actions/async';
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

// console.log('INITIAL STATE', initialState);
const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store));
store.dispatch(fetchBooks());
// console.log('Store:', store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
