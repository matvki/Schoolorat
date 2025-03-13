import React, { useState, useEffect } from 'react';
import { Box, Button, Text, Spinner, List } from '@chakra-ui/react';

const Planning: React.FC = () => {
  const [appointments, setAppointments] = useState<string[]>([]); // Liste de rendez-vous
  const [loading, setLoading] = useState<boolean>(true);
  const [googleEvents, setGoogleEvents] = useState<any[]>([]);
  const [error, setError] = useState<string>(''); // Pour gérer les erreurs

  useEffect(() => {
    // Exemple pour récupérer les événements via l'API Google Calendar
    const fetchGoogleCalendarEvents = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
          headers: {
            Authorization: `Bearer YOUR_GOOGLE_CALENDAR_API_KEY`, // Remplace par ton API key
          },
        });

        if (!response.ok) {
          throw new Error('Échec de la récupération des événements.');
        }

        const data = await response.json();
        setGoogleEvents(data.items || []);
      } catch (error) {
        console.error('Erreur lors de la récupération des événements Google Calendar:', error);
        setError('Une erreur est survenue lors de la récupération des événements.');
      } finally {
        setLoading(false);
      }
    };

    fetchGoogleCalendarEvents();
  }, []);

  const addAppointment = () => {
    const newAppointment = prompt('Enter appointment details:');
    if (newAppointment) {
      setAppointments([...appointments, newAppointment]);
    }
  };

  const removeAppointment = (index: number) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  return (
    <Box p={6} borderWidth="1px" borderRadius="md" mt={4}>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Planning
      </Text>

      {/* Affichage des erreurs */}
      {error && (
        <Box mb={4} p={4} color="white" bg="red.500" borderRadius="md">
          <Text>{error}</Text>
        </Box>
      )}

      {/* Affichage des rendez-vous ajoutés */}
      <Button colorScheme="teal" onClick={addAppointment} mb={4}>
        Ajouter un rendez-vous
      </Button>

      <List.Root>
        {appointments.map((appointment, index) => (
          <List.Item key={index} display="flex" alignItems="center">
            <Text>{appointment}</Text>
            <Button colorScheme="red" size="sm" ml={3} onClick={() => removeAppointment(index)}>
              Supprimer
            </Button>
          </List.Item>
        ))}
      </List.Root>

      {/* Affichage des événements Google Calendar */}
      <Text fontSize="lg" mt={6} mb={4}>
        Événements Google Calendar :
      </Text>

      {loading ? (
        <Spinner size="xl" />
      ) : googleEvents.length > 0 ? (
        <List.Root >
          {googleEvents.map((event: any) => (
            <List.Item key={event.id} p={4} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{event.summary}</Text>
              <Text>{event.start.dateTime || event.start.date}</Text>
            </List.Item>
          ))}
        </List.Root>
      ) : (
        <Text>Aucun événement à afficher.</Text>
      )}
    </Box>
  );
};

export default Planning;
