import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import fetchBooks from '../actions/async';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BookList = ({ books, changeFilter, fetchBooks, filter, removeBook }) => {
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <CategoryFilter onFilter={(filter) => changeFilter(filter)} />
      <div>Number of books: {books.length}</div>
      <div className="container">
        {books
          .filter((book) =>
            filter === 'All' ? true : book.category === filter
          )
          .map((book) => (
            <Book book={book} key={book.bookId} removeBook={removeBook} />
          ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    filter: state.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeBook: (book) => dispatch(removeBook(book)),
    changeFilter: (filter) => dispatch(changeFilter(filter)),
    fetchBooks: () => dispatch(fetchBooks()),
  };
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      bookId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  error: PropTypes.string,
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
