import React from 'react';
import { Box, Button, IconButton, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import useStyle from './Styles/Exam_multiplechoice_style';
import { Link } from 'react-router-dom';

function Exam_multiplechoice() {
  const { designs } = useStyle();

  return (
    // <Container maxWidth = "lg">
    //     <Grid container rowSpacing = {1}>
    //         <Grid item xs = {12}>
    //             <Box className = "Quiz-container" sx = {designs.Quiz_Container_Style}>
    //                 <Box className = "Quiz-answers"
    //                 // component = { Link }
    //                 // to = "/Quiz_multiplechoice"
    //                 sx = {designs.Quiz_Answers_Style}>
    <>
      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box className="answer-a" sx={designs.Answer_A_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton sx={designs.Answer_IconButton_Style}>
              <img
                src={Image}
                style={{
                  height: '2.5em',
                }}
              />
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            <IconButton
              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="answer-b" sx={designs.Answer_B_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton sx={designs.Answer_IconButton_Style}>
              <img
                src={Image}
                style={{
                  height: '2.5em',
                }}
              />
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            <IconButton
              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Grid container columnSpacing={2} rowSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box className="answer-c" sx={designs.Answer_C_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton sx={designs.Answer_IconButton_Style}>
              <img
                src={Image}
                style={{
                  height: '2.5em',
                }}
              />
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            <IconButton
              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="answer-d" sx={designs.Answer_D_Style}>
            <Box flexGrow={1} height="2.5em" />

            <IconButton sx={designs.Answer_IconButton_Style}>
              <img
                src={Image}
                style={{
                  height: '2.5em',
                }}
              />
            </IconButton>

            <Box flexGrow={1} height="2.5em" />

            <IconButton
              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </>

    // </Box>
    //             </Box>
    //         </Grid>
    //     </Grid>
    // </Container>
  );
}

export default Exam_multiplechoice;
