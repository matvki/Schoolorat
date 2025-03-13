// src/components/Header.tsx
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Flex, Button, IconButton, Box, Icon } from '@chakra-ui/react';

const Header: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<any>(null); // Utilisateur null par défaut
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setCurrentUser(null); // Déconnexion en réinitialisant currentUser à null
    navigate('/'); // Rediriger vers la page d'accueil
  };

  return (
    <Flex justify="space-between" align="center" p={4} bg="teal.500" color="white">
      <Box>
        <IconButton
          aria-label="Home"
          onClick={() => navigate('/')}
          size="lg"
        >
          <Icon size={"2xl"}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 300" width="500" height="300">
              <circle cx="200" cy="150" r="80" fill="#45B8D6" />
              <path d="M200 70 A80 80 0 1 1 199.9 70" fill="#D68A45" />
              <rect x="120" y="145" width="160" height="10" fill="#FFFFFF" rx="5" />
              <text x="250" y="270" font-family="Poppins, sans-serif" font-size="36" font-weight="bold" text-anchor="middle">
                <tspan fill="#45B8D6">School</tspan><tspan fill="#D68A45">orat</tspan>
              </text>
            </svg>
          </Icon>
        </IconButton>
      </Box>

      <Box ml="auto" display="flex" gap={4}>
        {currentUser && location.pathname !== '/home' && (
          <Button variant="solid" color="white" onClick={() => navigate('/home')}>Home</Button>
        )}
        {location.pathname !== '/' && (
          <Button variant="solid" color="white" onClick={() => navigate('/')}>Vitrine</Button>
        )}
        {location.pathname !== '/login' && !currentUser && (
          <Button variant="solid" color="white" onClick={() => navigate('/login')}>Login</Button>
        )}
        {location.pathname !== '/signup' && !currentUser && (
          <Button variant="solid" color="white" onClick={() => navigate('/signup')}>Sign Up</Button>
        )}
        {!currentUser && location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/account' && (
          <Button variant="solid" color="white" onClick={() => navigate('/account')}>Mon compte</Button>
        )}
         {!currentUser && location.pathname !== '/annonce' && (
          <Button variant="solid" color="white" onClick={() => navigate('/annonce')}>Annonces</Button>
        )}
        {!currentUser && (
          <Button variant="solid" color="white" onClick={handleLogout}>Logout</Button>
        )}
      </Box>
    </Flex>
  );
};

export default Header;
