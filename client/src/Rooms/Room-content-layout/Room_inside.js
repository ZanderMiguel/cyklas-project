import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Announce from '../Feed/Announce';
import Activities from '../Activities/ProfActivityLayout/Activities';
import Activities_main from '../Activities/StudentsActivtityLayout/Activities_main';
import Member from '../Members/ProfMembers/Member';
import MemberStudents from '../../Rooms/Members/StudentMembers/Members_main';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { IoNewspaperSharp } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import axios from 'axios';
import RequestSent from '../../assets/ImageJaven/RequestSent.png';

function Room_inside({ socket }) {
  const [value, setValue] = useState(0);
  const [roomdata, setRoomData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { roomID } = useParams();

  useEffect(() => {
    axios
      .post('http://localhost:5000/requests/to-join', {
        userID: JSON.parse(localStorage.userData).data.user._id,
        userName: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        roomID,
        userImage: JSON.parse(localStorage.userData).data.imageUrl,
      })
      .then((res) => {
        setRoomData(res.data);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err);
        setIsPending(false);
      });
  }, []);

  return (
    <>
      {isPending && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
      {roomdata && roomdata.room && (
        <>
          <AppBar
            position="sticky"
            elevation={1}
            sx={{ backgroundColor: '#FCFCFC' }}
          >
            <Toolbar>
              <Container maxWidth="xl">
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '1.2em',
                        fontWeight: '700',
                        color: '#3F3D56',
                        textTransform: 'Uppercase',
                      }}
                    >
                      {roomdata.room.RoomName}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.8em',
                        fontWeight: '500',
                        color: '#3F3D56',
                        textTransform: 'Uppercase',
                      }}
                    >
                      {roomdata.room.Course} {roomdata.room.yearAndSection}
                    </Typography>
                  </Box>
                  <Box flexGrow={1} />
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    <Tab
                      icon={<FaClipboardList size={25} />}
                      iconPosition="start"
                      label="Feed"
                      disableRipple
                    />
                    <Tab
                      icon={<IoNewspaperSharp size={25} />}
                      iconPosition="start"
                      label="Activities"
                      disableRipple
                    />
                    <Tab
                      icon={<HiUserGroup size={25} />}
                      iconPosition="start"
                      label="Members"
                      disableRipple
                    />
                  </Tabs>
                </Box>
              </Container>
            </Toolbar>
          </AppBar>
          <Container maxWidth="md">
            {value === 0 ? (
              <Announce socket={socket} />
            ) : value === 1 ? (
              JSON.parse(localStorage.userData).data.user.userType ===
              'Professor' ? (
                <Activities roomID={roomID} socket={socket} />
              ) : (
                <Activities_main roomID={roomID} socket={socket} />
              )
            ) : JSON.parse(localStorage.userData).data.user.userType ===
              'Student' ? (
              <MemberStudents roomdata={roomdata} />
            ) : (
              <Member roomdata={roomdata} />
            )}
          </Container>
        </>
      )}
      {roomdata && !roomdata.room && (
        <Box
          sx={{
            width: '100%',
            height: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <img
            src={RequestSent}
            alt="Request Sent"
            style={{
              height: '12em',
              marginBottom: '1.5em',
            }}
          />
          <Typography
            children="You have sent your join request."
            sx={{
              fontSize: '1em',
              fontWeight: '600',
              color: '#3F3D56',
              marginBottom: '0.3em',
            }}
          />

          <Typography
            children="Please wait until your professor accepted you to be his/ her student."
            sx={{
              fontSize: '0.8em',
              fontWeight: '500',
              color: '#8E8E8E',
              marginLeft: '0.8em',
            }}
          />
        </Box>
      )}
    </>
  );
}

export default Room_inside;
