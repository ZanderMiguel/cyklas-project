import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import { Buttons as Button, Boxs as Box } from './Component';
import Room_layout from '../Room-content-layout/Room_layout';
import useGet from '../customHooks/useGet';
import CircularProgress from '@mui/material/CircularProgress';
import Create_room from '../Form_content/Create_room';

function Rooms() {
  const [opendialog, setOpenDialog] = useState(false);
  const { data, isPending, error } = useGet('http://localhost:8000/rooms');

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Grid
        container
        justifyContent="flex-end"
        rowSpacing={1}
        maxHeight="100vh"
      >
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
            onClick={handleCreate}
          >
            Create Room
          </Button>
        </Grid>
      </Grid>
      <Grid container maxHeight="80vh" overflow="auto">
        <Grid item>
          {opendialog && (
            <Create_room
              open={opendialog}
              close={handleCreateClose}
              maxWidth="md"
            />
          )}
        </Grid>

        {isPending && <CircularProgress />}
        {data && data.length > 0 ? (
          <Room_layout data={data} />
        ) : (
          <p>Nothing to display</p>
        )}
      </Grid>
    </>
  );
}

export default Rooms;
