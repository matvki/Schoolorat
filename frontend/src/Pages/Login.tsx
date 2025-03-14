import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext'; // Importation du contexte d'authentification
import {
  Box,
  Button,
  Input,
  Stack,
  Heading,
  Text,
  Link,
} from '@chakra-ui/react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Vérification des champs de connexion
    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    try {
      // Appel à ton API pour authentifier l'utilisateur et récupérer ses données
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError('Email ou mot de passe incorrect');
        return;
      }

      // Si la connexion est réussie, récupérer l'utilisateur depuis la réponse de l'API
      const userData = await response.json();
      
      // Enregistrement de l'utilisateur dans le contexte et localStorage
      login(userData);

      // Redirection vers la page d'accueil
      navigate('/home');
    } catch (err) {
      setError('Une erreur est survenue lors de la connexion');
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bg="gray.100"
      p={4}
    >
      <Box
        maxW="400px"
        w="100%"
        p={6}
        bg="white"
        boxShadow="xl"
        borderRadius="md"
        borderWidth={1}
      >
        <Heading as="h2" size="lg" mb={6} textAlign="center" color="teal.500">
          Connexion
        </Heading>

        <form onSubmit={handleLogin}>
          <Stack >
            <Input
              type="email"
              placeholder="me@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {error && <Text color="red.500" textAlign="center">{error}</Text>}
            <Button type="submit" colorScheme="teal" width="full">
              Se connecter
            </Button>
          </Stack>
        </form>

        <Text textAlign="center" mt={4}>
          Pas encore de compte ?{' '}
          <Link color="teal.500" href="/signup">
            Inscrivez-vous ici
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Login;
