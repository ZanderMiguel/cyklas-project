import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import Dropdown from '../components/Drowpdown';
import usePost from '../customHooks/usePost';
import moment from 'moment';

import { Grid, Button } from '@mui/material';

const gradingsystems = [
  {
    value: 'Default',
    label: 'Default',
  },
  {
    value: 'CreateSystem1',
    label: 'CreateSystem1',
  },
];

function Create_room({ open, close, maxWidth, state, socket }) {
  const [roomname, setRoomname] = useState('');
  const [course, setCourse] = useState('');
  const [classday, setClassDay] = useState('');
  const [yearAndSection, setYearandsection] = useState('');
  const [classtime, setClassTime] = useState('');
  const [gradingsystem, setGradingSystem] = useState('Default');

  const handleChangeGradingSystem = (event) => {
    setGradingSystem(event.target.value);
  };
  const handleTime = (event) => {
    setClassTime(event.target.value);
  };

  const { post } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      RoomName: roomname,
      Course: course,
      ClassDays: classday,
      yearAndSection,
      ClassTime: moment(`March 25,2022 ${classtime}`).format('h:mm a'),
      GradingSystem: gradingsystem,
    };

    post('http://localhost:5000/rooms/create', {
      Host: {
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        avatar: JSON.parse(localStorage.userData).data.user.image,
      },
      userID: JSON.parse(localStorage.userData).data.user._id,
      ...room,
      members: [JSON.parse(localStorage.userData).data.user._id],
    });
    state(false);
    socket.emit('create-room');
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
        <form onSubmit={handleSubmit} id="form1">
          <Grid container spacing={2} sx={{ padding: 2, overflow: 'auto' }}>
            <Input
              inputLabel="Room Name"
              placeholder="Enter room name..."
              autoComplete="off"
              value={roomname}
              onChange={(e) => setRoomname(e.target.value)}
              autoFocus
              required
              half
            />
            <Input
              inputLabel="Course"
              placeholder="Enter course..."
              autoComplete="off"
              value={course}
              required
              onChange={(e) => setCourse(e.target.value)}
              half
            />
            <Input
              inputLabel="Class Day"
              placeholder="Enter class day..."
              autoComplete="off"
              value={classday}
              required
              onChange={(e) => setClassDay(e.target.value)}
              half
            />
            <Input
              inputLabel="Year and Section"
              placeholder="Enter year and section..."
              autoComplete="off"
              value={yearAndSection}
              required
              onChange={(e) => setYearandsection(e.target.value)}
              half
            />
            <Input
              inputLabel="Class time"
              autoComplete="off"
              required
              value={classtime}
              onChange={handleTime}
              type="time"
              half
            />
            <Dropdown
              inputLabel="Grading System"
              autoComplete="off"
              value={gradingsystem}
              required
              onChange={handleChangeGradingSystem}
              options={gradingsystems}
              half
            />
          </Grid>
        </form>
      </Dialogform>
    </>
  );
}

export default Create_room;
