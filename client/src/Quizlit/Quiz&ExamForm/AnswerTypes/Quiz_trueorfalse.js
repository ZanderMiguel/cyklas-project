import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import useStyle from './Styles/Quiz_trueorfalse_style';

function Quiz_trueorfalse({ questionMemo, counter,questionArray,socket }) {
  const { designs } = useStyle();
  const handleClick = (event) => {
    questionMemo.current[counter - 1]['answer2'] = 'False'
    questionMemo.current[counter - 1]['answer1'] = 'True'
  }
  const sendAnswer = (answer) => {
    console.log(answer)
    socket.emit('send-answer',answer,questionArray[counter].correctAnswer)
  }
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box className="answer-true" sx={designs.Answer_True_Style}>
            <Box 
            onClick={()=>{
              questionArray && sendAnswer('answer1')
            }}
            className="Quiz-item" sx={designs.Quiz_Item_Style}>
              <Typography sx={designs.Quiz_Item_Typography_Style}>
                A.
              </Typography>
            </Box>
            <Typography sx={designs.Answer_Style}>True</Typography>

            <Box flexGrow={1} height="relative" />

            {questionMemo && <IconButton

              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
              name="answer1"
              onClick={(event) => {

                handleClick(event)
                questionMemo.current[counter - 1]['correctAnswer'] = 'answer1'
              }}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>}
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="answer-false" sx={designs.Answer_False_Style}>
            <Box 
            onClick={()=>{
              questionArray && sendAnswer('answer1')
            }}
            className="Quiz-item" sx={designs.Quiz_Item_Style}>
              <Typography sx={designs.Quiz_Item_Typography_Style2}>
                B.
              </Typography>
            </Box>
            <Typography sx={designs.Answer_Style}>False</Typography>

            <Box flexGrow={1} height="relative" />

            {questionMemo && <IconButton
              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
              name="answer2"
              onClick={(event) => {
                handleClick(event)
                questionMemo.current[counter - 1]['correctAnswer'] = 'answer2'
              }}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>}
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Quiz_trueorfalse;

