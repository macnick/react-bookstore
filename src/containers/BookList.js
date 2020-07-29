import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

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
      {books.map(({ bookId, title, category }) => (
        <Book id={bookId} title={title} category={category} key={bookId} />
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  books: state.books,
});

// const mapDispatchToProps =(dispatch) => {
//     return {
//         addBook: (book) => dispatch(addBook(book))
//     }
// }

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, null)(BookList);
