import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import {
  Box,
  Button,
  Field,
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

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Veuillez remplir tous les champs');
      return;
    }

    login();
    navigate('/home');
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
            <Field.Root invalid={!!error}>
              <Field.Label>Email</Field.Label>
              <Input
                type="email"
                placeholder="me@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error && <Field.ErrorText>Veuillez entrer un email valide</Field.ErrorText>}
            </Field.Root>

            <Field.Root invalid={!!error}>
              <Field.Label>Mot de passe</Field.Label>
              <Input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <Field.ErrorText>Le mot de passe est requis</Field.ErrorText>}
            </Field.Root>

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
