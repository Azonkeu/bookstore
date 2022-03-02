import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBookApi } from '../redux/books/books';

const Item = (props) => {
  const {
    book: { id, title, category },
  } = props;
  const dispatch = useDispatch();
  const removeBookFromStore = () => {
    dispatch(removeBookApi({ id }));
  };

  const percentage = 67;
  return (
    <div className="item-maindiv">
      <div className="item-indiv">
        <p className="action gene genex">Action</p>
        <h2 className="general genero title">{title}</h2>
        <p className="general genero font-3 author">{category}</p>
        <div className="butn-block" style={{ display: 'flex', flexDirection: 'row', color: 'blue' }}>
          <button type="button" className="general genero font-3 comment">Comments</button>
          <span className="span" />
          <button type="button" className="general genero comment button" onClick={removeBookFromStore}>Remove</button>
          <span className="span" />
          <button type="button" className="general genero comment">Edit</button>
        </div>
      </div>
      <div className="progress-bar-c">
        <CircularProgressbar
          value={percentage}
          styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
          className="progress-bar"
        />
        <div className="progress-value-c">
          <p className="progress-percentage">
            {percentage}
            %
          </p>
          <p className="progress-completed gene">Completed</p>
        </div>
      </div>
      <span className="Line-2" />
      <div className="chap">
        <h2 className="chapter-h2 font-3 general genero">CURRENT CHAPTER</h2>
        <h3 className="chapter-h3 font-3 general genero">
          Chapter
          {' '}
          { `${Math.floor(Math.random() * 50)}`}
        </h3>
        <button
          className="font-3 update-progg-btn general genero"
          type="button"
          style={{
            letterSpacing: '0.5px',
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
