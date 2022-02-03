import React from 'react';

const Categories = () => (
  <div>
    <ul style={{
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '100%',
      padding: '3%',
    }}
    >
      <li style={{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.1em',
        marginLeft: '4%',
      }}
      >
        Romance
      </li>
      <li style={{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.1em',
        marginLeft: '4%',
      }}
      >
        Science fiction
      </li>
      <li style={{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.1em',
        marginLeft: '4%',
      }}
      >
        Fantasy
      </li>
      <li style={{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: '1.1em',
        marginLeft: '4%',
      }}
      >
        Economy
      </li>
    </ul>
  </div>
);

export default Categories;
