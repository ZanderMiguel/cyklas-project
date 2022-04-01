import React from 'react'
import {
    Typography,
    Box,
    Grid,
  } from '@mui/material';
  import { Star} from '@mui/icons-material';
  import useStyle from '../../Styles/Livequiz_multiplechoice_style';
function Points({questionArray,counter}) {
    
  const { designs } = useStyle();
  return (
    <Grid item xs={12} sm={6} lg={3} sx={designs.Points_Items_Grid_Style}>
          {questionArray && <Box className="Points" sx={designs.QuizStatus_Style}>
            <Box className="Points-sub" sx={designs.QuizStatus_Sub_Style}>
              <Star sx={designs.StarIcon_Style} />

              <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
                Points
              </Typography>
            </Box>
            <Box className="Points" sx={designs.QuizStatus_Sub2_Style}>
              <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
              {questionArray[counter].points}
              </Typography>
            </Box>
          </Box>}
        </Grid>
  )
}

export default Points