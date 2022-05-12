import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import Create_activity from '../../../Form_content/Create_activity';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Activities_layout from './Activities_layout';
import axios from 'axios';
import NoActivities from '../../../assets/ImageJaven/NoActivities.png';

function Activities({ roomID, socket }) {
  const [opendialog, setOpenDialog] = useState(false);
  const [deleteRender, setDeleteRender] = useState(false);
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
        'https://murmuring-basin-16459.herokuapp.com/activity',
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
  }, [opendialog, deleteRender]);
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
        <Box
          sx={{
            width: '100%',
            height: '70vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <img
            src={NoActivities}
            alt="No Activities"
            style={{
              height: '13em',
              margin: '0em 2.5em 1.5em 0em',
            }}
          />
          <Typography
            children="You did not post any activities."
            sx={{
              fontSize: '1em',
              fontWeight: '600',
              color: '#3F3D56',
              marginBottom: '0.3em',
            }}
          />

          <Typography
            children="Start creating activities for your student to work on."
            sx={{
              fontSize: '0.8em',
              fontWeight: '500',
              color: '#8E8E8E',
              marginLeft: '0.8em',
            }}
          />
        </Box>
      )}
      {activity && (
        <Grid container rowSpacing={2} sx={{ paddingBottom: '1.5em' }}>
          <Activities_layout
            roomID={roomID}
            activity={activity}
            setDeleteRender={setDeleteRender}
            socket={socket}
          />
        </Grid>
      )}
    </>
  );
}

export default Activities;
