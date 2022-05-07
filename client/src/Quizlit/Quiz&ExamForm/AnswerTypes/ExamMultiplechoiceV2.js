import React from 'react';
import {
  Grid,
  Box,
  Typography,
  IconButton,
  Button,
  Tooltip,
  Input,
} from '@mui/material';
import { CheckOutlined, Add } from '@mui/icons-material';

function ExamMultiplechoiceV2({ counter, questionMemo }) {
  const handleChange = (event) => {
    questionMemo.current[counter - 1][event.target.name] = event.target.value;
  };
  const [selectCorrectAnswerA, setSelectCorrectAnswerA] = React.useState(false);
  const [selectCorrectAnswerB, setSelectCorrectAnswerB] = React.useState(false);
  const [selectCorrectAnswerC, setSelectCorrectAnswerC] = React.useState(false);
  const [selectCorrectAnswerD, setSelectCorrectAnswerD] = React.useState(false);

  const handleClickCorrectAnswerA = () => {
    setSelectCorrectAnswerA((prev) => !prev);
    setSelectCorrectAnswerB(false);
    setSelectCorrectAnswerC(false);
    setSelectCorrectAnswerD(false);
  };
  const handleClickCorrectAnswerB = () => {
    setSelectCorrectAnswerB((prev) => !prev);
    setSelectCorrectAnswerA(false);
    setSelectCorrectAnswerC(false);
    setSelectCorrectAnswerD(false);
  };
  const handleClickCorrectAnswerC = () => {
    setSelectCorrectAnswerC((prev) => !prev);
    setSelectCorrectAnswerA(false);
    setSelectCorrectAnswerB(false);
    setSelectCorrectAnswerD(false);
  };
  const handleClickCorrectAnswerD = () => {
    setSelectCorrectAnswerD((prev) => !prev);
    setSelectCorrectAnswerA(false);
    setSelectCorrectAnswerB(false);
    setSelectCorrectAnswerC(false);
  };

  const dataAnswers = [
    {
      choice: 'A.',
      name: 'answer1',
      choiceAnswer: 'Blank Answer',
      correctAnswer: (
        <Box
          onClick={handleClickCorrectAnswerA}
          sx={{ borderRadius: '0.2em', height: 'auto', width: 'auto' }}
        >
          {!selectCorrectAnswerA ? (
            <Tooltip
              title="Select this to be the correct answer"
              placement="right"
            >
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid #DBDBDB',
                  backgroundColor: '#FCFCFC',
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer1';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Remove selection" placement="right">
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid transparent',
                  backgroundColor: '#007FFF',
                  color: 'white',
                  '&: hover': {
                    backgroundColor: '#007FFF',
                    color: 'white',
                  },
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] = '';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      ),
    },
    {
      choice: 'B.',
      name: 'answer2',
      choiceAnswer: 'Blank Answer',
      correctAnswer: (
        <Box
          onClick={handleClickCorrectAnswerB}
          sx={{ borderRadius: '0.2em', height: 'auto', width: 'auto' }}
        >
          {!selectCorrectAnswerB ? (
            <Tooltip
              title="Select this to be the correct answer"
              placement="right"
            >
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid #DBDBDB',
                  backgroundColor: '#FCFCFC',
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer2';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Remove selection" placement="right">
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid transparent',
                  backgroundColor: '#007FFF',
                  color: 'white',
                  '&: hover': {
                    backgroundColor: '#007FFF',
                    color: 'white',
                  },
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] = '';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      ),
    },
    {
      choice: 'C.',
      name: 'answer3',
      choiceAnswer: 'Blank Answer',
      correctAnswer: (
        <Box
          onClick={handleClickCorrectAnswerC}
          sx={{ borderRadius: '0.2em', height: 'auto', width: 'auto' }}
        >
          {!selectCorrectAnswerC ? (
            <Tooltip
              title="Select this to be the correct answer"
              placement="right"
            >
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid #DBDBDB',
                  backgroundColor: '#FCFCFC',
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer3';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Remove selection" placement="right">
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid transparent',
                  backgroundColor: '#007FFF',
                  color: 'white',
                  '&: hover': {
                    backgroundColor: '#007FFF',
                    color: 'white',
                  },
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] = '';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      ),
    },
    {
      choice: 'D.',
      name: 'answer4',
      choiceAnswer: 'Blank Answer',
      correctAnswer: (
        <Box
          onClick={handleClickCorrectAnswerD}
          sx={{ borderRadius: '0.2em', height: 'auto', width: 'auto' }}
        >
          {!selectCorrectAnswerD ? (
            <Tooltip
              title="Select this to be the correct answer"
              placement="right"
            >
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid #DBDBDB',
                  backgroundColor: '#FCFCFC',
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] =
                    'answer4';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Remove selection" placement="right">
              <IconButton
                sx={{
                  borderRadius: '0.2em',
                  border: '1px solid transparent',
                  backgroundColor: '#007FFF',
                  color: 'white',
                  '&: hover': {
                    backgroundColor: '#007FFF',
                    color: 'white',
                  },
                }}
                onClick={() => {
                  questionMemo.current[counter - 1]['correctAnswer'] = '';
                }}
              >
                <CheckOutlined sx={{ fontSize: '0.7em' }} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      ),
    },
  ];

  return (
    <>
      {dataAnswers.map(function (items, index) {
        return (
          <>
            <Grid item xs={12} key={index}>
              <Box
                sx={{
                  width: 'relative',
                  height: 'auto',
                  display: 'flex',
                  gap: '0.5em',
                  marginBottom: '0.5em',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 'auto',
                    width: 'relative',
                    flexGrow: 1,
                    border: '1px solid #DBDBDB',
                    backgroundColor: '#FCFCFC',
                    borderRadius: '0.3em',
                    padding: '0.2em 0.7em',
                  }}
                >
                  <Typography
                    children={items.choice}
                    sx={{
                      width: '2em',
                      height: 'max-content',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      color: '#3F3D56',
                      textTransform: 'Uppercase',
                    }}
                  />

                  <Input
                    placeholder={items.choiceAnswer}
                    disableUnderline
                    sx={{
                      width: '100%',
                      height: 'auto',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      color: '#3F3D56',
                    }}
                  ></Input>
                </Box>

                {items.correctAnswer}
              </Box>
            </Grid>
          </>
        );
      })}
    </>
  );
}

export default ExamMultiplechoiceV2;
