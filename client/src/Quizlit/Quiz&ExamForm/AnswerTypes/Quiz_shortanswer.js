import React from 'react';
import { Input } from '@mui/material';
import useStyle from './Styles/Quiz_shortanswer_style';

function Quiz_shortanswer({questionMemo,counter}) {
  const { designs } = useStyle();

  const handleRows = (event) => {
    questionMemo.current[counter - 1][event.target.name] = event.target.value
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