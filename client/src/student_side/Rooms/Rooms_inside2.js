import React from 'react';
import { useParams } from 'react-router-dom';
import Announce_main from './Feed/Announce_main';
import Activities_main from '../../Rooms/Activities/StudentsActivtityLayout/Activities_main';
import Members_main from '../../Rooms/Members/StudentMembers/Members_main';

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

function Rooms_Inside2({ socket }) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [roomData, setRoomData] = React.useState(null);
  const { roomID } = useParams();
  console.log(roomID);

  React.useMemo(() => {
    axios
      .post('http://localhost:5000/requests/to-join', {
        userID: JSON.parse(localStorage.userData).data.user._id,
        userName: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        roomID,
        userImage: JSON.parse(localStorage.userData).data.user.image,
      })
      .then((res) => {
        setRoomData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  roomData && console.log(roomData)
  return (
    <>
      {roomData && roomData.room ? (
        <>
          <AppBar
            position="sticky"
            elevation={1}
            sx={{ backgroundColor: '#FCFCFC' }}
          >
            <Toolbar>
              <Container maxWidth="xl">
                <Box display="flex" flexWrap="wrap">
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '1.2em',
                        fontWeight: '700',
                        color: '#3F3D56',
                        textTransform: 'Uppercase',
                      }}
                    >
                      Embedded Programming
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: '0.8em',
                        fontWeight: '500',
                        color: '#3F3D56',
                        textTransform: 'Uppercase',
                      }}
                    >
                      BSCS 3A
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
          <Container maxWidth="lg">
            {value === 0 ? (
              <Announce_main socket={socket} roomID={roomID} />
            ) : value === 1 ? (
              <Activities_main roomID={roomID} />
            ) : (
              <Members_main roomData={roomData}/>
            )}
          </Container>
        </>
      ) : (
        <center>
          <h1>{roomData && roomData.message}</h1>
        </center>
      )}
    </>
  );
}

export default Rooms_Inside2;
