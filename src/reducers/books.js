const books = ({ state = [], action }) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          book_id: action.book_id,
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
