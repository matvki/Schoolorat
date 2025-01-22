// src/pages/AccountManagement.tsx
import React, { useState } from 'react';

const AccountManagement: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour mettre à jour les informations de l'utilisateur
    if (!username || !email) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    // Simulation de modification des informations
    alert('Informations modifiées avec succès!');
  };

  const handleDeleteAccount = () => {
    // Logique pour supprimer le compte
    alert('Compte supprimé!');
  };

  return (
    <div>
      <h2>Gestion de mon compte</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom d'utilisateur:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Modifier mes informations</button>
      </form>
      <button onClick={handleDeleteAccount} style={{ color: 'red' }}>
        Supprimer mon compte
      </button>
    </div>
  );
};

export default AccountManagement;
