import React from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
function Score({ score, activityView, items, designs, submitData }) {
  console.log(submitData);
  return (
    <>
      {submitData && submitData[0].activityStatus === 'Graded' ? (
        <Typography sx={designs.StudentScore_Typography_Style}>
          {submitData[0].activityScore}
        </Typography>
      ) : (
        <Typography sx={designs.StudentScore_Typography_Style}>
          {score[items._id]} / {activityView && activityView.activityPoints}
        </Typography>
      )}
    </>
  );
}

export default Score;
