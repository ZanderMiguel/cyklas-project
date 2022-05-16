import React from 'react';
import { Container, Grid, Typography, Button } from '@mui/material';
import EvaluationRoom from './EvaluationRoom';
import EvaluationRatingKeys from './EvaluationRatingKeys';
import EvaluationTable from './EvaluationTable';

function EvaluationV2() {
  return (
    <Container maxWidth="lg" sx={{ padding: '2em 0em' }}>
      <Grid container item xs={12}>
        <Grid item xs={12} sx={{ marginBottom: '1em' }}>
          <Typography
            children="How would you evaluate this Professor?"
            sx={{
              width: 'relative',
              height: 'max-content',
              textAlign: 'center',
              fontSize: '1.5em',
              fontWeight: '600',
              color: '#3F3D56',
            }}
          />
        </Grid>

        <EvaluationRoom />

        <EvaluationRatingKeys />

        <EvaluationTable />

        <Grid
          item
          xs={12}
          sx={{ padding: '0.3em', display: 'flex', justifyContent: 'center' }}
        >
          <Button
            variant="contained"
            children="Submit"
            sx={{
              textTransform: 'Capitalize',
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              boxShadow: 'none',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default EvaluationV2;
