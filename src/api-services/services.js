import http from '../http-common';

const getBooks = () => http.get('/books');

const getBook = id => http.get(`/books/${id}`);

const create = data => http.post('/books', data);

const remove = id => http.delete(`/books/${id}`);

export {
  getBooks,
  getBook,
  create,
  remove,
};
