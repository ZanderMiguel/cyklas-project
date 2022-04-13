import React from 'react';
import { Input, Grid } from '@mui/material';
import useStyle from './Styles/Exam_shortanswer_style';

function Exam_shortanswer() {
  const { designs } = useStyle();

  const handleRows = (event) => {
    console.log(event);
  };

  return (
    <>
      <Grid item xs={12} sx={{ padding: '0em 2em 1.5em 2em' }}>
        <Input
          variant="standard"
          multiline
          rows={6}
          fullWidth
          placeholder="Students will write their answers in here."
          readOnly
          disableUnderline
          onChange={handleRows}
          sx={designs.ShortAnswer_Input_Style}
        />
      </Grid>
    </>
  );
}

export default Exam_shortanswer;
