import React, { createContext, useState, useEffect } from 'react';

// Créer un contexte pour l'authentification
const AuthContext = createContext(null);

// Fonction pour récupérer l'utilisateur depuis le localStorage
const getUserFromLocalStorage = () => {
  const user = localStorage.getItem('currentUser');
  return user ? JSON.parse(user) : null;
};

// Fournisseur du contexte d'authentification
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getUserFromLocalStorage());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
    setCurrentUser(user);
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setCurrentUser(null);
  };

  const checkRole = (role) => {
    return currentUser?.roles?.includes(role);
  };

  const getUserId = () => {
    return currentUser?.id;
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, checkRole, getUserId, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useAuth = () => React.useContext(AuthContext);
