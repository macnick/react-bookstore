const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const randomId = () => Math.floor(Math.random() * 1000);

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          bookId: randomId(),
          title: action.book.title,
          category: action.book.category,
          author: action.book.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.bookId !== action.bookId);
    default:
      return state;
  }
};

export default books;
