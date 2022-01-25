import React from 'react';
import TextField from '@mui/material/TextField';

function Textfield({ label, variant, id }) {
  return <TextField id={id} label={label} variant={variant} fullWidth />;
}

export default Textfield;
