import React, { useState } from 'react';
import { Typography, Paper, IconButton, Grid } from '@mui/material';
import { MoreVert, AddCircle, Room } from '@mui/icons-material';
import { Buttons as Button, Boxs as Box } from './Component';
import Room_layout from '../Room-content-layout/Room_layout';
import useGet from '../customHooks/useGet';

function Rooms() {
  /* const [tiles, setRooms] = useState([
    {
      id: 1,
      title: 'Embedded Programming',
      subtitle: 'BSCS3A',
      date: 'Monday',
      time: '10:25',
    },
    {
      id: 2,
      title: 'Computational Science',
      subtitle: 'BSCS3A',
      date: 'Tuesday',
      time: '10:30',
    },
    {
      id: 3,
      title: 'Computational Science',
      subtitle: 'BSCS3A',
      date: 'Tuesday',
      time: '10:30',
    },
  ]); */

  const { data } = useGet('http://192.168.1.10:5000/rooms/room-create');

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
      <Grid item xs={12} sx={{ height: '75vh', overflow: 'auto' }}>
        {data && <Room_layout data={data} />}
      </Grid>
    </Grid>
  );
}

export default Rooms;
