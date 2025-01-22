// src/components/Header.tsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

const Header: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation(); // Obtenir l'URL actuelle

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirige vers la page vitrine après déconnexion
  };

  return (
    <header>
      <nav>
        <ul>
          {isAuthenticated && location.pathname !== '/home' && (
            <li><Link to="/home">Home</Link></li>
          )}

          {location.pathname !== '/' && <li><Link to="/">Vitrine</Link></li>}

          {/* Retirer le bouton Login si on est déjà sur la page de login ou si on est connecté */}
          {location.pathname !== '/login' && !isAuthenticated && (
            <li><Link to="/login">Login</Link></li>
          )}

          {location.pathname !== '/signup' && !isAuthenticated && (
            <li><Link to="/signup">Sign Up</Link></li>
          )}

          {/* Ne pas afficher "Mon compte" si on est sur la vitrine, login ou signup */}
          {isAuthenticated && location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && (
            <li><Link to="/account">Mon compte</Link></li>
          )}

          {isAuthenticated && (
            <li><button onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
