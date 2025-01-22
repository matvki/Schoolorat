// src/components/LoginForm.tsx
import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';

const LoginForm: React.FC = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!username) {
      setError('Veuillez entrer un nom d\'utilisateur');
      return;
    }
    // Simuler une connexion avec un nom d'utilisateur
    login();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Nom d'utilisateur:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <button type="submit">Se connecter</button>
      <p>Pas de compte ? <a href="/signup">Inscrivez-vous ici</a></p>
    </form>
  );
};

export default LoginForm;
