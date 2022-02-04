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
    }}
    >
      <h2 style={{
        width: '90%',
        margin: '2% auto 2% auto',
        paddingTop: '3%',
        borderTop: '2px solid #f1f1f1',
      }}
      >
        Add New Book
      </h2>
      <form
        onSubmit={addBookToStore}
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '90%',
          margin: '2% auto 2% auto',
        }}
      >
        <input
          type="text"
          name="title"
          value={title}
          placeholder="Book title"
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: '54%',
            marginRight: '4%',
            padding: '1.5%',
          }}
        />
        <input
          type="text"
          name="category"
          value={category}
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: '25%',
            marginRight: '4%',
            padding: '1.5%',
          }}
        />
        <select
          name="category"
          style={{
            width: '20%',
            marginRight: '4%',
            padding: '1.5%',
          }}
        >
          <option value="Romance">
            Romance
          </option>
          <option value="Science fiction">
            Science fiction
          </option>
          <option value="Fantasy">
            Fantasy
          </option>
          <option value="Mystery">
            Mystery
          </option>
          <option value="Economy">
            Economy
          </option>
        </select>
        <button
          type="submit"
          style={{
            width: '20%',
            padding: '1.5%',
            backgroundColor: 'blue',
            border: 'none',
            color: 'white',
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
