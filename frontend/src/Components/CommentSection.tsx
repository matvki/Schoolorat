import React, { useState } from 'react';
import { Box, Textarea, Button, Text } from '@chakra-ui/react';

interface CommentSectionProps {
  announcementId: number;
  comments: string[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ announcementId, comments }) => {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment) {
      // Ajouter le commentaire dans l'annonce (dans un état global ou une API)
      alert(`Commentaire ajouté: ${comment}`);
      setComment('');
    }
  };

  return (
    <Box mt={4}>
      <Textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Ajouter un commentaire"
      />
      <Button colorScheme="blue" mt={2} onClick={handleAddComment}>
        Ajouter le commentaire
      </Button>

      <Box mt={4}>
        <Text fontSize="lg" fontWeight="bold">Commentaires :</Text>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <Text key={index} mt={2}>{comment}</Text>
          ))
        ) : (
          <Text>Aucun commentaire pour cette annonce.</Text>
        )}
      </Box>
    </Box>
  );
};

export default CommentSection;
