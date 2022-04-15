import React from 'react';
import { useParams } from 'react-router-dom';
import Announce_main from './Feed/Announce_main';
import Activities_main from './Activities/Activities_main';
import Members_main from './Members/Members_main';

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

function Rooms_inside2({ socket }) {
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
              <Box sx = {{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Typography
                  sx={{
                    fontSize: '1.2em',
                    fontWeight: "700",
                    color: '#3F3D56',
                    textTransform: 'Uppercase',
                  }}
                >
                  Embedded Programming
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.8em',
                    fontWeight: "500",
                    color: '#3F3D56',
                    textTransform: 'Uppercase'
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
          <Announce_main socket={socket} />
        ) : value === 1 ? (
          <Activities_main roomID={roomID} />
        ) : (
          <Members_main />
        )}
      </Container>
    </>
  );
}

export default Rooms_inside2;
