import React from 'react';
import connect from 'react-redux';
import PropTypes from 'prop-types';
import BooksForm from './BooksForm';
import Book from './Book';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => {
        <Book book={book} />;
      })}
    </tbody>
  </table>
);

BookList.PropTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default BookList;
