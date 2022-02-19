import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookApi } from '../redux/books/books';
import Item from './Item';

const List = () => {
  const books = useSelector((state) => state.bookReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBookApi());
  }, [dispatch]);
  return (
    <div>
      {books.length ? (
        books.map((book) => (
          <Item book={book} key={book.id} />
        ))
      ) : (
        <h3>There is no books </h3>
      )}
    </div>
  );
};

export default List;
