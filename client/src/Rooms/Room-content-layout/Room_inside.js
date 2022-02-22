import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from './Announce';
import FeedIcon from '../../assets/ImageJaven/FeedIcon.png';
import ActivitiesIcon from '../../assets/ImageJaven/ActivitiesIcon.png';
import MembersIcon from '../../assets/ImageJaven/MembersIcon.png';

import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { IoNewspaperSharp } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';
import Activities from './Activities';
import People from './People';

function Room_inside() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { as } = useParams();

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
              <Tabs value={value} onChange={handleChange}>
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
                  label="People"
                  disableRipple
                />
              </Tabs>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        {value === 0 ? (
          <Announce />
        ) : value === 1 ? (
          <Activities params={as} />
        ) : (
          <People />
        )}
      </Container>
    </>
  );
}

export default Room_inside;
