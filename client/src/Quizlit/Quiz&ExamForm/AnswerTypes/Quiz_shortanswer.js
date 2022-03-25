import React from 'react';
import { Input } from '@mui/material';
import useStyle from './Styles/Quiz_shortanswer_style';

function Quiz_shortanswer() {
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

export default Quiz_shortanswer;