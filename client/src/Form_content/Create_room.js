import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import Dropdown from '../components/Drowpdown';
import usePost from '../customHooks/usePost';
import moment from 'moment';
import axios from 'axios';
import { Grid, Button, Typography, Box } from '@mui/material';

const gradingsystems = [];

function Create_room({ open, close, maxWidth, state, socket, gs, setNewRoom }) {
  const [roomname, setRoomname] = useState('');
  const [course, setCourse] = useState('');
  const [classday, setClassDay] = useState('');
  const [yearAndSection, setYearandsection] = useState('');
  const [classtime, setClassTime] = useState('');
  const [gradingsystem, setGradingSystem] = useState('');

  const [roomnameError, setRoomnameError] = useState(false);
  const [gradingsystemError, setGradingSystemError] = useState(false);

  const handleChangeGradingSystem = (event) => {
    setGradingSystem(event.target.value);
  };
  const handleTime = (event) => {
    setClassTime(event.target.value);
  };
  React.useEffect(() => {
    gradingsystems.splice(0, gradingsystems.length);
    gs &&
      gs.map((item) => {
        gradingsystems.push({ value: item._id, label: item.GradingName });
      });
  }, []);

  const { post, data } = usePost();

  const handleSubmit = (event) => {
    event.preventDefault();
    setRoomnameError(false);
    setGradingSystemError(false);

    {
      roomname === '' && setRoomnameError(true);
    }
    {
      gradingsystem === '' && setGradingSystemError(true);
    }

    const room = {
      RoomName: roomname,
      Course: course,
      ClassDays: classday,
      yearAndSection,
      ClassTime: moment(`March 25,2022 ${classtime}`).format('h:mm a'),
      GradingSystem: gradingsystem,
    };

    if (roomname && gradingsystem) {
      axios
        .post('http://localhost:5000/rooms/create', {
          Host: {
            name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
              JSON.parse(localStorage.userData).data.user.lastName
            }`,
            avatar: JSON.parse(localStorage.userData).data.imageUrl,
          },
          userID: JSON.parse(localStorage.userData).data.user._id,
          gsID: gradingsystem,
          ...room,
          members: [JSON.parse(localStorage.userData).data.user._id],
        })
        .then((res) => {
          console.log(res.data);
          setNewRoom((prev) => !prev);
          if (res.data.status === 'success') {
            state(false);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <>
      <Dialogform
        title="Create your Room!"
        divider
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Button
            variant="contained"
            type="submit"
            form="form1"
            sx={{
              fontWeight: '600',
              boxShadow: 'none',
            }}
          >
            Submit
          </Button>
        }
      >
        <Typography
          sx={{
            marginLeft: '2em',
            color: '#3F3D56',
            fontSize: '0.8em',
            fontWeight: '400',
          }}
        >
          NOTE: &nbsp; Before creating a room you must have a grading system
          first. Go to (Records > Grading System)
        </Typography>
        <form onSubmit={handleSubmit} id="form1">
          <Grid
            container
            spacing={1}
            sx={{ padding: '1.5em 1em 0em 1.3em', overflow: 'auto' }}
          >
            <Grid item xs={6}>
              <Box
                sx={{
                  width: 'relative',
                  padding: '0em 0.5em 0.8em 0.5em',
                }}
              >
                <Typography
                  children="Room Name"
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                  }}
                />
                <Input
                  autoFocus
                  placeholder="Enter room name..."
                  autoComplete="off"
                  value={roomname}
                  onChange={(e) => setRoomname(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  width: 'relative',
                  padding: '0em 0.5em 0.8em 0.5em',
                }}
              >
                <Typography
                  children="Course"
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                  }}
                />

                <Input
                  placeholder="Enter course..."
                  autoComplete="off"
                  required
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  width: 'relative',
                  padding: '0em 0.5em 0.8em 0.5em',
                }}
              >
                <Typography
                  children="Class Day"
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                  }}
                />
                <Input
                  placeholder="Enter class day..."
                  autoComplete="off"
                  required
                  value={classday}
                  onChange={(e) => setClassDay(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  width: 'relative',
                  padding: '0em 0.5em 0.8em 0.5em',
                }}
              >
                <Typography
                  children="Year and Section"
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                  }}
                />
                <Input
                  placeholder="Enter year and section..."
                  autoComplete="off"
                  required
                  value={yearAndSection}
                  onChange={(e) => setYearandsection(e.target.value)}
                  fullWidth
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  width: 'relative',
                  padding: '0em 0.5em 0.8em 0.5em',
                }}
              >
                <Typography
                  children="Class time"
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                  }}
                />
                <Input
                  autoComplete="off"
                  value={classtime}
                  onChange={handleTime}
                  type="time"
                  fullWidth
                  required
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  width: 'relative',
                  padding: '0em 0.5em 0.8em 0.5em',
                }}
              >
                <Typography
                  children="Grading System"
                  sx={{
                    fontWeight: '500',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                  }}
                />
                <Dropdown
                  autoComplete="off"
                  value={gradingsystem}
                  error={gradingsystemError}
                  typeerror="Please select grading system. If doesnt have one make sure to create in RECORDS tab."
                  onChange={handleChangeGradingSystem}
                  options={gradingsystems}
                  fullWidth
                />
              </Box>
            </Grid>
          </Grid>
        </form>
      </Dialogform>
    </>
  );
}

export default Create_room;
