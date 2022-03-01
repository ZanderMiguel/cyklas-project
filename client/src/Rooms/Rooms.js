import React, { useState, useEffect } from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Room_layout from './Room-content-layout/Room_layout_professor';
import useGet from '../customHooks/useGet';
import CircularProgress from '@mui/material/CircularProgress';
import Create_room from '../Form_content/Create_room';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Join_room from '../Form_content/Join_room';

import Button from '../components/Button';
import Room_layout_student from './Room-content-layout/Room_layout_student';

function Rooms() {
  const [opendialog, setOpenDialog] = useState(false);

  const { data, isPending, error } = useGet('http://localhost:5000/rooms');

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  const User = Boolean(false);

  return (
    <>
      <Container maxWidth="md">
        {User ? (
          <>
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
            <Grid container maxHeight="80vh">
              <Grid item>
                {opendialog && (
                  <Create_room
                    open={opendialog}
                    close={handleCreateClose}
                    maxWidth="md"
                    state={setOpenDialog}
                  />
                )}
              </Grid>
              {error && console.log(error)}
              {isPending && <CircularProgress />}
              {data && data.length > 0 ? (
                <Room_layout data={data} />
              ) : (
                <p>Nothing to display</p>
              )}
            </Grid>
          </>
        ) : (
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
                content="Join room"
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
            {opendialog && (
              <Join_room
                open={opendialog}
                close={handleCreateClose}
                maxWidth="sm"
                state={setOpenDialog}
              />
            )}
          </Grid>
        )}
        {data && data.length > 0 ? (
          <Room_layout_student data={data} />
        ) : (
          <Typography children="nothing to display" />
        )}
      </Container>
    </>
  );
}

export default Rooms;
