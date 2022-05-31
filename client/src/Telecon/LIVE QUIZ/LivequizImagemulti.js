import React from 'react';
import { Box, Grid, Backdrop, Typography } from '@mui/material';
import QuestionResult from './QuestionResult';
import ChoiceA from '../../assets/quiz/apple.jpg';
import ChoiceB from '../../assets/quiz/banana.jpg';
import ChoiceC from '../../assets/quiz/mango.jpg';
import ChoiceD from '../../assets/quiz/orange.jpg';
import TimerWait from '../TimerWait';

function LivequizImagemulti({ quizData, point, socket, answer }) {
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
            width: '50%',
            padding: '0.5em',
            '&: hover': {
              cursor: 'pointer',
              transition: 'all 250ms',
              padding: '0em',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '3.5em 1.2em',
              backgroundColor: 'white',
              backgroundImage: `url(${ChoiceA})`,
              backgroundSize: 'cover',
              border: '3px solid #7223F3',
              borderRadius: '0.5em',
              width: '100%',
            }}
          ></Box>
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
            width: '50%',
            padding: '0.5em',
            '&: hover': {
              cursor: 'pointer',
              transition: 'all 250ms',
              padding: '0em',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '3.5em 1.2em',
              backgroundColor: 'white',
              backgroundImage: `url(${ChoiceB})`,
              backgroundSize: 'cover',
              border: '3px solid #EA4848',
              borderRadius: '0.5em',
              width: 'relative',
            }}
          ></Box>
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
            width: '50%',
            padding: '0.5em',
            '&: hover': {
              cursor: 'pointer',
              transition: 'all 250ms',
              padding: '0em',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '3.5em 1.2em',
              backgroundColor: 'white',
              backgroundImage: `url(${ChoiceC})`,
              backgroundSize: 'cover',
              border: '3px solid #66C34E',
              borderRadius: '0.5em',
              width: 'relative',
            }}
          ></Box>
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
            width: '50%',
            padding: '0.5em',
            '&: hover': {
              cursor: 'pointer',
              transition: 'all 250ms',
              padding: '0em',
            },
          }}
        >
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              padding: '3.5em 1.2em',
              backgroundColor: 'white',
              backgroundImage: `url(${ChoiceD})`,
              backgroundSize: 'cover',
              border: '3px solid #E3A649',
              borderRadius: '0.5em',
              width: 'relative',
            }}
          ></Box>
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
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {dataChoices.map(function (items, index) {
          return <>{items.choice}</>;
        })}
      </Box>
    </>
  );
}

export default LivequizImagemulti;
