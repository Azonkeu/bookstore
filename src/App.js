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
  <Router>
    <div className="app-div">
      <nav className="app-nav">
        <ul className="app-ul">
          <li className="app-li genex">
            <Link to="/" className="gene genex app-link">
              Bookstore CMS
            </Link>
          </li>
          <li className="app-litwo">
            <Link to="/books" className="gene app-linktwo">
              Books
            </Link>
          </li>
          <li className="app-lithree">
            <Link to="/Categories" className="gene general app-linkthree">
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
