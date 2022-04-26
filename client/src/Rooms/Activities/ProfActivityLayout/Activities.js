import React, { useState, useEffect } from 'react';
import { Box, Button, Grid } from '@mui/material';
import Create_activity from '../../../Form_content/Create_activity';
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
    let unmounted = false;
    let source = axios.CancelToken.source();
    axios
      .post(
        'http://localhost:5000/activity',
        { roomID },
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        if (!unmounted) {
          setActivity(res.data);
        }
      })
      .catch((e) => {
        if (!unmounted) {
          if (axios.isCancel(e)) {
            console.log(`request cancelled:${e.message}`);
          } else {
            console.log('another error happened:' + e.message);
          }
        }
      });
    return () => {
      unmounted = true;
      source.cancel('Cancelling in cleanup');
    };
  }, []);
  return (
    <>
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
    </>
  );
}

export default Activities;
