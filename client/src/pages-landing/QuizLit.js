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
      gap="50px"
      flexWrap="wrap"
      marginTop="10rem"
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
            Live Quiz (Game-Based)
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
              sx={{
                color: '#626170',
                fontSize: '15px',
                fontWeight: '400',
                mb: '1rem',
              }}
            >
              Making quizzes and using it multiple times can be done by storing
              those in this bank. Reuse or editing of the quizzes created is the
              sole purpose for this feature.
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
              sx={{
                color: '#626170',
                fontSize: '15px',
                fontWeight: '400',
                mb: '1rem',
              }}
            >
              Multiple choice, image multiple choice, true or false, and essay
              are the options for types of quizzes to be created. Time limit and
              points for the quiz can also be set base on professor's preference
              as well as inserting image or gifs.
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
              Results of the quiz are automatically generated right after the
              end of the live quiz. Scores of those students who participated
              are listed.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default QuizLit;
