import React, { useState } from 'react';
import { Box, Typography, FormControl, Select, MenuItem } from '@mui/material';
import virtualmeeting from '../assets/ImageJaven/Conference.png';
import Button from '../components/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TeleconStart() {
  const [selectRoom, setSelectRoom] = useState('');
  const [roomData, setRoomData] = useState(null);
  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        console.log(res.data);
        setRoomData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Box
        height="90vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="5rem"
      >
        <Box className="left" alignItems="flex-start" padding="0rem 1rem">
          <Typography
            sx={{
              marginBottom: '0.8em',
              color: '#007fff',
              fontSize: '2em',
              fontWeight: 600,
            }}
          >
            Connect with everyone <br /> in your class!
          </Typography>

          <Box
            marginTop="0.5em"
            width="100%"
            className="List"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <FiberManualRecordIcon
              sx={{ color: '#007FFF', fontSize: '1em', marginRight: '0.5em' }}
            />
            <Typography
              sx={{ fontSize: '1em', fontWeight: '400', color: '#3F3D56' }}
            >
              <span style={{ color: '#007FFF', fontWeight: 600 }}>Create</span>{' '}
              a room meeting for your class.
            </Typography>
          </Box>
          <Box
            marginTop="0.5em"
            width="100%"
            className="List"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <FiberManualRecordIcon
              sx={{ color: '#007FFF', fontSize: '1em', marginRight: '0.5em' }}
            />
            <Typography
              sx={{ fontSize: '1em', fontWeight: '400', color: '#3F3D56' }}
            >
              <span style={{ color: '#007FFF', fontWeight: 600 }}>Connect</span>{' '}
              and{' '}
              <span style={{ color: '#007FFF', fontWeight: 600 }}> see</span>{' '}
              everyone in your class.
            </Typography>
          </Box>
          <Box
            marginTop="0.5em"
            width="100%"
            className="List"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
          >
            <FiberManualRecordIcon
              sx={{ color: '#007FFF', fontSize: '1em', marginRight: '0.5em' }}
            />
            <Typography
              sx={{ fontSize: '1em', fontWeight: '400', color: '#3F3D56' }}
            >
              Have a {''}
              <span style={{ color: '#007FFF', fontWeight: 600 }}>
                safe
              </span>{' '}
              and {''}
              <span style={{ color: '#007FFF', fontWeight: 600 }}>
                protected
              </span>{' '}
              class meetings.
            </Typography>
          </Box>
          <Box width="100%" margin="2em 0em">
            <FormControl
              variant="standard"
              sx={{
                width: '100%',
                paddingTop: '0em',
              }}
            >
              <Typography
                children="Select Room"
                sx={{
                  fontWeight: '600',
                  color: '#2E2C46',
                  fontSize: '1.2em',
                  marginBottom: '0.5em',
                  textTransform: 'Uppercase',
                }}
              />
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectRoom}
                onChange={handleChangeRoom}
                label="SelectRoom"
                disableUnderline
                sx={{
                  backgroundColor: 'white',
                  border: '1px solid #DBDBDB',
                  borderRadius: '0.3em',
                  padding: '0.7em 0.9em',
                  width: '100%',
                  fontSize: '1em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  '&: hover': {
                    border: '1px solid #007FFF',
                  },
                }}
              >
                {roomData &&
                  roomData.map((item, index) => (
                    <MenuItem key={index} value={item._id}>
                      {item.RoomName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>

          <Box width="100%" margin="0em">
            <Typography
              sx={{ color: '#2E2C46', fontSize: '1.2em', fontWeight: 600 }}
            >
              MAKE CONFERENCE
            </Typography>
            <Button
              onClick={() => {
                localStorage.setItem('roomID', selectRoom);
              }}
              component={Link}
              to="/telecon-setup"
              target="_blank"
              variant="contained"
              content="Start a conference!"
              startIcon={<VideocamIcon />}
              sx={{
                fontWeight: '600',
                backgroundColor: '#0054A9',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.3em',
                width: '100%',
                margin: '0.5em 0em 0em 0em',
                boxShadow: 'none',
                '&: hover': { backgroundColor: '#00439A' },
              }}
            />
          </Box>
        </Box>
        <Box className="right">
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
