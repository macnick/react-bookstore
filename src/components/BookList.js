import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
      {books.map(book => (
        <Book book={book} key={book.bookId} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state,
});

// const mapDispatchToProps =(dispatch) => {
//     return {
//         addBook: (book) => dispatch(addBook(book))
//     }
// }

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(BookList);
