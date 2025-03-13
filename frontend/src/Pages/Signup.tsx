import React, { useState } from "react";
import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  NativeSelect,
  Stack,
  Text,
} from "@chakra-ui/react";

const SignupPage: React.FC = () => {
  const [role, setRole] = useState<"etudiant" | "etablissement">("etudiant");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [school, setSchool] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation basique
    if (!username || !email || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    if (role === "etablissement" && !school) {
      setError("Veuillez renseigner le nom de l'établissement.");
      return;
    }

    setError(""); // Reset errors
    console.log("Inscription réussie !");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100vw"
      bg="gray.100"
      p={4}
    >
      <Box
        bg="white"
        p={6}
        borderRadius="lg"
        boxShadow="lg"
        maxW="400px"
        width="100%"
      >
        <Fieldset.Root size="lg">
          <Stack >
            <Fieldset.Legend>Inscription</Fieldset.Legend>

            {error && <Text color="red.500">{error}</Text>}

            <Field.Root>
              <Field.Label>Nom d'utilisateur</Field.Label>
              <Input
                placeholder="Votre nom"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Email</Field.Label>
              <Input
                placeholder="me@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Mot de passe</Field.Label>
              <Input
                placeholder="••••••••"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Field.Root>

            <Field.Root>
              <Field.Label>Vous êtes</Field.Label>
              <NativeSelect.Root>
                <NativeSelect.Field
                  value={role}
                  onChange={(e) =>
                    setRole(e.target.value as "etudiant" | "etablissement")
                  }
                >
                  <option value="etudiant">Étudiant</option>
                  <option value="etablissement">Établissement</option>
                </NativeSelect.Field>
                <NativeSelect.Indicator />
              </NativeSelect.Root>
            </Field.Root>

            {role === "etablissement" && (
              <Field.Root>
                <Field.Label>Nom de l'établissement</Field.Label>
                <Input
                  placeholder="Nom de l'établissement"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </Field.Root>
            )}

            {role === "etudiant" && (
              <Field.Root>
                <Field.Label>Nom de l'établissement (facultatif)</Field.Label>
                <Input
                  placeholder="Facultatif"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </Field.Root>
            )}

            <Button colorScheme="blue" onClick={handleSubmit} width="100%">
              S'inscrire
            </Button>
          </Stack>
        </Fieldset.Root>
      </Box>
    </Box>
  );
};

export default SignupPage;
