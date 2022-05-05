import React, { useState, useEffect, useRef } from 'react';
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
  }, [opendialog]);
  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '1em',
        }}
      >
        <Box flexGrow={1} />
        <Button
          startIcon={<AddCircleIcon />}
          variant="contained"
          sx={{
            fontWeight: '600',
            backgroundColor: '#007FFF',
            color: 'white',
            boxShadow: 'none',
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
      {opendialog && (
        <Create_activity
          open={opendialog}
          close={handleClose}
          setOpenDialog={setOpenDialog}
        />
      )}
      {activity && activity.length === 0 && (
        <center>
          <h1> nothing to display!</h1>
        </center>
      )}
      {activity && (
        <Grid container rowSpacing={2} sx={{ paddingBottom: '1.5em' }}>
          <Activities_layout roomID={roomID} activity={activity} />
        </Grid>
      )}
    </>
  );
}

export default Activities;
