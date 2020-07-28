import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book_id, title, category }) => {
  return (
    <tr>
      <td>{book_id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.propTypes = {
  book_id: PropTypes.integer.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
