import React from 'react';
import { Grid, Select, MenuItem, Typography } from '@mui/material';

function Drowpdown({ inputLabel, value, onChange, options, half }) {
  return (
    <>
      <Grid item xs={6} sm={half ? 6 : 12}>
        <Typography variant="body1" sx={{ ml: 1, mb: 1, fontWeight: 500 }}>
          {inputLabel}
        </Typography>
        <Select value={value} onChange={onChange} fullWidth>
          {options.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </>
  );
}

export default Drowpdown;
