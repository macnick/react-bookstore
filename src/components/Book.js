import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <div className="line">
    <div>
      <div id="category">{book.category}</div>
      <div id="title">{book.title}</div>
      <div id="author">{book.author}</div>
    </div>
    <div>
      <button
        type="button"
        onClick={() => {
          removeBook(book);
        }}
      >
        Remove Book
      </button>
    </div>
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
