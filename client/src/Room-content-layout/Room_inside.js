import React from 'react';
import { useParams } from 'react-router-dom';
import Announce from './Announce';
import FeedIcon from '../assets/ImageJaven/FeedIcon.png';
import ActivitiesIcon from '../assets/ImageJaven/ActivitiesIcon.png';
import MembersIcon from '../assets/ImageJaven/MembersIcon.png';

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
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

function Room_inside() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { id } = useParams();

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
                  className="Tab"
                  label="Feed"
                  icon={<PhoneMissedIcon />}
                  disableRipple
                />
                <Tab
                  icon={<PhoneMissedIcon />}
                  label="Activities"
                  disableRipple
                />
                <Tab icon={<FavoriteIcon />} label="People" disableRipple />
              </Tabs>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Announce />
      </Container>
    </>
  );
}

export default Room_inside;
