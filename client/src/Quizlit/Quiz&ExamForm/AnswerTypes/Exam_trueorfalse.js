import React from 'react';
import { Box, Typography, IconButton, Grid } from '@mui/material';
import { Check } from '@mui/icons-material';
import useStyle from './Styles/Exam_trueorfalse_style';
import { Link } from 'react-router-dom';

function Exam_trueorfalse() {
  const { designs } = useStyle();

  return (
    <>
      <Grid container  rowSpacing={1} sx = {{ padding: "0em 2em 1.5em 2em" }}>
        <Grid item xs={12}>
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

        <Grid item xs={12}>
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
  );
}

export default Exam_trueorfalse;

