import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from '../redux/books/books';

const Item = (props) => {
  const {
    book: { id, title, category },
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi({ id }));
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      margin: '1% auto 0 auto',
      padding: '2%',
      backgroundColor: 'white',
      width: '90%',
    }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
        <p>Action</p>
        <h2>{title}</h2>
        <p style={{ color: 'blue' }}>{category}</p>
        <div style={{ display: 'flex', flexDirection: 'row', color: 'blue' }}>
          <button type="button" style={{ marginRight: '2%' }}>Comments</button>
          <button type="button" style={{ marginRight: '2%' }} onClick={removeBookFromStore}>Remove</button>
          <button type="button" style={{ marginRight: '2%' }}>Edit</button>
        </div>
      </div>
      <div />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        width: '20%',
      }}
      >
        <button
          type="button"
          style={{
            padding: '3%',
            backgroundColor: 'blue',
            color: 'white',
            width: '100%',
            border: 'none',
          }}
        >
          Update progress
        </button>
      </div>
    </div>
  );
};

Item.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Item;
