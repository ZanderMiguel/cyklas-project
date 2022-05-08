import React, { useState } from 'react';
import { Box, Typography, IconButton, Grid, Tooltip } from '@mui/material';
import { Check, CheckOutlined } from '@mui/icons-material';
import useStyle from './Styles/Exam_trueorfalse_style';

function Exam_trueorfalse({ questionMemo, counter }) {
  const { designs } = useStyle();
  questionMemo.current[counter - 1]['answer1'] = 'True';
  questionMemo.current[counter - 1]['answer2'] = 'False';
  const [selectCorrectAnswerTrue, setSelectCorrectAnswerTrue] = useState(false);
  const [selectCorrectAnswerFalse, setSelectCorrectAnswerFalse] =
    useState(false);

  const handleClickCorrectAnswerTrue = () => {
    setSelectCorrectAnswerTrue((prev) => !prev);
    setSelectCorrectAnswerFalse(false);
    questionMemo.current[counter - 1]['correctAnswer'] = 'answer1';
  };
  const handleClickCorrectAnswerFalse = () => {
    setSelectCorrectAnswerFalse((prev) => !prev);
    setSelectCorrectAnswerTrue(false);
    questionMemo.current[counter - 1]['correctAnswer'] = 'answer2';
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

              <Typography
                children="True"
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'max-content',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              />
            </Box>

            <Box
              onClick={handleClickCorrectAnswerTrue}
              sx={{ borderRadius: '0.2em', height: 'auto', width: 'auto' }}
            >
              {!selectCorrectAnswerTrue ? (
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

              <Typography
                children="False"
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'max-content',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              />
            </Box>

            <Box
              onClick={handleClickCorrectAnswerFalse}
              sx={{ borderRadius: '0.2em', height: 'auto', width: 'auto' }}
            >
              {!selectCorrectAnswerFalse ? (
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

export default Exam_trueorfalse;
