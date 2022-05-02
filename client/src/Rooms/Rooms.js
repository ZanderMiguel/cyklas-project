import React, { useState } from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';
import Room_layout from './Room-content-layout/Room_layout_professor';
import CircularProgress from '@mui/material/CircularProgress';
import Create_room from '../Form_content/Create_room';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Join_room from '../Form_content/Join_room';
import usePost from '../customHooks/usePost';
import Button from '../components/Button';
import Room_layout_student from './Room-content-layout/Room_layout_student';
import { useParams } from 'react-router-dom';
import NoRoom from "../assets/ImageJaven/NoRoom.png";

function Rooms({ socket }) {
  const { roomID } = useParams();
  const [opendialog, setOpenDialog] = useState(false);

  const { post, data, error, isPending } = usePost();

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  const [newRoom, setNewRoom] = React.useState(null);

  socket.on('room-created', (created) => {
    setNewRoom(created);
  });

  React.useMemo(() => {
    post('http://localhost:5000/rooms', {
      userID: JSON.parse(localStorage.userData).data.user._id,
    });
  }, [newRoom]);
  return (
    <>
      <Container maxWidth="md" sx = {{ height: "auto", padding: "1.5em 0em" }}>
        {JSON.parse(localStorage.userData).data.user.userType ===
          'Professor' && (
          <>
            <Grid
              container
              justifyContent="flex-end"
              rowSpacing={1}
            >
              <Grid item>
                <Button
                  variant="contained"
                  content="create room"
                  sx={{
                    fontWeight: "600",
                    backgroundColor: '#007FFF',
                    color: 'white',
                    boxShadow: "none",
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
            <Grid container>
              <Grid item>
                {opendialog && (
                  <Create_room
                    open={opendialog}
                    close={handleCreateClose}
                    maxWidth="md"
                    state={setOpenDialog}
                    userData={JSON.parse(localStorage.userData)}
                    socket={socket}
                  />
                )}
              </Grid>
              {error && console.log(error)}
              {isPending && <CircularProgress />}
              {data && data.length > 0 ? (
                <Room_layout data={data} />
              ) : (
                <Box sx = {{
                  width: "100%",
                  height: "60vh",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "1.5em",
                  flexWrap: "wrap"
                }}>
                  <img src = {NoRoom} alt = "No Room"
                  style = {{
                    height: "12em"
                  }}/>
                  <Typography children = "You have no room to show."
                  sx = {{
                    fontSize: "0.9em",
                    fontWeight: "600",
                    color: "#3F3D56",
                    marginLeft: "0.8em"
                  }}/>
                </Box>
              )}
            </Grid>
          </>
        )}

        {JSON.parse(localStorage.userData).data.user.userType === 'Student' && (
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
                  content="Join room"
                  sx={{
                    fontWeight: "600",
                    backgroundColor: '#007FFF',
                    color: 'white',
                    boxShadow: "none",
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
            <Grid container>
              <Grid item>
                {opendialog && (
                  <Join_room
                    open={opendialog}
                    close={handleCreateClose}
                    maxWidth="sm"
                    state={setOpenDialog}
                  />
                )}
              </Grid>
                {error && console.log(error)}
                {isPending && <CircularProgress />}
                {data && data.length > 0 ? (
                  <Room_layout_student data={data} />
                ) : (
                  <Box sx = {{
                    width: "100%",
                    height: "60vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5em",
                    flexWrap: "wrap"
                  }}>
                    <img src = {NoRoom} alt = "No Room"
                    style = {{
                      height: "12em"
                    }}/>
                    <Typography children = "You have no room to show."
                    sx = {{
                      fontSize: "0.9em",
                      fontWeight: "600",
                      color: "#3F3D56",
                      marginLeft: "0.8em"
                    }}/>
                  </Box>
                )}
            </Grid>
            
          </>
        )}
      </Container>
    </>
  );
}

export default Rooms;
