import React, { useState } from 'react';
import { Box, CssBaseline, Paper } from '@mui/material';

import { io } from 'socket.io-client';
import Footer from './Telecon_Components/Footer';
import Collapse from '@mui/material/Collapse';

import useStyles from './Styles/Telecon_room_style';

const socket = io.connect('http://localhost:3001');

function Telecon_room() {
  const { designs } = useStyles();
  const [sidedrawer, setSideDrawer] = useState(false);

  const [sidecontent, setSideContent] = useState(false);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const handleUser = () => {
    if (username !== '' && room !== '') {
      socket.emit('joinroom', room, username);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ height: '100vh', width: '100%', backgroundColor: '#202124' }}>
        <Box sx={designs.videoContainer}>
          <Collapse
            orientation="horizontal"
            in={sidedrawer}
            sx={{
              marginRight: '1em',
              '& .MuiCollapse-wrapperInner': {
                width: '20rem',
              },
            }}
          >
            <Paper>{sidecontent}</Paper>
          </Collapse>

          <Paper sx={{ width: '100%' }}></Paper>
        </Box>
        <Footer
          setSideDrawer={setSideDrawer}
          setSideContent={setSideContent}
          socket={socket}
          username={username}
          room={room}
          setUsername={setUsername}
          setRoom={setRoom}
          handleUser={handleUser}
        />
      </Box>
    </>
  );
}

export default Telecon_room;
