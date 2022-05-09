import React from 'react';
import { Box, Typography, Button, IconButton, Tooltip } from '@mui/material';
import {
  KeyboardVoiceOutlined,
  VideocamOffOutlined,
  ScreenShareOutlined,
  StopScreenShareOutlined,
  VideocamOutlined,
} from '@mui/icons-material';
import { FaObjectGroup } from 'react-icons/fa';
import { MdOutlineQuiz } from 'react-icons/md';
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined';
import Make_groups from '../Form_content/Make_groups';
import CusPopover from '../components/Popover';
import QuizPopover from '../components/PopoverContent/QuizPopover';
import Livequiz_queue from '../Form_content/Livequiz_queue';
import Leave_conference from '../Form_content/Leave_conference';
import JoinQuiz from '../Form_content/JoinQuiz';

function MainSessionFooter() {
  const [toggleMic, setToggleMic] = React.useState(false);
  const [toggleCam, setToggleCam] = React.useState(false);
  const [toggleScreenShare, setToggleScreenShare] = React.useState(false);

  const handleToggleMic = () => {
    setToggleMic((prev) => !prev);
  };
  const handleToggleCam = () => {
    setToggleCam((prev) => !prev);
  };
  const handleToggleScreenShare = () => {
    setToggleScreenShare((prev) => !prev);
  };

  const [opendialogMakeGroups, setOpenDialogMakeGroups] = React.useState(false);

  const handleCreateMakeGroups = () => {
    setOpenDialogMakeGroups(true);
  };

  const handleCreateCloseMakeGroups = () => {
    setOpenDialogMakeGroups(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const quiz = Boolean(anchorEl);
  const handleClickQuiz = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseQuiz = () => {
    setAnchorEl(null);
  };

  const [opendialog, setOpenDialog] = React.useState(false);

  const handleCreate = () => {
    setOpenDialog(true);
  };

  const handleCreateClose = () => {
    setOpenDialog(false);
  };

  // const [opendialogJoinQuiz, setOpenDialogJoinQuiz] =
  //   React.useState(false);

  // const handleCreateJoinQuiz = () => {
  //   setOpenDialogJoinQuiz(true);
  // };

  // const handleCreateCloseJoinQuiz = () => {
  //   setOpenDialogJoinQuiz(false);
  // };

  const [opendialogLeaveConference, setOpenDialogLeaveConference] =
    React.useState(false);

  const handleCreateLeaveConference = () => {
    setOpenDialogLeaveConference(true);
  };

  const handleCreateCloseLeaveConference = () => {
    setOpenDialogLeaveConference(false);
  };

  return (
    <>
      {/* Main Session Footer */}
      <Box
        sx={{
          width: 'relative',
          height: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.3em',
          padding: '0.6em 0em 0em 0em',
          borderTop: '1px solid #464646',
        }}
      >
        <Tooltip title={toggleMic ? 'Mute' : 'Unmute'} placement="top">
          <IconButton
            onClick={handleToggleMic}
            sx={
              toggleMic === true
                ? {
                    border: '1px solid #007FFF',
                    height: '1.8em',
                    width: '1.8em',
                    padding: '0.3em',
                    '&: hover': {
                      backgroundColor: '#282B31',
                    },
                  }
                : {
                    border: '1px solid #282B31',
                    outline: '1px solid #282B31',
                    height: '1.8em',
                    width: '1.8em',
                    padding: '0.3em',
                    backgroundColor: '#282B31',
                    '&: hover': {
                      backgroundColor: '#282B31',
                    },
                  }
            }
          >
            {toggleMic ? (
              <KeyboardVoiceOutlined sx={{ color: '#007FFF' }} />
            ) : (
              <MicOffOutlinedIcon sx={{ color: '#DEDEDE' }} />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip
          title={!toggleCam ? 'Open your Camera' : 'Close your Camera'}
          placement="top"
        >
          <IconButton
            onClick={handleToggleCam}
            sx={
              toggleCam === true
                ? {
                    border: '1px solid #007FFF',
                    height: '1.8em',
                    width: '1.8em',
                    padding: '0.3em',
                    '&: hover': {
                      backgroundColor: '#282B31',
                    },
                  }
                : {
                    border: '1px solid #282B31',
                    outline: '1px solid #282B31',
                    height: '1.8em',
                    width: '1.8em',
                    padding: '0.3em',
                    backgroundColor: '#282B31',
                    '&: hover': {
                      backgroundColor: '#282B31',
                    },
                  }
            }
          >
            {toggleCam ? (
              <VideocamOutlined sx={{ color: '#007FFF' }} />
            ) : (
              <VideocamOffOutlined sx={{ color: '#DEDEDE' }} />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip
          title={
            !toggleScreenShare
              ? 'Share your Screen'
              : 'Stop Sharing your Screen'
          }
          placement="top"
        >
          <IconButton
            onClick={handleToggleScreenShare}
            sx={
              toggleScreenShare === true
                ? {
                    border: '1px solid #007FFF',
                    height: '1.8em',
                    width: '1.8em',
                    padding: '0.3em',
                    '&: hover': {
                      backgroundColor: '#282B31',
                    },
                  }
                : {
                    border: '1px solid #282B31',
                    outline: '1px solid #282B31',
                    height: '1.8em',
                    width: '1.8em',
                    padding: '0.3em',
                    backgroundColor: '#282B31',
                    '&: hover': {
                      backgroundColor: '#282B31',
                    },
                  }
            }
          >
            {toggleScreenShare ? (
              <ScreenShareOutlined sx={{ color: '#007FFF' }} />
            ) : (
              <StopScreenShareOutlined sx={{ color: '#DEDEDE' }} />
            )}
          </IconButton>
        </Tooltip>

        <Tooltip title="Make Groups" placement="top">
          <IconButton
            onClick={handleCreateMakeGroups}
            sx={{
              border: '1px solid #DEDEDE',
              height: '1.8em',
              width: '1.8em',
              padding: '0.3em',
              '&: hover': {
                backgroundColor: '#282B31',
              },
            }}
          >
            <FaObjectGroup style={{ color: '#DEDEDE', fontSize: '0.8em' }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Conduct LIVE Quiz" placement="top">
          <IconButton
            onClick={handleClickQuiz}
            // onClick={handleCreateJoinQuiz}
            sx={{
              border: '1px solid #DEDEDE',
              height: '1.8em',
              width: '1.8em',
              padding: '0.3em',
              '&: hover': {
                backgroundColor: '#282B31',
              },
            }}
          >
            <MdOutlineQuiz style={{ color: '#DEDEDE', fontSize: '0.9em' }} />
          </IconButton>
        </Tooltip>

        {/* {opendialogJoinQuiz && (
          <JoinQuiz
            open={opendialogJoinQuiz}
            close={handleCreateCloseJoinQuiz}
            maxWidth="sm"
            state={setOpenDialogJoinQuiz}
          />
          )} */}

        <CusPopover
          open={quiz}
          anchorEl={anchorEl}
          onClose={handleCloseQuiz}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <QuizPopover />
        </CusPopover>

        {opendialog && (
          <Livequiz_queue
            open={opendialog}
            close={handleCreateClose}
            maxWidth="sm"
            state={setOpenDialog}
          />
        )}

        <Button
          onClick={handleCreateLeaveConference}
          children="Leave Meeting"
          sx={{
            paddingRight: '3em',
            paddingLeft: '3em',
            fontSize: '0.8em',
            fontWeight: '600',
            textTransform: 'Capitalize',
            backgroundColor: '#F02D2D',
            color: 'white',
            boxShadow: 'none',
            '&: hover': {
              backgroundColor: '#E72727',
              boxShadow: 'none',
            },
          }}
        />
        {opendialogLeaveConference && (
          <Leave_conference
            open={opendialogLeaveConference}
            close={handleCreateCloseLeaveConference}
            maxWidth="sm"
            state={setOpenDialogLeaveConference}
          />
        )}
        {opendialogMakeGroups && (
          <Make_groups
            open={opendialogMakeGroups}
            close={handleCreateCloseMakeGroups}
            maxWidth="md"
            state={setOpenDialogMakeGroups}
          />
        )}
      </Box>
    </>
  );
}

export default MainSessionFooter;
