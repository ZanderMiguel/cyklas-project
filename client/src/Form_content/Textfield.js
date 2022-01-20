import React from 'react';
import TextField from '@mui/material/TextField';

function Textfield({ label, variant, fullWidth }) {
  return (
    <TextField id="outlined-basic" label={label} variant={variant} fullWidth />
  );
}

export default Textfield;
