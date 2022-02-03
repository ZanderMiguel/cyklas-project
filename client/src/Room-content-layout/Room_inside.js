import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from './Announce';

import Container from '@mui/material/Container';

function Room_inside() {
  const { id } = useParams();
  console.log(id);

  return (
    <Container maxWidth="md">
      <Announce />
    </Container>
  );
}

export default Room_inside;
