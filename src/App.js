import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

const App = () => (
  <Router>
    <div style={{ maxWidth: '100%' }}>
      <nav style={{
        maxWidth: '100%',
        height: '3rem',
        backgroundColor: 'white',
      }}
      >
        <ul style={{
          display: 'flex',
          height: '3rem',
          width: '100%',
          alignItems: 'center',
          paddingLeft: '4%',
          backgroundColor: 'white',
        }}
        >
          <li style={{
            fontWeight: 'bold',
            fontSize: '2em',
          }}
          >
            <Link to="/" style={{ color: 'blue' }}>Bookstore CMS</Link>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            marginLeft: '12%',
          }}
          >
            <Link to="/books" style={{ color: 'blue' }}>Books</Link>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            marginLeft: '6%',
          }}
          >
            <Link to="/Categories" style={{ color: 'blue' }}>Categories</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<Books />} />
        <Route path="/Categories" element={<Categories />} />
      </Routes>
    </div>
  </Router>
);

export default App;
