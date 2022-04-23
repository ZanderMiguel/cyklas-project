import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Announce from '../Feed/Announce';
import Activities from '../Activities/Activities';
import Member from '../Members/Member';
import Student_activities from '../../student_side/Rooms/Activities/Activities_main';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
} from '@mui/material';
import { IoNewspaperSharp } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import axios from 'axios';

function Room_inside({ socket }) {
  const [value, setValue] = React.useState(0);
  const [roomdata, setRoomData] = React.useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { roomID } = useParams();

  useEffect(() => {
    axios
      .post('http://localhost:5000/rooms/my-room', { roomID })
      .then((res) => {
        setRoomData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {roomdata && (
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
                    {roomdata.RoomName}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: '500',
                      color: '#3F3D56',
                      textTransform: 'Uppercase',
                    }}
                  >
                    {roomdata.Course} {roomdata.yearAndSection}
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
      )}

      <Container maxWidth="md">
        {value === 0 ? (
          <Announce socket={socket} />
        ) : value === 1 ? (
          JSON.parse(localStorage.userData).data.user.userType ===
          'Professor' ? (
            <Activities roomID={roomID} />
          ) : (
            <Student_activities />
          )
        ) : (
          <Member roomdata={roomdata} />
        )}
      </Container>
    </>
  );
}

export default Room_inside;
