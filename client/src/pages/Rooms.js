import React, { useState, useEffect } from 'react';
import { Typography, Paper, IconButton, Grid } from '@mui/material';
import { MoreVert, AddCircle, Room } from '@mui/icons-material';
import { Buttons as Button, Boxs as Box } from './Component';
import Room_layout from '../Room-content-layout/Room_layout';
import useGet from '../customHooks/useGet';

import CircularProgress from '@mui/material/CircularProgress';

function Rooms() {
  const [tiles, setRooms] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8000/rooms')
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setRooms(data);
  //     });
  // }, []);

  const { data } = useGet(
    'http://localhost:8000/rooms',
    setIsPending,
    setError
  );

  return (
    <Grid container>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <Button
            variant="contained"
            startIcon={<AddCircle />}
            sx={{
              backgroundColor: '#0069D3',
              fontWeight: 'bold',
              margin: '20px 0px 20px 645px',
              borderRadius: '0.4em',
              position: 'fix',
              right: '0px',
            }}
          >
            Create Room
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} sx={{ height: '75vh' }}>
        {error && <p>{error}</p>}
        {isPending && <CircularProgress />}
        {data && <Room_layout data={data} />}
      </Grid>
    </Grid>
  );
}

export default Rooms;
