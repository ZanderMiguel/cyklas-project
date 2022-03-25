import React, { useState } from 'react';
import {
  Box,
  AppBar,
  CssBaseline,
  IconButton,
  Grid,
  Toolbar,
  Paper,
} from '@mui/material';
import {
  InfoOutlined,
  Info,
  PeopleAltOutlined,
  People,
  ChatOutlined,
  Chat,
  CoPresentOutlined,
  CoPresent,
} from '@mui/icons-material';
import { io } from 'socket.io-client';
import Collapse from '@mui/material/Collapse';
import Message_area from './TeleconSide/Message_area';
import Information from './TeleconSide/Info';
import Member from './TeleconSide/Member';
import Presentation from './TeleconSide/Presentation';

import useStyles from './Styles/Telecon_room_style';

const socket = io.connect('http://localhost:3001');

function Telecon_room() {
  const { designs } = useStyles();
  const [sidedrawer, setSideDrawer] = useState(false);
  const [buttontoggleI, setButtonToggleI] = useState(false);
  const [buttontoggleM, setButtonToggleM] = useState(false);
  const [buttontoggleMe, setButtonToggleMe] = useState(false);
  const [buttontoggleP, setButtonToggleP] = useState(false);

  const [sidecontent, setSideContent] = useState(null);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  const handleClickI = () => {
    setButtonToggleI((prev) => !prev);
    setSideDrawer((prev) => !prev);

    setSideContent(<Information />);

    setButtonToggleM(false);
    setButtonToggleMe(false);
    setButtonToggleP(false);
  };
  const handleClickM = () => {
    setButtonToggleM((prev) => !prev);

    setSideContent(
      <Message_area socket={socket} room={room} username={username} />
    );

    setSideDrawer(true);
    setButtonToggleI(false);
    setButtonToggleMe(false);
    setButtonToggleP(false);
  };
  const handleClickMe = () => {
    setButtonToggleMe((prev) => !prev);
    setSideDrawer(true);
    setButtonToggleI(false);
    setButtonToggleM(false);
    setButtonToggleP(false);
  };
  const handleClickP = () => {
    setButtonToggleP((prev) => !prev);
    setSideDrawer(true);
    setButtonToggleI(false);
    setButtonToggleM(false);
    setButtonToggleMe(false);
  };

  const Pasok = () => {
    if (username !== '' && room !== '') {
      socket.emit('joinroom', room, username);
    }
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ height: '100vh', width: '100%', backgroundColor: '#202124' }}>
        <AppBar
          style={{ backgroundColor: 'transparent', overflow: 'auto' }}
          position="fixed"
          elevation={0}
        >
          <Toolbar>
            <input
              type="text"
              placeholder="username"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="text"
              placeholder="Id"
              onChange={(event) => setRoom(event.target.value)}
            />
            <button onClick={Pasok}> send</button>
            <IconButton
              sx={designs.IconbuttonStyle}
              size="large"
              onClick={handleClickI}
            >
              {buttontoggleI === true ? (
                <Info sx={designs.button_click_style} fontSize="inherit" />
              ) : (
                <InfoOutlined sx={designs.buttonStyle} fontSize="inherit" />
              )}
            </IconButton>

            <IconButton
              sx={designs.IconbuttonStyle}
              size="large"
              onClick={handleClickM}
            >
              {buttontoggleM ? (
                <People sx={designs.button_click_style} fontSize="inherit" />
              ) : (
                <PeopleAltOutlined
                  sx={designs.buttonStyle}
                  fontSize="inherit"
                />
              )}
            </IconButton>

            <IconButton
              sx={designs.IconbuttonStyle}
              size="large"
              onClick={handleClickMe}
            >
              {!buttontoggleMe ? (
                <ChatOutlined sx={designs.buttonStyle} fontSize="inherit" />
              ) : (
                <Chat sx={designs.button_click_style} fontSize="inherit" />
              )}
            </IconButton>

            <IconButton
              sx={designs.IconbuttonStyle}
              size="large"
              onClick={handleClickP}
            >
              {!buttontoggleP ? (
                <CoPresentOutlined
                  sx={designs.buttonStyle}
                  fontSize="inherit"
                />
              ) : (
                <CoPresent sx={designs.button_click_style} fontSize="inherit" />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Box sx={designs.videoContainer}>
          <Box>
            <Collapse orientation="horizontal" in={sidedrawer}>
              <Paper sx={{ height: '90vh', width: '18rem', ml: 2 }}>
                {sidecontent}
              </Paper>
            </Collapse>
          </Box>
          <Paper sx={{ ml: 2, mr: 2, width: '100%' }}></Paper>
        </Box>
      </Box>
    </>
  );
}

export default Telecon_room;
