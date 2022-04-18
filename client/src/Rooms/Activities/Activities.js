import React, { useState, useEffect } from 'react';
import { Container, Box, Button, Grid } from '@mui/material';
import Create_activity from '../../Form_content/Create_activity';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Activities_layout from './Activities_layout';
import axios from 'axios';

function Activities({ roomID }) {
  const [opendialog, setOpenDialog] = useState(false);
  const [activity, setActivity] = useState(null);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => {
    axios
      .post('http://localhost:5000/activity', { roomID })
      .then((res) => {
        setActivity(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Container maxWidth="md">
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 3 }}
      >
        <Box flexGrow={1} />
        <Button
          startIcon={<AddCircleIcon />}
          variant="contained"
          sx={{
            backgroundColor: '#007FFF',
            color: 'white',
            '&:hover': {
              backgroundColor: '#0072e6',
            },
            marginBottom: 2,
          }}
          onClick={handleClickOpen}
        >
          Create Activity
        </Button>
      </Box>
      {opendialog && <Create_activity open={opendialog} close={handleClose} />}
      <Grid container rowSpacing={2}>
        <Activities_layout roomID={roomID} activity={activity} />
      </Grid>
    </Container>
  );
}

export default Activities;
