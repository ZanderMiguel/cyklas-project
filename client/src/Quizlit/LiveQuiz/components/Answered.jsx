import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import { PeopleAlt } from '@mui/icons-material';
import useStyle from '../../Styles/Livequiz_multiplechoice_style';
function Answered() {
  const { designs } = useStyle();
  return (
    <Grid item xs={12} sm={6} lg={3} sx={designs.PlayersAnswered_Grid_Style}>
      <Box className="PlayersAnswered" sx={designs.QuizStatus_Style}>
        <Box className="PlayersAnswered-sub" sx={designs.QuizStatus_Sub_Style}>
          <PeopleAlt sx={designs.PeopleAltIcon_Style} />

          <Typography noWrap sx={designs.QuizStatus_Typography_Style}>
            Players Answered
          </Typography>
        </Box>
        <Box className="PlayersAnswered" sx={designs.QuizStatus_Sub2_Style}>
          <Typography noWrap sx={designs.QuizStatus_Typography2_Style}>
            3 / 5
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default Answered;
