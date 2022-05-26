import React from 'react';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Grid,
} from '@mui/material';

import { Check } from '@mui/icons-material';

import useStyle from './Styles/Quiz_multiplechoice_style';
function Quiz_multiplechoice({ handleChange, questionMemo, counter }) {
  const [check, setCheck] = React.useState(null);
  const { designs } = useStyle();
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer A..."
            variant="filled"
            autoComplete="off"
            name="answer1"
            onChange={(event) => handleChange(event)}
            sx={designs.Answer_A_TextField_Style}
            inputProps={{
              style: {
                height: '0em',
                fontSize: '0.8em',
                paddingLeft: '0.1em',
                paddingRight: '0em',
                marginBottom: '1em',
                marginRight: '0.5em',
                color: 'white',
              },
            }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
                    <Typography sx={designs.Answer_A_Typography_Style}>
                      A.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    name="answer1"
                    onClick={() => {
                      questionMemo.current[counter - 1]['correctAnswer'] =
                        'answer1';
                      setCheck('answer1');
                    }}
                    aria-label="correct-answer"
                    sx={
                      (designs.Correct_Answer_IconButton_Style,
                      check === 'answer1' && {
                        backgroundColor: 'white',
                        color: '#975DF5',
                      })
                    }
                  >
                    <Check
                      sx={{
                        fontSize: '0.8em',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer B..."
            variant="filled"
            autoComplete="off"
            name="answer2"
            onChange={handleChange}
            sx={designs.Answer_B_TextField_Style}
            inputProps={{
              style: {
                height: '0em',
                fontSize: '0.8em',
                paddingLeft: '0.1em',
                paddingRight: '0em',
                marginBottom: '1em',
                marginRight: '0.5em',
                color: 'white',
              },
            }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
                    <Typography sx={designs.Answer_B_Typography_Style}>
                      B.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    name="answer2"
                    onClick={() => {
                      questionMemo.current[counter - 1]['correctAnswer'] =
                        'answer2';
                      setCheck('answer2');
                    }}
                    aria-label="correct-answer"
                    sx={
                      (designs.Correct_Answer_IconButton_Style,
                      check === 'answer2' && {
                        backgroundColor: 'white',
                        color: '#F55D5D',
                      })
                    }
                  >
                    <Check
                      sx={{
                        fontSize: '0.8em',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>

      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer C..."
            variant="filled"
            autoComplete="off"
            name="answer3"
            onChange={handleChange}
            sx={designs.Answer_C_TextField_Style}
            inputProps={{
              style: {
                height: '0em',
                fontSize: '0.8em',
                paddingLeft: '0.1em',
                paddingRight: '0em',
                marginBottom: '1em',
                marginRight: '0.5em',
                color: 'white',
              },
            }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
                    <Typography sx={designs.Answer_C_Typography_Style}>
                      C.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    name="answer3"
                    onClick={() => {
                      questionMemo.current[counter - 1]['correctAnswer'] =
                        'answer3';
                      setCheck('answer3');
                    }}
                    aria-label="correct-answer"
                    sx={
                      (designs.Correct_Answer_IconButton_Style,
                      check === 'answer3' && {
                        backgroundColor: 'white',
                        color: '#6CCF53',
                      })
                    }
                  >
                    <Check
                      sx={{
                        fontSize: '0.8em',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer D..."
            variant="filled"
            autoComplete="off"
            name="answer4"
            onChange={handleChange}
            sx={designs.Answer_D_TextField_Style}
            inputProps={{
              style: {
                height: '0em',
                fontSize: '0.8em',
                paddingLeft: '0.1em',
                paddingRight: '0em',
                marginBottom: '1em',
                marginRight: '0.5em',
                color: 'white',
              },
            }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
                    <Typography sx={designs.Answer_D_Typography_Style}>
                      D.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => {
                      questionMemo.current[counter - 1]['correctAnswer'] =
                        'answer4';
                      setCheck('answer4');
                    }}
                    name="answer4"
                    aria-label="correct-answer"
                    sx={
                      (designs.Correct_Answer_IconButton_Style,
                      check === 'answer4' && {
                        backgroundColor: 'white',
                        color: '#F1B04E',
                      })
                    }
                  >
                    <Check
                      sx={{
                        fontSize: '0.8em',
                      }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default Quiz_multiplechoice;
