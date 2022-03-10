import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from '../components/Input';
import Dropdown from '../components/Drowpdown';
import usePost from '../customHooks/usePost';
import Datetime from '../components/Datetime';

import { Grid, Button, Select } from '@mui/material';
import { ConstructionTwoTone } from '@mui/icons-material';

const classtimes = [
  {
    value: '10:30',
    label: '10:30',
  },
  {
    value: '11:30',
    label: '11:30',
  },
];
const Term = [
  {
    value: '2 Term',
    label: '2 Term',
  },
  {
    value: '3 Term',
    label: '3 Term',
  },
];

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

function Create_room({ open, close, maxWidth, state,userData,socket }) {
  const [roomname, setRoomname] = useState('');
  const [course, setCourse] = useState('');
  const [classday, setClassDay] = useState('');
  const [yearAndSection, setYearandsection] = useState('');
  const [classtime, setClassTime] = useState('10:30');
  const [term, setTerm] = useState('2 Term');
  const [gradingsystem, setGradingSystem] = useState('Default');

  const handleChangeTerm = (event) => {
    setTerm(event.target.value);
  };
  const handleChangeClassTime = (event) => {
    setClassTime(event.target.value);
  };
  const handleChangeGradingSystem = (event) => {
    setGradingSystem(event.target.value);
  };

  const { post } = usePost();

  const handleSubmit = (e) => {
    e.preventDefault();
    const room = {
      RoomName: roomname,
      Course: course,
      ClassDays: classday,
      yearAndSection,
      ClassTime: classtime,
      Terms: term,
      GradingSystem: gradingsystem,
    };
    
    post('http://localhost:5000/rooms/create', {userID: userData.data.user._id,...room});
    
    state(false);
    // if (post.data.message === 'Room Created') {
    //   console.log('tangina naman');
    // }
  };

  return (
    <>
      <Dialogform
        title="Create your Room!"
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Button variant="contained" type="submit" form="form1">
            Submit
          </Button>
        }
      >
        <form onSubmit={handleSubmit} id="form1">
          <Grid container spacing={2} sx={{ padding: 2, overflow: 'auto' }}>
            <Input
              inputLabel="Room Name"
              placeholder="Enter room name..."
              value={roomname}
              onChange={(e) => setRoomname(e.target.value)}
              autoFocus
              half
            />
            <Input
              inputLabel="Course"
              placeholder="Enter course..."
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              half
            />
            <Input
              inputLabel="Class Day"
              placeholder="Enter class day..."
              value={classday}
              onChange={(e) => setClassDay(e.target.value)}
              half
            />
            <Input
              inputLabel="Year and Section"
              placeholder="Enter year and section..."
              value={yearAndSection}
              onChange={(e) => setYearandsection(e.target.value)}
              half
            />
            <Dropdown
              inputLabel="Class Time"
              value={classtime}
              onChange={handleChangeClassTime}
              options={classtimes}
              half
            />
            <Grid item xs={12} sm={6}>
              <Datetime />
            </Grid>
            <Dropdown
              inputLabel="Terms"
              value={term}
              onChange={handleChangeTerm}
              options={Term}
              half
            />
            <Dropdown
              inputLabel="Grading System"
              value={gradingsystem}
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
