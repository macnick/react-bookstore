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
        },
      ];
    case REMOVE_BOOK:
      return [
        ...state.slice(0, action.bookId),
        ...state.slice(action.bookId + 1),
      ];
    default:
      return state;
  }
};

export default books;
