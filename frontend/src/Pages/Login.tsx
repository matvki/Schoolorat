// src/pages/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation basique
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    // Simuler la connexion réussie
    login();
    navigate('/home'); // Redirige vers la page d'accueil après connexion réussie
  };

  return (
    <div>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>Pas encore de compte ? <a href="/signup">Inscrivez-vous ici</a></p>
    </div>
  );
};

export default Login;
