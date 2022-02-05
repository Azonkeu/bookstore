import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { ImUser } from '@react-icons/all-files/im/ImUser';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

const App = () => (
  <Router style={{ maxWidth: '100%' }}>
    <div style={{ maxWidth: '100%' }}>
      <nav style={{
        width: '100%',
        paddingLeft: '5%',
        paddingRight: '5%',
      }}
      >
        <ul style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          height: '1.4rem',
          margin: '0 auto 0.9rem auto',
          padding: '1.438rem 0 1.688rem 0',
          backgroundColor: '#fff',
        }}
        >
          <li style={{
            fontWeight: 'bold',
            fontSize: '2em',
            maxWidth: '50%',
            padding: '0',
          }}
          >
            <Link
              to="/"
              className="gene genex"
              style={{
                color: '#0290ff',
                maxWidth: '50%',
                height: '2.313rem',
                margin: '0.375rem 0 0.125rem 0',
                fontSize: '1.875rem',
                fontWeight: 'bold',
                letterSpacing: 'normal',
              }}
            >
              Bookstore CMS
            </Link>
          </li>
          <li style={{ width: '10%', padding: '0', marginLeft: '4%' }}>
            <Link
              to="/books"
              className="gene"
              style={{
                color: '#121212',
                width: '30%',
                height: '1rem',
                fontSize: '0.935rem',
                fontWeight: 'normal',
                margin: '1.125rem 2.563rem 0.688rem 0',
                letterSpacing: '1.9px',
              }}
            >
              Books
            </Link>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            width: '15%',
          }}
          >
            <Link
              to="/Categories"
              className="gene general"
              style={{
                color: '#121212',
                width: '20%',
                height: '1rem',
                opacity: '0.5',
                fontSize: '0.913rem',
                fontWeight: 'normal',
                letterSpacing: '1.9px',
                margin: '1.125rem 41.5rem 0.688rem 2.563rem',
              }}
            >
              Categories
            </Link>
          </li>
          <li className="user-icon-c">
            <ImUser className="user-icon" />
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
