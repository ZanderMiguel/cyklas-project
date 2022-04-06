import React from 'react'
import {
    Typography,
    Box,
    Grid,
  } from '@mui/material';
  import { Layers } from '@mui/icons-material';
  import useStyle from '../../Styles/Livequiz_multiplechoice_style';
function Items({questionArray,counter}) {
    
  const { designs } = useStyle();
  return (
    
    <Grid item xs={12} sm={6} lg={3} sx={designs.Points_Items_Grid_Style}>
    {questionArray && <Box className="Items" sx={designs.QuizStatus_Style}>
      <Box className="Items-sub" sx={designs.QuizStatus_Sub_Style}>
        <Layers sx={designs.LayersIcon_Style} />

        <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
          Items
        </Typography>
      </Box>
      <Box className="Items" sx={designs.QuizStatus_Sub2_Style}>
        <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
          {`${parseInt(counter) + 1} / ${questionArray.length}`}
        </Typography>
      </Box>
    </Box>}
  </Grid>
  )
}

export default Items