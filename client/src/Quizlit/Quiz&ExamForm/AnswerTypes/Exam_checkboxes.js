import React from 'react';
import { Grid, Button, Box, Checkbox, Input } from '@mui/material';
import { AddCircle } from '@mui/icons-material';
import useStyle from './Styles/Exam_checkboxes_style';

function Exam_checkboxes({ counter, questionMemo }) {
  const { designs } = useStyle();
  const handleChange = (e) => {
    questionMemo.current[counter - 1][e.target.name] = e.target.value;
  };
  const handleCheck = (event) => {
    if (event.target.checked) {
      questionMemo.current[counter - 1][
        'correctAnswer'
      ] += `${event.target.name},`;
      questionMemo.current[counter - 1]['correctAnswer'] = questionMemo.current[
        counter - 1
      ]['correctAnswer'].replace('undefined', '');
      console.log(questionMemo.current[counter - 1]['correctAnswer']);
    }
    if (event.target.checked === false) {
      questionMemo.current[counter - 1]['correctAnswer'] = questionMemo.current[
        counter - 1
      ]['correctAnswer'].replace(`${event.target.name},`, '');
      console.log(questionMemo.current[counter - 1]['correctAnswer']);
    }
  };
  return (
    <>
      <Grid container sx={{ padding: '0.8em 0em' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              display: 'flex',
              gap: '0.5em',
              marginBottom: '0.5em',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.2em 0.7em',
              }}
            >
              <Checkbox
                onChange={(e) => {
                  handleCheck(e);
                }}
                sx={{
                  color: '#8E8E8E',
                  borderRadius: '0em',
                  height: '0.8em',
                  width: '0.8em',
                  '&: hover': { backgroundColor: 'transparent' },
                }}
              />

              <Input
                placeholder="Blank Answer"
                disableUnderline
                onChange={(event) => handleChange(event)}
                name="answer1"
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              display: 'flex',
              gap: '0.5em',
              marginBottom: '0.5em',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.2em 0.7em',
              }}
            >
              <Checkbox
                onChange={(e) => {
                  handleCheck(e);
                }}
                sx={{
                  color: '#8E8E8E',
                  borderRadius: '0em',
                  height: '0.8em',
                  width: '0.8em',
                  '&: hover': { backgroundColor: 'transparent' },
                }}
              />

              <Input
                placeholder="Blank Answer"
                disableUnderline
                onChange={(event) => handleChange(event)}
                name="answer2"
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              display: 'flex',
              gap: '0.5em',
              marginBottom: '0.5em',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.2em 0.7em',
              }}
            >
              <Checkbox
                onChange={(e) => {
                  handleCheck(e);
                }}
                sx={{
                  color: '#8E8E8E',
                  borderRadius: '0em',
                  height: '0.8em',
                  width: '0.8em',
                  '&: hover': { backgroundColor: 'transparent' },
                }}
              />

              <Input
                placeholder="Blank Answer"
                disableUnderline
                onChange={(event) => handleChange(event)}
                name="answer3"
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              display: 'flex',
              gap: '0.5em',
              marginBottom: '0.5em',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
                height: 'auto',
                width: 'relative',
                flexGrow: 1,
                border: '1px solid #DBDBDB',
                backgroundColor: '#FCFCFC',
                borderRadius: '0.3em',
                padding: '0.2em 0.7em',
              }}
            >
              <Checkbox
                onChange={(e) => {
                  handleCheck(e);
                }}
                sx={{
                  color: '#8E8E8E',
                  borderRadius: '0em',
                  height: '0.8em',
                  width: '0.8em',
                  '&: hover': { backgroundColor: 'transparent' },
                }}
              />

              <Input
                placeholder="Blank Answer"
                disableUnderline
                onChange={(event) => handleChange(event)}
                name="answer4"
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Exam_checkboxes;
