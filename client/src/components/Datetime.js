import React from 'react';
import { TextField, Typography, Input } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';

export default function BasicTimePicker({
  inputLabel,
  classtime,
  setClassTime,
}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Typography variant="body1" sx={{ ml: 1, fontWeight: 500 }}>
        {inputLabel}
      </Typography>
      <TimePicker
        value={classtime}
        fullWidth
        onChange={(newValue) => {
          setClassTime(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} fullWidth label={false} />
        )}
      />
    </LocalizationProvider>
  );
}
