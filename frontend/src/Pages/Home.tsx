import React, { useState } from 'react';
import { Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import { useAuth } from '../Context/authContext';
import Planning from '../Components/Planning'; // Assurez-vous d'importer le composant Planning

const Home: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const [showPlanning, setShowPlanning] = useState(false);

  const togglePlanning = () => {
    setShowPlanning(!showPlanning);
  };

  return (
    <Box p={6} maxW="xl" mx="auto" mt="10" borderWidth="1px" borderRadius="md">
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Page d'accueil
      </Text>

      {isAuthenticated ? (
        <>
          <Text mb={4}>Bienvenue sur le contenu principal !</Text>
          
          {/* Afficher le bouton pour afficher/masquer le calendrier */}
          <Button 
            colorScheme="teal" 
            onClick={togglePlanning} 
            mb={4}
          >
            {showPlanning ? 'Masquer le Planning' : 'Afficher le Planning'}
          </Button>

          {/* Si showPlanning est vrai, afficher le composant Planning */}
          {showPlanning && <Planning />}
        </>
      ) : (
        <Text>Veuillez vous connecter pour voir le contenu.</Text>
      )}
    </Box>
  );
};

export default Home;
