import React from 'react';
import { Button, Box, Grid, Typography } from '@mui/material';
import DIalogform from '../Dialogform';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function LeaveRoom({ open, close, setRefresher, roomID, setNewRoom }) {
  return (
    <DIalogform
      open={open}
      close={close}
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
                boxShadow: 'none',
              },
            }}
          >
            No
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              axios
                .put('http://localhost:5000/room/leave', {
                  roomID,
                  userID: JSON.parse(localStorage.userData).data.user._id,
                })
                .then((res) => {
                  setRefresher(<Redirect to="/rooms" />);
                  setNewRoom((prev) => !prev);
                })
                .catch((err) => console.log(err));
            }}
            sx={{
              backgroundColor: '#F74747',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              padding: '0.3em 3em',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: '#F02D2D',
              },
            }}
          >
            Yes
          </Button>
        </Box>
      }
    >
      <Grid item xs={12} sx={{ padding: '0em 2em' }}>
        <Typography
          sx={{
            color: '3F3D56',
            fontSize: '1.1em',
            fontWeight: '600',
            width: 'relative',
            height: 'max-content',
          }}
        >
          Are you sure you want to leave this room?
        </Typography>

        <Typography
          sx={{
            margin: '0.5em 0em 2em 0em',
            color: '3F3D56',
            fontSize: '0.8em',
            fontWeight: '500',
            width: 'relative',
            height: 'max-content',
          }}
        >
          You can rejoin to this room if your professor accepts you again.
        </Typography>
      </Grid>
    </DIalogform>
  );
}

export default LeaveRoom;
