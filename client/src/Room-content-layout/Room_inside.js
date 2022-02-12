import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from './Announce';

import { Container, Box } from '@mui/material';

function Room_inside() {
  const { id } = useParams();
  console.log(id);

  return (
    <Container maxWidth="md">
      <Box sx={{ width: '100%', backgroundColor: 'red' }}>alskjdlaksjldjk</Box>
      <Announce />
    </Container>
  );
}

export default Room_inside;
