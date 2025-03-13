import React from 'react';
import { Box, Heading, Text, Button, Stack, Image, Flex } from '@chakra-ui/react';

const Vitrine: React.FC = () => {
  return (
    <Flex direction="column"
    justify="center"
    align="center"
    p={8}
    h="100vh"
    overflowY="auto">
      <Heading as="h1" size="2xl" textAlign="center" mb={6}>
        Bienvenue sur Schoolorat
      </Heading>

      <Text fontSize="xl" textAlign="center" mb={12}>
        La plateforme d'entraide entre étudiants de votre établissement. Schoolorat offre
        une opportunité unique d'apprendre, d'enseigner et de collaborer au sein de votre
        communauté universitaire.
      </Text>

      <Flex justify="center" align="center" mb={8}>
        <Image
          boxSize="400px"
          objectFit="cover"
          borderRadius="md"
          src="https://via.placeholder.com/400"
          alt="Illustration d'entraide"
        />
      </Flex>

      <Stack mb={12}>
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Notre mission
          </Heading>
          <Text fontSize="lg">
            Nous croyons que l'entraide entre étudiants est essentielle pour réussir. Schoolorat permet aux
            étudiants de se connecter, d'échanger et de partager leurs connaissances à travers des cours particuliers
            ou des sessions de tutorat. Que vous soyez un étudiant à la recherche d'un soutien académique ou un enseignant
            désireux de partager votre savoir, Schoolorat est fait pour vous !
          </Text>
        </Box>


        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Ce que nous offrons
          </Heading>
          <Stack >
            <Text fontSize="lg">
              - Des cours particuliers avec des étudiants de votre établissement
            </Text>
            <Text fontSize="lg">
              - La possibilité d'enseigner et de devenir tuteur pour aider les autres
            </Text>
            <Text fontSize="lg">
              - Un espace d'échange d'idées, de conseils et de ressources entre étudiants
            </Text>
          </Stack>
        </Box>


        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Comment ça marche ?
          </Heading>
          <Text fontSize="lg">
            Schoolorat fonctionne sur un modèle simple : inscrivez-vous, connectez-vous avec vos camarades et
            commencez à partager vos connaissances. Vous pouvez chercher des cours disponibles, vous inscrire comme étudiant,
            ou même proposer des cours en tant que tuteur.
          </Text>
        </Box>


        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4}>
            Rejoignez Schoolorat !
          </Heading>
          <Text fontSize="lg" mb={6}>
            Inscrivez-vous dès maintenant pour faire partie de cette belle communauté et commencez à échanger et apprendre
            avec vos camarades.
          </Text>
          <Button colorScheme="teal" size="lg" onClick={() => alert('Redirection vers la page d’inscription')}>
            Inscription
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Vitrine;
