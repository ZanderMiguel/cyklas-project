import React, { useState } from 'react';
import { Box, CssBaseline, Paper } from '@mui/material';

import { io } from 'socket.io-client';
import Footer from './Telecon_Components/Footer';
import { Collapse } from '@mui/material';

import useStyles from './Styles/Telecon_room_style';
import Message_area from './TeleconSide/Message_area';
import Presentation from './TeleconSide/Presentation';
import Info from './TeleconSide/Info';
import Member from './TeleconSide/Member';

const socket = io.connect('http://localhost:3001');

function Telecon_room() {
  const { designs } = useStyles();
  const [sidedrawer, setSideDrawer] = useState(false);
  const [sidecontent, setSideContent] = useState('');
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
              marginLeft: '0.5em',
              marginRight: '0.5em',
              '& .MuiCollapse-wrapperInner': {
                width: '20rem',
              },
            }}
          >
            <Box
              position="relative"
              backgroundColor="white"
              height="100%"
              mt={1}
            >
              {sidecontent === 'Info' ? (
                <Info />
              ) 
              : 
              sidecontent === 'Member' ? (
                <Member />
              ) 
              : 
              sidecontent === 'Message' ? (
                <Message_area socket={socket} />
              ) 
              : 
              (
                sidecontent === 'Presentation' && <Presentation />
              )}
            </Box>
          </Collapse>
          <Paper sx={{ width: '100%', margin: '0.5em 0.5em 0em 0em' }}></Paper>
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
