import React from 'react';
import { Box, Typography } from '@mui/material';
import PhotoQuiz from '../assets/Images/Quiz.png';

function QuizLit() {
  return (
    <Box
      className="Container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap="50px"
      flexWrap="wrap"
    >
      <Box className="Left-Content">
        <img src={PhotoQuiz} alt="Imagehere" height="auto" width="100%" />
      </Box>

      <Box className="Right-Content" width="40%">
        <Box className="Heading">
          <Typography
            variant="h1"
            component="h2"
            sx={{
              paddingLeft: 3.5,
              fontSize: '45px',
              fontWeight: 'bold',
              color: '#3F3D56',
              borderLeft: 8,
              borderColor: '#007FFF',
            }}
          >
            QuizLit
          </Typography>
        </Box>

        <Box className="Sub-Heading">
          <Typography
            variant="h1"
            component="h2"
            sx={{
              color: '#007FFF',
              textTransform: 'Uppercase',
              fontSize: '20px',
              fontWeight: 'bold',
              marginTop: '40px',
            }}
          >
            Asynchronous and Live Quiz (Game-Based)
          </Typography>
        </Box>
        <Box className="Content" width="80%">
          <Box className="List">
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: '#626170',
                fontSize: '20px',
                fontWeight: 'bold',
                marginTop: '30px',
                marginBottom: '14px',
              }}
            >
              Quiz Bank
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              sx={{ color: '#626170', fontSize: '15px', fontWeight: '400' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box className="List">
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: '#626170',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '14px',
              }}
            >
              Quiz Creating
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              sx={{ color: '#626170', fontSize: '15px', fontWeight: '400' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
          <Box className="List">
            <Typography
              variant="h1"
              component="h2"
              sx={{
                color: '#626170',
                fontSize: '20px',
                fontWeight: 'bold',
                marginBottom: '14px',
              }}
            >
              Quiz Checking
            </Typography>
            <Typography
              variant="h1"
              component="h2"
              sx={{ color: '#626170', fontSize: '15px', fontWeight: '400' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default QuizLit;
