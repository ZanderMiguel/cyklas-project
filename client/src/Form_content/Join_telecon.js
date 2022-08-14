import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Typography, Avatar, Box, Button } from '@mui/material';

const joiningPersonSample = [
  {
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dmarge.com%2Fmost-likeable-person-world-the-rock&psig=AOvVaw1-MneizFaN9jlwYF44ePOP&ust=1653783606951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjniZb2gPgCFQAAAAAdAAAAABAD',
    name: 'Luke mestinola',
    email: 'Luke@gmail.com',
  },
  {
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.psychologytoday.com%2Fus%2Fblog%2Fask-the-therapist%2F201809%2Fwhy-would-people-dislike-nice-person&psig=AOvVaw1-MneizFaN9jlwYF44ePOP&ust=1653783606951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjniZb2gPgCFQAAAAAdAAAAABAJ',
    name: 'Catherine Gonzales',
    email: 'catherine@gmail.com',
  },
  {
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bkacontent.com%2Fwhat-is-first-person-point-of-view-and-how-is-it-used%2F&psig=AOvVaw1-MneizFaN9jlwYF44ePOP&ust=1653783606951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjniZb2gPgCFQAAAAAdAAAAABAO',
    name: 'Angel Aquino',
    email: 'angel@gmail.com',
  },
  {
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bkacontent.com%2Fwhat-is-first-person-point-of-view-and-how-is-it-used%2F&psig=AOvVaw1-MneizFaN9jlwYF44ePOP&ust=1653783606951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjniZb2gPgCFQAAAAAdAAAAABAO',
    name: 'Angel Aquino',
    email: 'angel@gmail.com',
  },
  {
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bkacontent.com%2Fwhat-is-first-person-point-of-view-and-how-is-it-used%2F&psig=AOvVaw1-MneizFaN9jlwYF44ePOP&ust=1653783606951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjniZb2gPgCFQAAAAAdAAAAABAO',
    name: 'Angel Aquino',
    email: 'angel@gmail.com',
  },
  {
    avatar:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bkacontent.com%2Fwhat-is-first-person-point-of-view-and-how-is-it-used%2F&psig=AOvVaw1-MneizFaN9jlwYF44ePOP&ust=1653783606951000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOjniZb2gPgCFQAAAAAdAAAAABAO',
    name: 'Angel Aquino',
    email: 'angel@gmail.com',
  },
];

function Join_room({ open, close, maxWidth }) {
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
              sx={{
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                padding: '0.3em 3em',
                boxShadow: 'none',
              }}
            >
              Allow
            </Button>
          </Box>
        }
      >
        <Grid container sx={{ padding: '0em 2em' }}>
          <Grid item xs={12}>
            <Typography
              sx={{
                marginBottom: '0.8em',
                width: '100%',
                height: 'max-content',
                color: '#2C2A46',
                fontSize: '1.2em',
                fontWeight: 600,
              }}
            >
              Someone's joining your room
            </Typography>
          </Grid>
          <Box
            width="100%"
            maxHeight="300px"
            overflow="auto"
            marginBottom="0.5em"
          >
            {joiningPersonSample.map((items, index) => {
              return (
                <Box
                  display="flex"
                  alignItems="center"
                  marginBottom="1em"
                  maxHeight="400px"
                  overflow="auto"
                >
                  <Avatar
                    src={items.avatar}
                    sx={{ marginRight: '0.5em', width: '3rem', height: '3rem' }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        width: 'auto',
                        color: '#3F3D56',
                        fontSize: '1em',
                        fontWeight: 600,
                      }}
                    >
                      {items.name}
                    </Typography>
                    <Typography
                      sx={{
                        width: 'auto',
                        color: '#3F3D56',
                        fontSize: '0.8em',
                        fontWeight: 500,
                      }}
                    >
                      {items.email}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Join_room;
