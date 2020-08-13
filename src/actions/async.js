import { getBooks, remove } from '../api-services/services';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';
const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
const REMOVE_FAILURE = 'REMOVE_FAILURE';
const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = data => ({
  type: FETCH_SUCCESS,
  payload: data,
});

const fetchFailure = error => ({
  type: FETCH_FAILURE,
  payload: error,
});

const removeSuccess = () => ({
  type: REMOVE_SUCCESS,
});

const removeFailure = error => ({
  type: REMOVE_FAILURE,
  payload: error,
});

// action creator
const fetchBooks = () => function (dispatch) {
  dispatch(fetchRequest());
  getBooks()
    .then(response => {
      dispatch(fetchSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchFailure(error.message));
    });
};

const removeBook = book => dispatch => {
  remove(book.id)
    .then(() => {
      dispatch(fetchBooks());
    })
    .catch(error => {
      dispatch(removeFailure(error.message));
    });
};

export { fetchBooks, removeBook };
