import React from 'react';
import { Button, Box } from '@mui/material';
import DIalogform from '../Dialogform';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
function LeaveRoom({ open, close, setRefresher, roomID }) {
  return (
    <DIalogform
      open={open}
      close={close}
      btn={
        <>
          <Button variant="standard">No</Button>
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
                  close();
                  console.log(res.data);
                })
                .catch((err) => console.log(err));
            }}
          >
            {' '}
            Yes
          </Button>
        </>
      }
    >
      <Box margin="1.5em">Are you sure you want to leave this room?</Box>
    </DIalogform>
  );
}

export default LeaveRoom;
