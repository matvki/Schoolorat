// src/pages/Home.tsx
import React, { useState } from 'react';
import { useAuth } from '../Context/authContext';
import Planning from '../Components/Planning'; // Assurez-vous d'importer le composant Planning

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showPlanning, setShowPlanning] = useState(false);

  const togglePlanning = () => {
    setShowPlanning(!showPlanning);
  };

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <>
          <p>Welcome to the main content!</p>
          
          {/* Afficher le bouton pour afficher le calendrier */}
          <button onClick={togglePlanning}>
            {showPlanning ? 'Hide Planning' : 'Show Planning'}
          </button>

          {/* Si showPlanning est vrai, afficher le composant Planning */}
          {showPlanning && <Planning />}
        </>
      ) : (
        <p>Please log in to view the content.</p>
      )}
    </div>
  );
};

export default Home;
