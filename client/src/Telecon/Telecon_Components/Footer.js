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
import Livequiz_queue from '../../Form_content/Livequiz_queue';
import Leave_conference from '../../Form_content/Leave_conference';
import Make_groups from '../../Form_content/Make_groups';

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
    setSideDrawer(true);
    setToggleInfo((prev) => !prev);
    if (toggleInfo === false) {
      setSideDrawer(true);
    } else {
      setSideDrawer(false);
    }
    setSideContent('Message');
    setToggleMember(false);
    setToggleMessage(false);
    setTogglePresent(false);
  };
  const handleToggleMember = () => {
    setToggleMember((prev) => !prev);
    setSideDrawer((prev) => !prev);
    setSideContent('Info');
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

  const [opendialog, setOpenDialog] = useState(false);

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  const [opendialogLeaveConference, setOpenDialogLeaveConference] =
    useState(false);

  const handleCreateLeaveConference = () => {
    setOpenDialogLeaveConference(true);
  };

  const handleCreateCloseLeaveConference = () => {
    setOpenDialogLeaveConference(false);
  };

  const [opendialogMakeGroups, setOpenDialogMakeGroups] = useState(false);

  const handleCreateMakeGroups = () => {
    setOpenDialogMakeGroups(true);
  };

  const handleCreateCloseMakeGroups = () => {
    setOpenDialogMakeGroups(false);
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
        <IconButton
          onClick={handleCreateMakeGroups}
          sx={designs.rightIcons.IconbuttonStyle}
          size="large"
        >
          <FaObjectGroup
            style={{ height: '24px', width: '24px', color: 'whiteSmoke' }}
          />
        </IconButton>
        {opendialogMakeGroups && (
          <Make_groups
            open={opendialogMakeGroups}
            close={handleCreateCloseMakeGroups}
            maxWidth="md"
            state={setOpenDialogMakeGroups}
          />
        )}
        <IconButton
          onClick={handleCreate}
          sx={designs.rightIcons.IconbuttonStyle}
          size="large"
        >
          <MdQuiz
            style={{ height: '24px', width: '24px', color: 'whiteSmoke' }}
          />
        </IconButton>
        {opendialog && (
          <Livequiz_queue
            open={opendialog}
            close={handleCreateClose}
            maxWidth="sm"
            state={setOpenDialog}
          />
        )}

        <IconButton
          onClick={handleCreateLeaveConference}
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
        {opendialogLeaveConference && (
          <Leave_conference
            open={opendialogLeaveConference}
            close={handleCreateCloseLeaveConference}
            maxWidth="sm"
            state={setOpenDialogLeaveConference}
          />
        )}
      </Box>
    </Box>
  );
}

export default Footer;
