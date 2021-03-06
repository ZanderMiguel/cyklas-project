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
  MicNoneOutlined,
  MicOffOutlined,
  VideocamOutlined,
  VideocamOffOutlined,
  ScreenShareOutlined,
  StopScreenShareOutlined,
  CallEnd,
} from '@mui/icons-material';
import { MdQuiz } from 'react-icons/md';
import { FaObjectGroup } from 'react-icons/fa';
import useStyles from '../Styles/Telecon_room_style';
import Message_area from '../TeleconSide/Message_area';
import Information from '../TeleconSide/Info';
import Member from '../TeleconSide/Member';
import Presentation from '../TeleconSide/Presentation';

function Footer({
  setSideDrawer,
  setSideContent,
  socket,
  username,
  room,
  setUsername,
  setRoom,
  handleUser,
}) {
  const { designs } = useStyles();

  //left icons
  const [toggleInfo, setToggleInfo] = useState(false);
  const [toggleMember, setToggleMember] = useState(false);
  const [toggleMessage, setToggleMessage] = useState(false);
  const [togglePresent, setTogglePresent] = useState(false);

  //right icons
  const [toggleMic, setToggleMic] = useState(true);
  const [toggleVid, setToggleVid] = useState(true);
  const [toggleShareScreen, setToggleShareScreen] = useState(true);

  //left icons events
  const handleToggleInfo = () => {
    setToggleInfo((prev) => !prev);
    setSideDrawer((prev) => !prev);
    setSideContent(<Information />);
    setToggleMember(false);
    setToggleMessage(false);
    setTogglePresent(false);
  };
  const handleToggleMember = () => {
    setToggleMember((prev) => !prev);
    setSideDrawer((prev) => !prev);
    setSideContent(<Information />);
    setToggleInfo(false);
    setToggleMessage(false);
    setTogglePresent(false);
  };
  const handleToggleMessage = () => {
    setToggleMessage((prev) => !prev);
    setSideDrawer((prev) => !prev);
    setSideContent(<Information />);
    setToggleInfo(false);
    setToggleMember(false);
    setTogglePresent(false);
  };
  const handleTogglePresent = () => {
    setTogglePresent((prev) => !prev);
    setSideDrawer((prev) => !prev);
    setSideContent(<Information />);
    setToggleInfo(false);
    setToggleMember(false);
    setToggleMessage(false);
  };

  <Message_area socket={socket} room={room} username={username} />;

  //right icons events
  const handleToggleMic = () => {
    setToggleMic((prev) => !prev);
  };
  const handleToggleVid = () => {
    setToggleVid((prev) => !prev);
  };
  const handleToggleShareScreen = () => {
    setToggleShareScreen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0px',
        backgroundColor: '#202124',
        color: 'whitesmoke',
        width: '100%',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0px 1.5em',
      }}
    >
      {/* <input
        type="text"
        placeholder="username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="Id"
        onChange={(event) => setRoom(event.target.value)}
      />
      <button onClick={handleUser}> send</button> */}

      {/* left icons */}

      <Box sx={designs.icon_container}>
        <IconButton
          sx={designs.leftIcons.IconbuttonStyle}
          size="large"
          onClick={handleToggleInfo}
        >
          {toggleInfo === true ? (
            <Info sx={designs.leftIcons.button_click_style} />
          ) : (
            <InfoOutlined sx={designs.leftIcons.buttonStyle} />
          )}
        </IconButton>

        <IconButton
          sx={designs.leftIcons.IconbuttonStyle}
          size="large"
          onClick={handleToggleMember}
        >
          {toggleMember ? (
            <People sx={designs.leftIcons.button_click_style} />
          ) : (
            <PeopleAltOutlined sx={designs.leftIcons.buttonStyle} />
          )}
        </IconButton>

        <IconButton
          sx={designs.leftIcons.IconbuttonStyle}
          size="large"
          onClick={handleToggleMessage}
        >
          {!toggleMessage ? (
            <ChatOutlined sx={designs.leftIcons.buttonStyle} />
          ) : (
            <Chat sx={designs.leftIcons.button_click_style} />
          )}
        </IconButton>

        <IconButton
          sx={designs.leftIcons.IconbuttonStyle}
          size="large"
          onClick={handleTogglePresent}
        >
          {!togglePresent ? (
            <CoPresentOutlined sx={designs.leftIcons.buttonStyle} />
          ) : (
            <CoPresent sx={designs.leftIcons.button_click_style} />
          )}
        </IconButton>
      </Box>

      {/* right icons */}

      <Box sx={designs.icon_container}>
        <IconButton
          sx={
            toggleMic === true
              ? designs.rightIcons.IconbuttonStyle
              : {
                  ml: 0.5,
                  backgroundColor: '#f44336',
                  '&:hover': {
                    backgroundColor: '#f44336',
                  },
                }
          }
          size="large"
          onClick={handleToggleMic}
        >
          {toggleMic ? (
            <MicNoneOutlined sx={designs.rightIcons.button_click_style} />
          ) : (
            <MicOffOutlined sx={designs.rightIcons.buttonStyle} />
          )}
        </IconButton>
        <IconButton
          sx={
            toggleVid === true
              ? designs.rightIcons.IconbuttonStyle
              : {
                  ml: 0.5,
                  backgroundColor: '#f44336',
                  '&:hover': {
                    backgroundColor: '#f44336',
                  },
                }
          }
          size="large"
          onClick={handleToggleVid}
        >
          {toggleVid ? (
            <VideocamOutlined sx={designs.rightIcons.button_click_style} />
          ) : (
            <VideocamOffOutlined sx={designs.rightIcons.buttonStyle} />
          )}
        </IconButton>
        <IconButton
          sx={
            toggleShareScreen
              ? designs.rightIcons.IconbuttonStyle
              : {
                  ml: 0.8,
                  backgroundColor: '#007FFF',
                  '&:hover': {
                    backgroundColor: '#007FFF',
                  },
                }
          }
          size="large"
          onClick={handleToggleShareScreen}
        >
          {toggleShareScreen ? (
            <ScreenShareOutlined sx={designs.rightIcons.button_click_style} />
          ) : (
            <ScreenShareOutlined sx={designs.rightIcons.buttonStyle} />
          )}
        </IconButton>
        <IconButton sx={designs.rightIcons.IconbuttonStyle} size="large">
          <FaObjectGroup
            style={{ height: '24px', width: '24px', color: 'whiteSmoke' }}
          />
        </IconButton>
        <IconButton sx={designs.rightIcons.IconbuttonStyle} size="large">
          <MdQuiz
            style={{ height: '24px', width: '24px', color: 'whiteSmoke' }}
          />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: '#f44336',
            ml: 0.5,
            '&:hover': {
              backgroundColor: '#f44336',
            },
          }}
          size="large"
        >
          <CallEnd
            style={{ height: '24px', width: '24px', color: 'whiteSmoke' }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
