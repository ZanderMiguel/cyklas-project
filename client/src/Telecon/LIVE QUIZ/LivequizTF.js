import React from 'react';
import { Box, Grid, Backdrop, Typography } from '@mui/material';

function LivequizTF({ quizData, point, socket, answer }) {
  const handleToggle = (event, ans) => {
    answer.current = ans;
    if (ans === quizData.correctAnswer) {
      point.current = parseInt(
        quizData.points.replace(' points', '').replace(' point', '')
      );
    } else {
      point.current = 0;
    }
  };

  const dataChoices = [
    {
      choice: (
        <Box
          onClick={(e) => {
            handleToggle(e, 'answer1');
          }}
          sx={{
            margin: '0.5em',
            display: 'flex',
            alignItems: 'center',
            padding: '0.8em 1.2em',
            backgroundColor: '#7223F3',
            borderRadius: '0.5em',
            width: 'relative',
            '&: hover': {
              margin: '0em',
              cursor: 'pointer',
              transition: 'all 250ms',
            },
          }}
        >
          <Typography
            children="A."
            sx={{
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              width: '2em',
              height: 'max-content',
            }}
          />

          <Typography
            children="True"
            sx={{
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              width: 'auto',
              flexGrow: 1,
              height: 'max-content',
            }}
          />
        </Box>
      ),
    },
    {
      choice: (
        <Box
          onClick={(e) => {
            handleToggle(e, 'answer2');
          }}
          sx={{
            margin: '0.5em',
            display: 'flex',
            alignItems: 'center',
            padding: '0.8em 1.2em',
            backgroundColor: '#EA4848',
            borderRadius: '0.5em',
            width: 'relative',
            '&: hover': {
              margin: '0em',
              cursor: 'pointer',
              transition: 'all 250ms',
            },
          }}
        >
          <Typography
            children="B."
            sx={{
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              width: '2em',
              height: 'max-content',
            }}
          />

          <Typography
            children="False"
            sx={{
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              width: 'auto',
              flexGrow: 1,
              height: 'max-content',
            }}
          />
        </Box>
      ),
    },
  ];

  return (
    <>
      {dataChoices.map(function (items, index) {
        return <>{items.choice}</>;
      })}
    </>
  );
}

export default LivequizTF;
