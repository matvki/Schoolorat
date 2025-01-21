// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

const Header: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/presentation">Presentation</Link></li>
          <li>
            {isAuthenticated ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <button onClick={login}>Login</button>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
