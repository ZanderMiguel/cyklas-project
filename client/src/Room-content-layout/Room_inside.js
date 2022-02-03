import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from './Announce';
import Post_layout from './Post_layout';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

function Room_inside() {
  const { id } = useParams();
  console.log(id);

  return (
    <Container maxWidth="md">
      <Grid container rowSpacing={2}>
        <Announce />
        <Post_layout />
      </Grid>
    </Container>
  );
}

export default Room_inside;
