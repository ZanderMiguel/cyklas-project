import React, { useState } from 'react';
import Dialogform from '../components/Dialogform';
import Input from './Input';
import Dropdown from './Drowpdown';
import usePost from '../customHooks/usePost';

import { Grid, Button } from '@mui/material';

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

function Create_room({ open, close, maxWidth }) {
  const [roomname, setRoomname] = useState('');
  const [course, setCourse] = useState('');
  const [classday, setClassDay] = useState('');
  const [yearandsection, setYearandSection] = useState('');
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
      title: roomname,
      subtitle: course,
      date: classday,
      yearandsection,
      time: classtime,
      term,
      gradingsystem,
    };
    post('http://localhost:8000/rooms', room);

    // axios
    //   .post('http://localhost:8000/rooms', room)
    //   .then((res) => {
    //     console.log(res);
    //     console.log('new room added');
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
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
              value={yearandsection}
              onChange={(e) => setYearandSection(e.target.value)}
              half
            />
            <Dropdown
              inputLabel="Class Time"
              value={classtime}
              onChange={handleChangeClassTime}
              options={classtimes}
              half
            />
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
            <Grid container justifyContent="flex-end">
              <Grid item></Grid>
            </Grid>
          </Grid>
        </form>
      </Dialogform>
    </>
  );
}

export default Create_room;
