const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          bookId: action.bookId,
          title: action.title,
          category: action.category,
        },
      ];
    case REMOVE_BOOK:
      return [...state.slice(0, action.idx), ...state.slice(action.idx + 1)];
    default:
      return state;
  }
};

export default books;
