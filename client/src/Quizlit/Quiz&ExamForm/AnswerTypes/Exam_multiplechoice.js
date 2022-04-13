import React, { useState } from 'react';
import useStyle from '../../Styles/Examform_style';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Button,
  Grid,
} from '@mui/material';
import { AddCircle, Check } from '@mui/icons-material';
function Exam_multiplechoice({ counter, questionMemo }) {
  const { designs } = useStyle();
  const handleChange = (event) => {
    questionMemo.current[counter - 1][event.target.name] = event.target.value;
  };

  const [selectCorrectAnswerA, setSelectCorrectAnswerA] = useState(true);
  const [selectCorrectAnswerB, setSelectCorrectAnswerB] = useState(true);
  const [selectCorrectAnswerC, setSelectCorrectAnswerC] = useState(true);
  const [selectCorrectAnswerD, setSelectCorrectAnswerD] = useState(true);

  const handleClickCorrectAnswerA = () => {
    setSelectCorrectAnswerA((prev) => !prev);
    setSelectCorrectAnswerB(true);
    setSelectCorrectAnswerC(true);
    setSelectCorrectAnswerD(true);
  };
  const handleClickCorrectAnswerB = () => {
    setSelectCorrectAnswerB((prev) => !prev);
    setSelectCorrectAnswerA(true);
    setSelectCorrectAnswerC(true);
    setSelectCorrectAnswerD(true);
  };
  const handleClickCorrectAnswerC = () => {
    setSelectCorrectAnswerC((prev) => !prev);
    setSelectCorrectAnswerA(true);
    setSelectCorrectAnswerB(true);
    setSelectCorrectAnswerD(true);
  };
  const handleClickCorrectAnswerD = () => {
    setSelectCorrectAnswerD((prev) => !prev);
    setSelectCorrectAnswerA(true);
    setSelectCorrectAnswerB(true);
    setSelectCorrectAnswerC(true);
  };
  return (
    <>
      <Grid container rowSpacing={1} sx={{ padding: '0em 2em 1.5em 2em' }}>
        <Grid item xs={12}>
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
                  <Box className="Exam-item" sx={designs.Exam_Item_Style2}>
                    <Typography sx={designs.Answer_A_Typography_Style}>
                      A.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClickCorrectAnswerA}
                >
                  {!selectCorrectAnswerA ? (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerT_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer1';
                      }}
                    >
                      <Check sx={designs.CheckIconT_Style} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerF_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer1';
                      }}
                    >
                      <Check sx={designs.CheckIconF_Style} />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer B..."
            variant="filled"
            autoComplete="off"
            name="answer2"
            onChange={(event) => handleChange(event)}
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
                  <Box className="Exam-item" sx={designs.Exam_Item_Style2}>
                    <Typography sx={designs.Answer_B_Typography_Style}>
                      B.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClickCorrectAnswerB}
                >
                  {!selectCorrectAnswerB ? (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerT_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer2';
                      }}
                    >
                      <Check sx={designs.CheckIconT2_Style} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerF_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer2';
                      }}
                    >
                      <Check sx={designs.CheckIconF_Style} />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer C..."
            variant="filled"
            autoComplete="off"
            name="answer3"
            onChange={(event) => handleChange(event)}
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
                  <Box className="Exam-item" sx={designs.Exam_Item_Style2}>
                    <Typography sx={designs.Answer_C_Typography_Style}>
                      C.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClickCorrectAnswerC}
                >
                  {!selectCorrectAnswerC ? (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerT_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer3';
                      }}
                    >
                      <Check sx={designs.CheckIconT3_Style} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerF_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer3';
                      }}
                    >
                      <Check sx={designs.CheckIconF_Style} />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="filled-basic"
            placeholder="Enter Answer D..."
            variant="filled"
            autoComplete="off"
            name="answer4"
            onChange={(event) => handleChange(event)}
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
                  <Box className="Exam-item" sx={designs.Exam_Item_Style2}>
                    <Typography sx={designs.Answer_D_Typography_Style}>
                      D.
                    </Typography>
                  </Box>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleClickCorrectAnswerD}
                >
                  {!selectCorrectAnswerD ? (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerT_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer4';
                      }}
                    >
                      <Check sx={designs.CheckIconT4_Style} />
                    </IconButton>
                  ) : (
                    <IconButton
                      aria-label="correct-answer"
                      sx={designs.Correct_AnswerF_IconButton_Style}
                      onClick={() => {
                        questionMemo.current[counter - 1]['correctAnswer'] =
                          'answer4';
                      }}
                    >
                      <Check sx={designs.CheckIconF_Style} />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
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

export default Exam_multiplechoice;
