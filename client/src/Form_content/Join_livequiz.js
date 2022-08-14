import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Typography, Button } from '@mui/material';
import ExtensionIcon from '@mui/icons-material/Extension';

function Join_livequiz({ open, close, maxWidth }) {
  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Box
            sx={{
              display: 'flex',
              gap: '1em',
              height: 'auto',
              width: 'relative',
            }}
          >
            <Button
              onClick={close}
              variant="contained"
              sx={{
                backgroundColor: 'transparent',
                boxShadow: 'none',
                color: '#3F3D56',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: 'none',
                '&: hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              startIcon={<ExtensionIcon />}
              sx={{
                backgroundColor: '#4CAF50',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: 'none',
                '&: hover': {
                  backgroundColor: '#4CAF50',
                },
              }}
            >
              Join
            </Button>
          </Box>
        }
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              margin: '0em 2em',
              color: '3F3D56',
              fontSize: '1.3em',
              fontWeight: '600',
              width: 'relative',
              height: 'max-content',
            }}
          >
            Do want to join the Live Quiz?
          </Typography>

          <Typography
            sx={{
              margin: '0.5em 3.3em 5em 3.3em',
              color: '3F3D56',
              fontSize: '0.8em',
              fontWeight: '500',
              width: 'relative',
              height: 'max-content',
            }}
          >
            If you join the live quiz, it will take you to the lobby where your
            other classmates who joined are in there.
          </Typography>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Join_livequiz;
