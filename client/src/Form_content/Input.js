import React from 'react';
import {
  TextField,
  Grid,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

const Input = ({
  name,
  value,
  onChange,
  placeholder,
  autoFocus,
  type,
  handleShowPassword,
  half,
  size,
  inputLabel,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <Typography variant="body1" sx={{ ml: 1, mb: 1, fontWeight: 500 }}>
        {inputLabel}
      </Typography>
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        size={size}
        required
        fullWidth
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === 'password'
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === 'password' ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
