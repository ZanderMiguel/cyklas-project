import React from 'react';
import { Input } from '@mui/material';
import useStyle from '../Styles/Essay_style';

function Essay() {
  const { designs } = useStyle();

  return (
    <>
      <Input
        variant="standard"
        multiline
        fullWidth
        rows={6}
        label="Type your answer here..."
        disableUnderline
        sx={designs.Essay_Input_Style}
      />
    </>
  );
}

export default Essay;
