import React from 'react';
import {
  Grid,
  Select,
  MenuItem,
  Typography,
  FormControl,
  FormHelperText,
} from '@mui/material';

function Drowpdown({
  inputLabel,
  value,
  onChange,
  options,
  half,
  typeerror,
  error,
  ...rest
}) {
  return (
    <>
      <Grid item xs={6} sm={half ? 6 : 12}>
        <FormControl error={error ? true : false} fullWidth>
          <Typography variant="body1" sx={{ ml: 1, mb: 1, fontWeight: 500 }}>
            {inputLabel}
          </Typography>

          <Select value={value} onChange={onChange} fullWidth {...rest}>
            {options.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Select>
          {error ? <FormHelperText>{typeerror}</FormHelperText> : null}
        </FormControl>
      </Grid>
    </>
  );
}

export default Drowpdown;
