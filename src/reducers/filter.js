import { CHANGE_FILTER } from '../actions/index';

const initialState = {
  loading: false,
  books: [],
  error: '',
  filter: 'All',
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.category;
    default:
      return state;
  }
};

export default filter;
