import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  book,
  removeBook,
}) => (
  <tr>
    <td>{book.bookId}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={() => removeBook(book)}>Remove Book</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.shape({
    bookId: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
