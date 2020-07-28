const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = (book) => {
  return {
    type: CREATE_BOOK,
    book,
  };
};

const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    book,
  };
};
