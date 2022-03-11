import React from 'react';
import { Box, Typography, IconButton, Container, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import useStyle from '../Styles/Trueorfalse_style';
import { Link } from 'react-router-dom';

function Trueorfalse() {
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
          <Box className="answer-true" sx={designs.Answer_True_Style}>
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style}>
              <Typography sx={designs.Quiz_Item_Typography_Style}>
                A.
              </Typography>
            </Box>
            <Typography sx={designs.Answer_Style}>True</Typography>

            <Box flexGrow={1} height="relative" />

            <IconButton
              aria-label="correct-answer"
              sx={designs.Correct_Answer_IconButton_Style}
            >
              <Check sx={designs.CheckIcon_Style} />
            </IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box className="answer-false" sx={designs.Answer_False_Style}>
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style}>
              <Typography sx={designs.Quiz_Item_Typography_Style2}>
                B.
              </Typography>
            </Box>
            <Typography sx={designs.Answer_Style}>False</Typography>

            <Box flexGrow={1} height="relative" />

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
    //                     {/* </Box>
    //             </Box>
    //         </Grid>
    //     </Grid>
    // </Container> */}
  );
}

export default Trueorfalse;
