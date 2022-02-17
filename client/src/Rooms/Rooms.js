import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import Room_layout from './Room-content-layout/Room_layout';
import useGet from '../customHooks/useGet';
import CircularProgress from '@mui/material/CircularProgress';
import Create_room from '../Form_content/Create_room';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import Button from '../components/Button';

function Rooms() {
  const [opendialog, setOpenDialog] = useState(false);

  const { data, isPending, error } = useGet('http://localhost:5000/rooms');

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Container maxWidth="md">
        <Grid
          container
          justifyContent="flex-end"
          rowSpacing={1}
          maxHeight="100vh"
          mt={2}
        >
          <Grid item>
            <Button
              variant="contained"
              content="create room"
              sx={{
                backgroundColor: '#007FFF',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#0072e6',
                },
                mb: 2,
              }}
              startIcon={<AddCircleOutlineOutlinedIcon />}
              onClick={handleCreate}
            />
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
      </Container>
    </>
  );
}

export default Rooms;
