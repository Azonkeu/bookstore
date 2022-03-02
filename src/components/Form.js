import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBookApi } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const addBookToStore = (e) => {
    e.preventDefault();
    if (title === '' || category === '') return;
    const newBook = {
      id: uuidv4(),
      title,
      category,
    };
    dispatch(addBookApi(newBook));
    setTitle('');
    setCategory('');
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginBottom: '16rem',
    }}
    >
      <hr className="linex" />
      <h2 className="gene genex tit">
        Add New Book
      </h2>
      <form
        onSubmit={addBookToStore}
        className="form"
      >
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          className="inp"
        />
        <input
          type="text"
          name="category"
          value={category}
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          className="inpucat"
        />
        <button type="submit" className="sub-bot">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
