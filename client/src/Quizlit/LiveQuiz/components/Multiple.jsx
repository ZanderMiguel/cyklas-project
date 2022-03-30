import React from 'react'
import {
    Typography,
    Box,
    Grid,
  } from '@mui/material';
  import useStyle from '../../Styles/Livequiz_multiplechoice_style';
function Multiple({questionArray,counter}) {
    const { designs } = useStyle();
  return (
    <>
    
    <Grid
        container
        columnSpacing={2}
        rowSpacing={1}
        sx={designs.GridContainer3_Style}
      >
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-a"
            onClick={() => {}}
            sx={designs.Answer_A_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_A_Typography_Style}>A.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_A_Typography2_Style}>
              {questionArray.current[counter.current].qAnswers['answer1']}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-b"
            onClick={() => {}}
            sx={designs.Answer_B_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_B_Typography_Style}>B.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_B_Typography2_Style}>
            {questionArray.current[counter.current].qAnswers['answer2']}
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={2}
        rowSpacing={1}
        sx={designs.GridContainer4_Style}
      >
        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-c"
            onClick={() => {}}
            sx={designs.Answer_C_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_C_Typography_Style}>C.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_C_Typography2_Style}>
            {questionArray.current[counter.current].qAnswers['answer3']}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            className="Answer-d"
            onClick={() => {}}
            sx={designs.Answer_D_Style}
          >
            <Box className="Quiz-item" sx={designs.Quiz_Item_Style2}>
              <Typography sx={designs.Answer_D_Typography_Style}>D.</Typography>
            </Box>
            <Typography noWrap sx={designs.Answer_D_Typography2_Style}>
            {questionArray.current[counter.current].qAnswers['answer4']}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Multiple