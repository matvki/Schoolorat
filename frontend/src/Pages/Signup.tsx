// src/pages/SignupPage.tsx
import React, { useState } from 'react';

const SignupPage: React.FC = () => {
  const [role, setRole] = useState<'etudiant' | 'etablissement'>('etudiant');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [school, setSchool] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation basique
    if (!username || !email || !password) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    // Si l'utilisateur est un établissement, le champ établissement devient obligatoire
    if (role === 'etablissement' && !school) {
      setError('Veuillez renseigner le nom de l\'établissement.');
      return;
    }

    // Si l'utilisateur est un étudiant, vérifier si l'établissement a été renseigné (facultatif)
    if (role === 'etudiant' && !school) {
      setError('');
    }

    // Logique d'inscription (à adapter à ton backend)
    console.log('Inscription réussie !');
    setError('');
    // Effectuer l'inscription avec les données du formulaire
  };

  return (
    <div>
      <h2>Inscription</h2>
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
        <div>
          <label>Mot de passe:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Vous êtes:</label>
          <select value={role} onChange={(e) => setRole(e.target.value as 'etudiant' | 'etablissement')}>
            <option value="etudiant">Étudiant</option>
            <option value="etablissement">Établissement</option>
          </select>
        </div>

        {/* Afficher le champ établissement seulement si le rôle est "établissement" */}
        {role === 'etablissement' && (
          <div>
            <label>Nom de l'établissement:</label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              required
            />
          </div>
        )}

        {/* Afficher le champ établissement seulement si le rôle est "étudiant" */}
        {role === 'etudiant' && (
          <div>
            <label>Nom de l'établissement (facultatif):</label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
        )}

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignupPage;
