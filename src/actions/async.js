import { getBooks } from '../api-services/services';

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILURE = 'FETCH_FAILURE';

const fetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};

const fetchSuccess = (data) => {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
};

const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error,
  };
};

// action creator
const fetchBooks = () => {
  return function (dispatch) {
    dispatch(fetchRequest());
    getBooks()
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFailure(error.message));
      });
  };
};

export default fetchBooks;
