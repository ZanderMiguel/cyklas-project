import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from '../Feed/Announce';
import Activities from '../Activities/Activities';
import Member from '../Members/Member';

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

function Room_inside({ socket }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { roomID } = useParams();

  return (
    <>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: '#FCFCFC' }}
      >
        <Toolbar>
          <Container maxWidth="xl">
            <Box display="flex" flexWrap="wrap">
              <Box>
                <Typography
                  sx={{
                    fontSize: '1.5em',
                    fontWeight: 650,
                    color: '#3F3D56',
                    textTransform: 'Uppercase',
                  }}
                >
                  Embedded Programming
                </Typography>

                <Typography
                  sx={{
                    fontSize: '1em',
                    fontWeight: 500,
                    color: '#3F3D56',
                    textTransform: 'Uppercase',
                    alignSelf: 'flex-start',
                    display: 'block',
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
      <Container maxWidth="md">
        {value === 0 ? (
          <Announce socket={socket} />
        ) : value === 1 ? (
          <Activities roomID={roomID} />
        ) : (
          <Member />
        )}
      </Container>
    </>
  );
}

export default Room_inside;
