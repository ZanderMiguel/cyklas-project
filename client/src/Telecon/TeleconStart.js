import React, { useState } from 'react';
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import Input from '../components/Input';
import virtualmeeting from '../assets/ImageJaven/Virtual Meeting 2.png';
import Button from '../components/Button';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Link } from 'react-router-dom';
import axios from 'axios';

const dataRoom = [
  {
    value: 'Web Development 1',
    label: 'Web Development 1',
  },
  {
    value: 'Art Appreciation',
    label: 'Art Appreciation',
  },
  {
    value: 'Science, Technology and Society',
    label: 'Science, Technology and Society',
  },
  {
    value: 'Software Engineering',
    label: 'Software Engineering',
  },
];

function TeleconStart() {
  const [selectRoom, setSelectRoom] = useState('');
  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/rooms', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        console.log(res);
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
        gap="3rem"
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
              <span style={{ color: '#2E2C46', fontWeight: 700 }}>Create</span>{' '}
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
              <span style={{ color: '2E2C46', fontWeight: 700 }}>Connect</span>{' '}
              and <span style={{ color: '2E2C46', fontWeight: 700 }}> see</span>{' '}
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
              <span style={{ color: '2E2C46', fontWeight: 700 }}>
                safe
              </span> and {''}
              <span style={{ color: '2E2C46', fontWeight: 700 }}>
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
                sx={{
                  fontWeight: '600',
                  color: '#2E2C46',
                  fontSize: '1.2em',
                  marginBottom: '0.5em',
                  textTransform: 'uppercase',
                }}
              >
                Select Room
              </Typography>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectRoom}
                onChange={handleChangeRoom}
                label="SelectRoom"
                disableUnderline
                sx={{
                  border: '1px solid #C4C4C4',
                  borderRadius: '0.3em',
                  padding: '0.7em 0.9em',
                  width: '100%',
                  fontSize: '1em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  '&: hover': {
                    border: '1px solid #212121',
                  },
                }}
              >
                {dataRoom.map(({ value, label }) => (
                  <MenuItem key={label} value={value}>
                    {label}
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
              component={Link}
              to="/telecon/room"
              target="_blank"
              variant="contained"
              content="Start a conference!"
              startIcon={<VideocamIcon />}
              sx={{
                backgroundColor: '#0054A9',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '0.3em',
                width: '100%',
                margin: '0.5em 0em 0em 0em',
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
