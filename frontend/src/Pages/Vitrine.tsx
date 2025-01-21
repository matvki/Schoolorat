// src/pages/Presentation.tsx
import React from 'react';
import { useAuth } from '../Context/authContext';
import LoginForm from '../Components/LoginForm';

const Vitrine: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Welcome to the Presentation Page</h1>
      {!isAuthenticated ? (
        <div>
          <p>Please log in to continue.</p>
          <LoginForm />
        </div>
      ) : (
        <p>You are already logged in. You can go to the home page now.</p>
      )}
    </div>
  );
};

export default Vitrine;
