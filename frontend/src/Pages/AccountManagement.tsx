import React, { useState } from "react";
import { Box, Button, Input, Field, Alert, Text } from "@chakra-ui/react";

const AccountManagement: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !email) {
      setError("Veuillez remplir tous les champs.");
      setSuccess("");
      return;
    }
    setError("");
    setSuccess("Informations modifiées avec succès !");
  };

  const handleDeleteAccount = () => {
    setShowDeleteConfirm(true);
  };

  return (
    <Box maxW="400px" mx="auto" mt="50px" p="6" borderRadius="md" boxShadow="md">
      <Text fontSize="xl" fontWeight="bold" mb="4">
        Gestion de mon compte
      </Text>

      {error && (
        <Alert.Root status="error" mb="4">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Erreur</Alert.Title>
            <Alert.Description>{error}</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}

      {success && (
        <Alert.Root status="success" mb="4">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Succès</Alert.Title>
            <Alert.Description>{success}</Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}

      <form onSubmit={handleSubmit}>
        <Field.Root>
          <Field.Label>Nom d'utilisateur</Field.Label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} />
        </Field.Root>

        <Field.Root mt="4">
          <Field.Label>Email</Field.Label>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Field.Root>

        <Button type="submit" colorScheme="blue" mt="4" width="100%">
          Modifier mes informations
        </Button>
      </form>

      <Button colorScheme="red" mt="4" width="100%" onClick={handleDeleteAccount}>
        Supprimer mon compte
      </Button>

      {showDeleteConfirm && (
        <Alert.Root status="warning" mt="4">
          <Alert.Indicator />
          <Alert.Content>
            <Alert.Title>Confirmation</Alert.Title>
            <Alert.Description>
              Es-tu sûr de vouloir supprimer ton compte ?
              <Button colorScheme="red" mt="2" onClick={() => alert("Compte supprimé !")}>
                Confirmer la suppression
              </Button>
            </Alert.Description>
          </Alert.Content>
        </Alert.Root>
      )}
    </Box>
  );
};

export default AccountManagement;
