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
        maxWidth: '100%',
        backgroundColor: 'white',
      }}
      >
        <ul style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          paddingLeft: '4%',
          height: '1.4rem',
          margin: '0 0 0.9rem',
          padding: '1.438rem 6.188rem 1.688rem 4.25rem',
          backgroundColor: '#fff',
        }}
        >
          <li style={{
            fontWeight: 'bold',
            fontSize: '2em',
          }}
          >
            <Link
              to="/"
              style={{
                color: '#0290ff',
                width: '15rem',
                height: '2.313rem',
                margin: '0.375rem 0.938rem 0.125rem 0',
                fontFamily: 'Montserrat',
                fontSize: '1.875rem',
                fontWeight: 'bold',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: 'normal',
              }}
            >
              Bookstore CMS
            </Link>
          </li>
          <li>
            <Link
              to="/books"
              style={{
                color: '#121212',
                width: '3.688rem',
                height: '1rem',
                margin: '1.125rem 2.563rem 0.688rem 4rem',
                fontfamily: 'Montserrat',
                fontSize: '0.935rem',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: '1.9px',
              }}
            >
              Books
            </Link>
          </li>
          <li style={{
            fontWeight: 'bold',
            fontSize: '1.3em',
            marginLeft: '6%',
          }}
          >
            <Link
              to="/Categories"
              style={{
                color: 'var(--black-two)',
                width: '6.563rem',
                height: '1rem',
                margin: '1.125rem 41.5rem 0.688rem 2.563rem',
                opacity: '0.5',
                fontFamily: 'Montserrat',
                fontSize: '0.913rem',
                fontWeight: 'normal',
                fontStretch: 'normal',
                fontStyle: 'normal',
                lineHeight: 'normal',
                letterSpacing: '1.9px',
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
