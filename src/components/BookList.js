import React from 'react';
import connect from 'react-redux';
import BooksForm from './BooksForm';

export default BookList = ({ books }) => (
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
