import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, removeBook, filter, changeFilter }) => (
  <div>
    {console.log(filter)}
    <CategoryFilter
      onFilter={(filter) => {
        changeFilter(filter);
        console.log(changeFilter(filter));
      }}
    />
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Hello : {}</th>
        </tr>
      </thead>
      <tbody>
        {books
          .filter((book) => book.category === 'History')
          .map((book) => (
            <Book book={book} key={book.bookId} removeBook={removeBook} />
          ))}
        {/* {books.map(book => (
          <Book
            book={book}
            key={book.bookId}
            removeBook={removeBook}
          />
        ))} */}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
