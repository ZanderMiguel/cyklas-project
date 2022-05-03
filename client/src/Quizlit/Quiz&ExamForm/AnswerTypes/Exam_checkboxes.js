import React from 'react';
import { Grid, Button, Box, Checkbox, Input } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import useStyle from './Styles/Exam_checkboxes_style';

function Exam_checkboxes({ counter, questionMemo }) {
  const { designs } = useStyle();
  const handleChange = (e) => {

    questionMemo.current[counter - 1][e.target.name] = e.target.value;

  }
  const handleCheck = (event) => {
    if (event.target.checked) {
      questionMemo.current[counter - 1]['correctAnswer'] += `${event.target.name},`;
      questionMemo.current[counter - 1]['correctAnswer'] = questionMemo.current[counter - 1]['correctAnswer'].replace('undefined', '')
      console.log(questionMemo.current[counter - 1]['correctAnswer'])
    }
    if(event.target.checked === false){
      questionMemo.current[counter - 1]['correctAnswer'] = questionMemo.current[counter - 1]['correctAnswer'].replace(`${event.target.name},`, '')
      console.log(questionMemo.current[counter - 1]['correctAnswer'])
    }
  }
  return (
    <>
      <Grid container rowSpacing={1} sx={{ padding: '0em 2em 1.5em 2em' }}>
        <Grid item xs={12}>
          <Box className="Option1" sx={designs.Answer_A_Style}>
            <Checkbox sx={designs.Checkbox_Style} onChange={(e) => { handleCheck(e) }} name='answer1' />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
              onChange={(event => handleChange(event))}
              name="answer1"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Option2" sx={designs.Answer_B_Style}>
            <Checkbox sx={designs.Checkbox_Style} onChange={(e) => { handleCheck(e) }} name='answer2' />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
              onChange={(event => handleChange(event))}
              name="answer2"
            />

          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Option3" sx={designs.Answer_C_Style}>
            <Checkbox sx={designs.Checkbox_Style} onChange={(e) => { handleCheck(e) }} name='answer3' />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
              onChange={(event => handleChange(event))}
              name="answer3"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Option4" sx={designs.Answer_D_Style}>
            <Checkbox sx={designs.Checkbox_Style} onChange={(e) => { handleCheck(e) }} name='answer4' />

            <Input
              variant="standard"
              fullWidth
              disableUnderline
              placeholder="Enter answer for Option1..."
              sx={{
                fontSize: '0.8em',
                fontWeight: '600',
                color: 'white',
              }}
              onChange={(event => handleChange(event))}
              name="answer4"
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            startIcon={<AddCircle />}
            sx={{
              height: 'relative',
              width: '100%',
              padding: '0.3em 0em',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'capitalize',
              color: 'white',
              boxShadow: 'none',
              borderRadius: '0.5em',
              '&: hover': {
                boxShadow: 'none',
              },
            }}
          >
            Add another choice
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Exam_checkboxes;
