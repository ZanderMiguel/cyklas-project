import React from 'react';
import { io } from 'socket.io-client';
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton,
  CssBaseline,
  Avatar,
  Tooltip,
  Collapse,
  Slide,
} from '@mui/material';
import MainSessionHeader from './MainSessionHeader';
import MainSessionBody from './MainSessionBody';
import MainSessionFooter from './MainSessionFooter';
import RightContentSideBar from './RightContentSideBar';
import MessageArea from './TeleconSide/MessageArea'
import MeetingInformation from './MeetingInformation';
import Members from './Members';
import PresentationCriteria from './PresentationCriteria';
import { useParams } from 'react-router-dom'

function TeleconRoomV2({ socket }) {
  const [sidedrawer, setSideDrawer] = React.useState(false);
  const [sidecontent, setSideContent] = React.useState('');
  const messagelist = React.useRef([])
  const { teleRoom } = useParams()
  const name = `${JSON.parse(localStorage.userData).data.user.firstName} ${JSON.parse(localStorage.userData).data.user.lastName
  }`
  const avatar = JSON.parse(localStorage.userData).data.user.image
  socket.emit('joinroom', teleRoom, name,avatar)
  console.log(teleRoom)
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundColor: '#21242B',
          overflowY: 'hidden',
          overflowX: 'hidden',
        }}
      >
        <Box sx={{ display: 'flex',width: '100%',}}>
          <Box
            sx={{
              backgroundColor: '#171A20',
              height: '98vh',
              borderRadius: '0.4em',
              margin: '0.4em 0.5em 0em 0.5em',
              width: '100%',whiteSpace: 'pre'
            }}
          >
            <MainSessionHeader />

            <MainSessionBody socket={socket} />

            <MainSessionFooter />
          </Box>

          <Box
            sx={{
              backgroundColor: '#171A20',
              height: '98vh',
              borderRadius: '0.4em 0em 0em 0.4em',
              display: 'flex',
              margin: '0.4em 0em 0em 0em',
            }}
          >
            <Slide direction="left" in={sidedrawer} mountOnEnter unmountOnExit>
              <Box sx={{ height: '98vh' }}>
                {sidecontent === 'MeetingInformation' ? (
                  <MeetingInformation />
                ) : sidecontent === 'Members' ? (
                  <Members />
                ) : sidecontent === 'MessageArea' ? (
                  <MessageArea
                    messagelist={messagelist}
                    teleRoom={teleRoom}
                    socket={socket}
                  />
                ) : (
                  sidecontent === 'PresentationCriteria' && (
                    <PresentationCriteria />
                  )
                )}
              </Box>
            </Slide>
          </Box>

          <RightContentSideBar
            setSideDrawer={setSideDrawer}
            setSideContent={setSideContent}
          />
        </Box>
      </Box>
    </>
  );
}

export default TeleconRoomV2;
