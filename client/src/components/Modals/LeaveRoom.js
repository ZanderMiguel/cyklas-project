import React from 'react';
import { Button, Box } from '@mui/material';
import DIalogform from '../Dialogform';

function LeaveRoom({ open, close }) {
  return (
    <DIalogform
      open={open}
      close={close}
      btn={
        <>
          <Button variant="standard">No</Button>
          <Button variant="contained"> Yes</Button>
        </>
      }
    >
      <Box margin="1.5em">Are you sure you want to leave this room?</Box>
    </DIalogform>
  );
}

export default LeaveRoom;
