const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  bookId: book.bookId,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export {
  createBook,
  removeBook,
  changeFilter,
  CHANGE_FILTER,
};
