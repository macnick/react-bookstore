import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import { getBooks } from '../api-services/services';
import fetchBooks from '../actions/async';

const BookList = ({ books, removeBook, filter, changeFilter }) => {
  const [booksList, setBooks] = useState([]);
  booksList.push(books);

  useEffect(() => {
    fetchBooks();
    // retrieveBooks();
  }, []);

  const retrieveBooks = () => {
    getBooks()
      .then((response) => {
        setBooks(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // const refreshList = () => {
  //   retrieveBooks();
  // };

  return (
    <div>
      <CategoryFilter onFilter={(filter) => changeFilter(filter)} />
      <div className="container">
        {booksList
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

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
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
      author: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
