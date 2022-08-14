import React, { useState } from 'react';
import useStyle from '../../Styles/Examform_style';
import {
  Typography,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Button,
  Grid,
  Input,
  Tooltip,
} from '@mui/material';
import { AddCircle, Check, CheckOutlined } from '@mui/icons-material';
function Exam_multiplechoice({ counter, questionMemo }) {
  const { designs } = useStyle();
  const handleChange = (event) => {
    questionMemo.current[counter - 1][event.target.name] = event.target.value;
  };

  const [selectCorrectAnswerA, setSelectCorrectAnswerA] = useState(false);
  const [selectCorrectAnswerB, setSelectCorrectAnswerB] = useState(false);
  const [selectCorrectAnswerC, setSelectCorrectAnswerC] = useState(false);
  const [selectCorrectAnswerD, setSelectCorrectAnswerD] = useState(false);

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
  return (
    <>
      <Grid container sx={{ padding: '0.8em 0em' }}>
        <Grid item xs={12}>
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
                children="A."
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
                placeholder="Enter Answer A..."
                disableUnderline
                name="answer1"
                onChange={(event) => handleChange(event)}
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>

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
          </Box>
        </Grid>

        <Grid item xs={12}>
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
                children="B."
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
                placeholder="Enter Answer B..."
                disableUnderline
                name="answer2"
                onChange={(event) => handleChange(event)}
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>

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
          </Box>
        </Grid>

        <Grid item xs={12}>
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
                children="C."
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
                placeholder="Enter Answer C..."
                disableUnderline
                name="answer3"
                onChange={(event) => handleChange(event)}
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>

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
          </Box>
        </Grid>

        <Grid item xs={12}>
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
                children="D."
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
                placeholder="Enter Answer D..."
                disableUnderline
                name="answer4"
                onChange={(event) => handleChange(event)}
                sx={{
                  width: '100%',
                  height: 'auto',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                }}
              />
            </Box>

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
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Exam_multiplechoice;
