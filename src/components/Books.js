import React from 'react';
import Form from './Form';
import List from './List';

const Books = () => (
  <main
    style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
      padding: '1% 3% 0 3%',
    }}
  >
    <List />
    <Form />
  </main>
);

export default Books;
