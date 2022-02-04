import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const List = () => {
  const books = useSelector((state) => state.bookReducer);

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
