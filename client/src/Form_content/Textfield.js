import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';

function Textfield({ label, variant, id }) {
  return <TextField id={id} label={label} variant={variant} fullWidth />;
}

export default Textfield;
