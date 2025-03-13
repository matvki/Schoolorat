import React from 'react';
import { Box, Text,  Stack, IconButton } from '@chakra-ui/react';


interface AnnouncementCardProps {
  announcement: any;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ announcement, onDelete, onUpdate }) => {
  return (
    <Box mb={4}>
      <Text fontSize="xl" fontWeight="bold">{announcement.title}</Text>
      <Text fontSize="sm" color="gray.500">Par {announcement.user.name} - {announcement.user.stars} étoiles</Text>
      <Text mt={2}>{announcement.description}</Text>

      <Stack direction="row" mt={4}>
        <IconButton

          aria-label="Modifier"
          onClick={() => onUpdate(announcement.id)}
          colorScheme="teal"
        />
        <IconButton
          aria-label="Supprimer"
          onClick={() => onDelete(announcement.id)}
          colorScheme="red"
        />
      </Stack>
    </Box>
  );
};

export default AnnouncementCard;
