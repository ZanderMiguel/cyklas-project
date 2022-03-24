import React from 'react';
import { Input } from '@mui/material';
import useStyle from '../Styles/Essay_style';

function Essay() {
  const { designs } = useStyle();

  const handleRows = (event) => {
    console.log(event);
  };

  return (
    <>
      <Input
        variant="standard"
        multiline
        rows={3}
        fullWidth
        label="Type your answer here..."
        disableUnderline
        onChange={handleRows}
        sx={designs.Essay_Input_Style}
      />
    </>
  );
}

export default Essay;
