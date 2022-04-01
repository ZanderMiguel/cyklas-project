import React from 'react';
import { Box, Typography } from '@mui/material';
import Input from '../components/Input';
import virtualmeeting from '../assets/ImageJaven/Virtual Meeting 2.png';
import Button from '../components/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Link } from 'react-router-dom';

function TeleconStart() {
  return (
    <>
      <Box
        height="90vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="3rem"
      >
        <Box className="left" alignItems="flex-start" padding="1rem">
          <Typography
            variant="h4"
            sx={{ mb: 2, color: '#007fff', fontWeight: 600 }}
          >
            Connect with everyone <br /> in your class!
          </Typography>

          <Box
            className="List"
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <FiberManualRecordIcon
              sx={{ color: '#007FFF', fontSize: 20, marginRight: 3 }}
            />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
            >
              <span style={{ color: 'black', fontWeight: 700 }}>Create</span> a
              room meeting for your class.
            </Typography>
          </Box>
          <Box className="List" display="flex" alignItems="center">
            <FiberManualRecordIcon
              sx={{ color: '#007FFF', fontSize: 20, marginRight: 3 }}
            />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
            >
              <span style={{ color: 'black', fontWeight: 700 }}>Connect</span>{' '}
              and <span style={{ color: 'black', fontWeight: 700 }}> see</span>{' '}
              everyone in your class.
            </Typography>
          </Box>
          <Box className="List" display="flex" alignItems="center" mb={2}>
            <FiberManualRecordIcon
              sx={{ color: '#007FFF', fontSize: 20, marginRight: 3 }}
            />
            <Typography
              variant="h6"
              component="h6"
              sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
            >
              Have a {''}
              <span style={{ color: 'black', fontWeight: 700 }}>
                safe
              </span> and {''}
              <span style={{ color: 'black', fontWeight: 700 }}>
                protected
              </span>{' '}
              class meetings.
            </Typography>
          </Box>
          <Box mb={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              ROOM
            </Typography>
            <Input placeholder="Room name" size="small" />
          </Box>
          <Box mb={2}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>
              MAKE CONFERENCE
            </Typography>
            <Button
              component={Link}
              to="/telecon/room"
              target="_blank"
              variant="outlined"
              content="Start a conference!"
              startIcon={<VideocamIcon />}
              size="large"
              sx={{ textDecoration: 'none', borderRadius: 10, ml: 5 }}
            />
          </Box>
        </Box>
        <Box className="right" padding="1rem">
          <img
            src={virtualmeeting}
            alt="VirtualMeeting"
            style={{ width: '35rem', height: 'auto', maxWidth: '100%' }}
          />
        </Box>
      </Box>
    </>
  );
}

export default TeleconStart;
