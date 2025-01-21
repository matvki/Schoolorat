// src/pages/Home.tsx
import React from 'react';
import { useAuth } from '../Context/authContext';

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <p>Welcome to the main content!</p>
      ) : (
        <p>Please log in to view the content.</p>
      )}
    </div>
  );
};

export default Home;
