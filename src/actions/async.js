import { getBooks, create, remove } from '../api-services/services';

const CREATE_SUCCESS = 'CREATE_SUCCESS';
const CREATE_FAILURE = 'CREATE_FAILURE';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
const REMOVE_FAILURE = 'REMOVE_FAILURE';

// eslint-disable-next-line no-unused-vars
const createSuccess = (book) => ({
  type: CREATE_SUCCESS,
  book,
});

const createFailure = (error) => ({
  type: CREATE_FAILURE,
  payload: error,
});

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = (data) => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

// eslint-disable-next-line no-unused-vars
const removeSuccess = () => ({
  type: REMOVE_SUCCESS,
});

const removeFailure = (error) => ({
  type: REMOVE_FAILURE,
  payload: error,
});

// action creator
const fetchBooks = () => (dispatch) => {
  dispatch(fetchRequest());
  getBooks()
    .then((response) => {
      dispatch(fetchSuccess(response.data));
    })
    .catch((error) => {
      dispatch(fetchFailure(error.message));
    });
};

const createBook = (data) => (dispatch) => {
  create(data)
    .then(() => {
      dispatch(fetchBooks());
    })
    .catch((error) => {
      dispatch(createFailure(error.message));
    });
};

const removeBook = (book) => (dispatch) => {
  remove(book.id)
    .then(() => {
      dispatch(fetchBooks());
    })
    .catch((error) => {
      dispatch(removeFailure(error.message));
    });
};

export { fetchBooks, removeBook, createBook };
