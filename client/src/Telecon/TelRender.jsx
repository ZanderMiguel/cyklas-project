import React from 'react';
import { io } from 'socket.io-client';
import { Box, CssBaseline, Slide } from '@mui/material';
import MainSessionHeader from './MainSessionHeader';
import MainSessionBody from './MainSessionBody';
import MainSessionFooter from './MainSessionFooter';
import RightContentSideBar from './RightContentSideBar';
import MeetingInformation from './MeetingInformation';
import Members from './Members';
import MessageArea from './TeleconSide/MessageArea';
import PresentationCriteria from './PresentationCriteria';
import { useParams, Redirect } from 'react-router-dom';
import _ from 'lodash';

function TelRender({ socket, socketID, myPeer }) {
  const [sidedrawer, setSideDrawer] = React.useState(false);
  const [sidecontent, setSideContent] = React.useState('');
  const messagelist = React.useRef([]);
  const { teleRoom } = useParams();
  const [renderer, setRenderer] = React.useState(false);
  const members = React.useRef([
    {
      camera: JSON.parse(localStorage.userData).data.user.image,
      memberName: `${JSON.parse(localStorage.userData).data.user.firstName} ${
        JSON.parse(localStorage.userData).data.user.lastName
      }`,
      stdID: JSON.parse(localStorage.userData).data.user._id,
      id: socketID,
      userType: JSON.parse(localStorage.userData).data.user.userType,
    },
  ]);

  React.useMemo(() => {
    socket.emit('joinroom', teleRoom, members.current, socketID);
  }, []);
  socket.on('rendered', (newMember) => {
    members.current = _.uniqBy(
      [...newMember, ...members.current],
      (item) => item.stdID
    );

    setRenderer((prev) => !prev);
  });

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
        <Box sx={{ display: 'flex', width: '100%' }}>
          <Box
            sx={{
              backgroundColor: '#171A20',
              height: '98vh',
              borderRadius: '0.4em',
              margin: '0.4em 0.5em 0em 0.5em',
              width: '100%',
              whiteSpace: 'pre',
            }}
          >
            <MainSessionHeader members={members} />

            <MainSessionBody
              myPeer={myPeer}
              renderer={renderer}
              socket={socket}
              members={members}
              setRenderer={setRenderer}
              socketID={socketID}
            />

            <MainSessionFooter
              members={members}
              socket={socket}
              teleRoom={teleRoom}
            />
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
                  <Members members={members} />
                ) : sidecontent === 'MessageArea' ? (
                  <MessageArea
                    messagelist={messagelist}
                    socket={socket}
                    teleRoom={teleRoom}
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

export default TelRender;
