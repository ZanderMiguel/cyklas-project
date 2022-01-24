import React from 'react';

import Grid from '@mui/material/Grid';
import Dialogform from '../components/Dialogform';
import Textfield from './Textfield';

function Create_room() {
  return (
    <>
      <Dialogform title="Create your Room">
        <Grid
          container
          sx={{ mt: 5 }}
          rowSpacing={{ xs: 2 }}
          columnSpacing={{ xs: 2 }}
        >
          <Grid item xs={6}>
            <Textfield label="Room" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Textfield label="Course" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Textfield label="Class Day(s)" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Textfield label="Year and Section" variant="outlined" />
          </Grid>
        </Grid>
      </Dialogform>
    </>
  );
}

export default Create_room;
