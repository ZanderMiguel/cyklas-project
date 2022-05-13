import * as React from 'react';
import { Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';

function Datepicker({ inputLabel, half, duedate, setDueDate, styled }) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Typography variant="body1" sx={{ ml: 1, mb: 1, fontWeight: 500 }}>
          {inputLabel}
        </Typography>
        <DatePicker
          value={duedate}
          onChange={(newValue) => {
            setDueDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              autoComplete="off"
              disabled
              fullWidth
              variant={styled}
              {...params}
            />
          )}
        />
      </LocalizationProvider>
    </Grid>
  );
}

export default Datepicker;
