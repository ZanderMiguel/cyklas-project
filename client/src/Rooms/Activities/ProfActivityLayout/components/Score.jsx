import React from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
function Score({ score, activityView, items, designs, submitData }) {
  return (
    <>
      {submitData &&
      submitData.length > 0 &&
      submitData[0].activityStatus === 'Graded' ? (
        <Typography sx={designs.StudentScore_Typography_Style}>
          {submitData[0].activityScore}
        </Typography>
      ) : (
        <Typography
          sx={designs.StudentScore_Typography_Style}
          id={`score${items._id}`}
        >{`${score[items._id] || 0} / ${
          activityView && activityView.activityPoints
        }`}</Typography>
      )}
    </>
  );
}

export default Score;
