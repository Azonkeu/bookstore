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
            width: '40%',
            marginRight: '4%',
            border: 'solid 1px #e8e8e8',
            height: '1.600rem',
            margin: '1.188rem 2.125rem 0 0',
            padding: '0.813rem 35.688rem 0.813rem 1.063rem',
            borderRadius: '4px',
          }}
        />
        <input
          type="text"
          name="category"
          value={category}
          placeholder="category"
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: '27%',
            marginRight: '4%',
            height: '2.23rem',
            margin: '1.188rem 2.125rem 0',
            padding: '0.375rem 0.938rem 0.563rem 1rem',
            borderRadius: '4px',
            border: 'solid 1px #e8e8e8',
            backgroundColor: '#fff',
          }}
        />
        {/* <select
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
        </select> */}
        <button
          type="submit"
          style={{
            width: '35%',
            border: 'none',
            color: 'white',
            height: '2.999rem',
            margin: '1.188rem 0 0 2.125rem',
            padding: '0.801rem 1.188rem 0.886rem 1.375rem',
            borderRadius: '3px',
            backgroundColor: '#0290ff',
          }}
        >
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
