import React from 'react';
import Form from './Form';
import List from './List';

const Books = () => (
  <main
    style={{
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '100%',
      backgroundColor: '#fafafa',
      paddingLeft: '5%',
      paddingRight: '5%',
    }}
  >
    <List />
    <Form />
  </main>
);

export default Books;
