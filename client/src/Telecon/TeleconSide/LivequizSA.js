import React from 'react';
import { Box, Grid, Backdrop, Typography } from '@mui/material';
import QuestionResult from '../QuestionResult';

function LivequizSA({ dataChoices }) {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {dataChoices.map(function (items, index) {
        return (
          <Box
            key={index}
            sx={{
              width: '100%',
              height: 'auto',
            }}
          >
            {items.choice}
          </Box>
        );
      })}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <QuestionResult />
      </Backdrop>
    </>
  );
}

export default LivequizSA;
