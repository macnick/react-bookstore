const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const initialState = {
  loading: false,
  books: [],
  error: '',
  filter: 'All',
};

const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        books: action.payload,
        error: '',
        filter: 'All',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        books: [],
        error: action.payload,
        filter: 'All',
      };
    default:
      return state;
  }
};

export default fetchReducer;
