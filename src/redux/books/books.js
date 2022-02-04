import axios from 'axios';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOK';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const addBookApi = (payload) => async (dispatch) => {
  const { id, title, category } = payload;
  const newBook = { item_id: id, title, category };
  await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pN7lg1ckc4j84M9XGB1M/books', newBook);
  dispatch(addBook(payload));
};

export const fetchBookApi = () => async (dispatch) => {
  const books = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pN7lg1ckc4j84M9XGB1M/books');
  const mapBooks = Object.entries(books.data).map(([id, book]) => {
    const { category, title } = book[0];
    return { id, category, title };
  });
  dispatch(fetchBooks(mapBooks));
};

export const removeBookApi = (id) => async (dispatch) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/pN7lg1ckc4j84M9XGB1M/books/${id}`);
  dispatch(removeBook(id));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
      /* eslint-disable no-labels, no-unreachable */
      break;
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
      /* eslint-disable no-labels, no-unreachable */
    case FETCH_BOOKS:
      return action.payload;
      break;
    default:
      return state;
  }
};

export default reducer;
