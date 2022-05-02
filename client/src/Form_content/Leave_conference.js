import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Typography, Button } from '@mui/material';
import { CallEnd } from '@mui/icons-material';

function Post_exam({ open, close, maxWidth }) {
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
                boxShadow: "none",
                '&: hover': {
                  backgroundColor: 'transparent'
                },
              }}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              startIcon={<CallEnd />}
              sx={{
                backgroundColor: '#F74747',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: "none",
                '&: hover': {
                  backgroundColor: '#F02D2D',
                },
              }}
            >
              Leave
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
            Do you want to leave this conference?
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
            You can rejoin to this conference if the Host is still inside and
            did not end the meeting or dismiss the class.
          </Typography>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Post_exam;
