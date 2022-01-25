import React from 'react';

import Grid from '@mui/material/Grid';
import Dialogform from '../components/Dialogform';
import Textfield from './Textfield';
import Select from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

const Terms = [
  {
    value: 'Two terms',
    label: 'Two terms',
  },
  {
    value: 'Three terms',
    label: 'Three terms',
  },
];
const Grading = [
  {
    value: 'Default',
    label: 'Default',
  },
  {
    value: 'Grading System 1',
    label: 'Grading System 1',
  },
  {
    value: 'Create',
    label: 'Create',
  },
];

function Create_room() {
  const [term, setTerm] = React.useState('Two terms');
  const [grade, setGrade] = React.useState('Default');
  const handleChangeTerm = (event) => {
    setTerm(event.target.value);
  };
  const handleChangeGrade = (event) => {
    setGrade(event.target.value);
  };

  return (
    <>
      <Dialogform
        title="Create your Room"
        btn={<Button variant="contained"> Create Room</Button>}
      >
        <Grid container rowSpacing={{ xs: 2 }} columnSpacing={{ xs: 2 }}>
          <Grid item sx={{ mt: 2 }} xs={6}>
            <Textfield label="Room" variant="outlined" />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={6}>
            <Textfield label="Course" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Textfield label="Class Day(s)" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Textfield label="Year and Section" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Textfield label="Time" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <Select
              select
              label="Terms"
              value={term}
              onChange={handleChangeTerm}
              fullWidth
            >
              {Terms.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={6}>
            <Select
              select
              label="Terms"
              value={grade}
              onChange={handleChangeGrade}
              fullWidth
            >
              {Grading.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </Dialogform>
    </>
  );
}

export default Create_room;
