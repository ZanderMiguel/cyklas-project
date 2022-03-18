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
  label,
  value,
  onChange,
  placeholder,
  autoFocus,
  type,
  handleShowPassword,
  half,
  size,
  required,
  inputLabel,
  rows,
  multiline,
  variant,
  ...rest
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <Typography variant="body1" sx={{ ml: 1, mb: 1, fontWeight: 500 }}>
        {inputLabel}
      </Typography>
      <TextField
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        variant={variant}
        size={size}
        required={required}
        fullWidth
        multiline={multiline}
        rows={rows}
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
        {...rest}
      />
    </Grid>
  );
};

export default Input;
