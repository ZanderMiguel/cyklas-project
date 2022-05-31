import React from 'react';
import { Box, Grid, Backdrop, Typography } from '@mui/material';
import QuestionResult from './QuestionResult';

function LivequizMulti({ quizData, point, socket, answer }) {
  const handleToggle = (e, ans) => {
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
          onClick={(event) => {
            handleToggle(event, 'answer1');
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
              margin: '0.5em 0em',
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
            children={`${quizData.qAnswers.answer1}`}
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
          onClick={(event) => {
            handleToggle(event, 'answer2');
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
            children={`${quizData.qAnswers.answer2}`}
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
          onClick={(event) => {
            handleToggle(event, 'answer3');
          }}
          sx={{
            margin: '0.5em',
            display: 'flex',
            alignItems: 'center',
            padding: '0.8em 1.2em',
            backgroundColor: '#66C34E',
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
            children="C."
            sx={{
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              width: '2em',
              height: 'max-content',
            }}
          />

          <Typography
            children={`${quizData.qAnswers.answer3}`}
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
          onClick={(event) => {
            handleToggle(event, 'answer4');
          }}
          sx={{
            margin: '0.5em',
            display: 'flex',
            alignItems: 'center',
            padding: '0.8em 1.2em',
            backgroundColor: '#E3A649',
            borderRadius: '0.5em',
            width: 'relative',
            '&: hover': {
              margin: '0em',
              cursor: 'pointer',
              transition: 'all 250ms',
              backgroundColor: '#DBA047',
            },
          }}
        >
          <Typography
            children="D."
            sx={{
              color: 'white',
              fontSize: '0.9em',
              fontWeight: '600',
              width: '2em',
              height: 'max-content',
            }}
          />

          <Typography
            children={`${quizData.qAnswers.answer4}`}
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
      <img
        src={quizData.media}
        style={{
          width: '50%',
          height: '50%',
          margin: '0 auto',
          display: 'block',
        }}
      />
      {dataChoices.map(function (items, index) {
        return <>{items.choice}</>;
      })}
    </>
  );
}

export default LivequizMulti;
