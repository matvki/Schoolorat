import { Box, Button, Input, Text, VStack, HStack, Table} from "@chakra-ui/react";
import { useState } from "react";

import { Checkbox } from "@chakra-ui/react";

const SchoolManagement = () => {
  const [classes, setClasses] = useState<{ className: string, students: { firstName: string, lastName: string, email: string }[] }[]>([]);
  const [className, setClassName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [selection, setSelection] = useState<string[]>([]);

  const handleAddClass = () => {
    if (!className) {
      alert('Veuillez entrer le nom de la classe.');
      return;
    }

    const newClass = { className, students: [] };
    setClasses([...classes, newClass]);
    setClassName('');
  };

  const handleAddStudent = (classIndex: number) => {
    if (!firstName || !lastName || !email) {
      alert('Veuillez entrer tous les détails de l\'élève.');
      return;
    }

    const updatedClasses = [...classes];
    updatedClasses[classIndex].students.push({ firstName, lastName, email });
    setClasses(updatedClasses);
    setFirstName('');
    setLastName('');
    setEmail('');
  };

  const handleDeleteClass = (classIndex: number) => {
    const updatedClasses = classes.filter((_, index) => index !== classIndex);
    setClasses(updatedClasses);
  };

  const handleDeleteSelectedStudents = (classIndex: number) => {
    const updatedClasses = [...classes];
    updatedClasses[classIndex].students = updatedClasses[classIndex].students.filter(
      (student) => !selection.includes(student.firstName + ' ' + student.lastName)
    );
    setClasses(updatedClasses);
    setSelection([]);
  };

  return (
    <Box p={5}>
      <VStack  align="start">
        {/* Input et bouton pour ajouter une classe */}
        <HStack  align="center">
          <Input
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            placeholder="Nom de la classe"
            size="md"
          />
          <Button colorScheme="teal" onClick={handleAddClass} >
            Ajouter une classe
          </Button>
        </HStack>

        {/* Input et bouton pour ajouter un élève */}
        <HStack align="center">
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Prénom"
            size="md"
          />
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Nom"
            size="md"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            size="md"
          />
          <Button
            colorScheme="blue"
            onClick={() => handleAddStudent(0)} // Ajouter l'élève à la première classe pour l'exemple
           
          >
            Ajouter un élève
          </Button>
        </HStack>

        {/* Affichage des classes avec les élèves */}
        {classes.length > 0 ? (
          classes.map((classData, classIndex) => (
            <Box key={classIndex} p={4} borderWidth={1} borderRadius="md" width="100%">
              <HStack justify="space-between" mb={2}>
                <Text fontSize="lg" fontWeight="bold">{classData.className}</Text>
                <HStack>
                  <Button colorScheme="red" onClick={() => handleDeleteClass(classIndex)} >
                    Supprimer la classe
                  </Button>
                  <Button colorScheme="red" onClick={() => handleDeleteSelectedStudents(classIndex)} >
                    Supprimer sélection
                  </Button>
                </HStack>
              </HStack>

              {/* Tableau des élèves */}
              <Table.Root colorScheme="teal">
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeader>Nom</Table.ColumnHeader>
                    <Table.ColumnHeader>Prénom</Table.ColumnHeader>
                    <Table.ColumnHeader>Email</Table.ColumnHeader>
                    <Table.ColumnHeader>Selectionner</Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {classData.students.map((student, studentIndex) => (
                    <Table.Row key={studentIndex}>
                      <Table.Cell>{student.lastName}</Table.Cell>
                      <Table.Cell>{student.firstName}</Table.Cell>
                      <Table.Cell>{student.email}</Table.Cell>
                      <Table.Cell>
                        <Checkbox.Root
                          checked={selection.includes(student.firstName + ' ' + student.lastName)}
                          onCheckedChange={(e: any) => {
                            setSelection((prevSelection) =>
                              e.checked
                                ? [...prevSelection, student.firstName + ' ' + student.lastName]
                                : prevSelection.filter((name) => name !== student.firstName + ' ' + student.lastName)
                            );
                          }}
                        >
                          <Checkbox.HiddenInput />
                          <Checkbox.Control />
                          <Checkbox.Label />
                        </Checkbox.Root>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>

              {/* Ajouter un élève à cette classe */}
              <Button colorScheme="green" onClick={() => handleAddStudent(classIndex)} >
                Ajouter un élève à cette classe
              </Button>
            </Box>
          ))
        ) : (
          <Text>Aucune classe ajoutée pour le moment.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default SchoolManagement;
