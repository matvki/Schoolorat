import React, { useState, useEffect } from 'react';
import { Box, Button, Input, Text, Textarea, List } from '@chakra-ui/react';
import { useAuth } from '../Context/authContext';
import AnnouncementCard from '../Components/AnnouncementCard';
import CommentSection from '../Components/CommentSection';

const AnnouncementManagement: React.FC = () => {
  const currentUser  = null // Récupérer l'utilisateur connecté
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', description: '' });
  const [error, setError] = useState('');

  useEffect(() => {
    // Appeler l'API ou la base de données pour récupérer les annonces
    fetchAnnouncements();
  }, []);

  const fetchAnnouncements = async () => {
    // Simuler une récupération d'annonces
    const fetchedAnnouncements = [
      {
        id: 1,
        title: 'Cours de React',
        description: 'Recherche un cours sur React pour débutant.',
        user: {
          name: 'Jean Dupont',
          stars: 4,
        },
        comments: [],
      },
      {
        id: 2,
        title: 'Proposition de cours de Python',
        description: 'Je propose un cours de Python pour débutant.',
        user: {
          name: 'Marie Dupuis',
          stars: 5,
        },
        comments: [],
      },
    ];
    setAnnouncements(fetchedAnnouncements);
  };

  const handleCreateAnnouncement = () => {
    if (!newAnnouncement.title || !newAnnouncement.description) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    // Ajouter une nouvelle annonce à la liste
    const newAnnouncementData = {
      ...newAnnouncement,
      id: Date.now(), // Simuler un ID unique
      user: { name: currentUser, stars: 4 }, // Simuler les données de l'utilisateur
      comments: [],
    };
    setAnnouncements([newAnnouncementData, ...announcements]);
    setNewAnnouncement({ title: '', description: '' });
    setError('');
  };

  const handleDeleteAnnouncement = (id: number) => {
    // Supprimer l'annonce
    setAnnouncements(announcements.filter((announcement) => announcement.id !== id));
  };

  const handleUpdateAnnouncement = (id: number) => {
    const updatedDescription = prompt('Mettez à jour la description');
    if (updatedDescription) {
      setAnnouncements(
        announcements.map((announcement) =>
          announcement.id === id
            ? { ...announcement, description: updatedDescription }
            : announcement
        )
      );
    }
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={4}>Gestion des annonces</Text>

      {error && <Text color="red.500">{error}</Text>}

      <Box mb={6}>
        <Input
          placeholder="Titre de l'annonce"
          value={newAnnouncement.title}
          onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
        />
        <Textarea
          placeholder="Description de l'annonce"
          value={newAnnouncement.description}
          onChange={(e) => setNewAnnouncement({ ...newAnnouncement, description: e.target.value })}
          mt={4}
        />
        <Button colorScheme="blue" mt={4} onClick={handleCreateAnnouncement}>
          Créer l'annonce
        </Button>
      </Box>

      <List.Root>
        {announcements.map((announcement) => (
          <List.Item key={announcement.id} borderWidth="1px" p={4} borderRadius="md">
            <AnnouncementCard
              announcement={announcement}
              onDelete={handleDeleteAnnouncement}
              onUpdate={handleUpdateAnnouncement}
            />
            <CommentSection announcementId={announcement.id} comments={announcement.comments} />
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default AnnouncementManagement;
