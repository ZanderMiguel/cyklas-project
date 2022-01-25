import React from 'react';

import Grid from '@mui/material/Grid';
import Dialogform from '../components/Dialogform';
import Textfield from './Textfield';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

function Create_room() {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Dialogform title="Create your Room">
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
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </Grid>
        </Grid>
      </Dialogform>
    </>
  );
}

export default Create_room;
