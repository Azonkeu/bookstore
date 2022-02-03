import React from 'react';

const Books = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    padding: '1% 3% 0 3%',
  }}
  >
    <ul style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
    }}
    >
      <li style={{
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
          <h2>The Hunter Games</h2>
          <p>Camille Miller</p>
          <div style={{ display: 'flex', flexDirection: 'row', color: 'blue' }}>
            <button type="button" style={{ marginRight: '2%' }}>Comments</button>
            <button type="button" style={{ marginRight: '2%' }}>Remove</button>
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
      </li>
      <li style={{
        display: 'flex',
        width: '90%',
        flexDirection: 'row',
        margin: '2% auto 0 auto',
        padding: '2%',
        backgroundColor: 'white',
      }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
          <p>Action</p>
          <h2>The Hunter Games</h2>
          <p>Camille Miller</p>
          <div style={{ display: 'flex', flexDirection: 'row', color: 'blue' }}>
            <button type="button" style={{ marginRight: '2%' }}>Comments</button>
            <button type="button" style={{ marginRight: '2%' }}>Remove</button>
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
      </li>
    </ul>
    <hr style={{ border: '2px solid #000' }} />
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
      <form style={{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        margin: '2% auto 2% auto',
      }}
      >
        <input
          type="text"
          placeholder="Book title"
          style={{
            width: '54%',
            marginRight: '4%',
            padding: '1.5%',
          }}
        />
        <select
          name="categories"
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
  </div>
);

export default Books;
