import React from 'react';
import { Box, Typography } from '@mui/material';
import Tele from '../assets/ImageJaven/Tele.png';

function TeleCon() {
  return (
    <>
      <Box
        className="Container"
        width="100%"
        height="100vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box className="Heading" width="70%" marginTop="40px">
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
            TeleCon (Video Conference)
          </Typography>
        </Box>

        <Box
          className="Content"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap="150px"
          marginTop="40px"
        >
          <Box className="Sub-Content-Right" width="26%">
            <Box className="Content1" marginBottom="50px">
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: '#007FFF',
                  textTransform: 'Uppercase',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                Student Groupings
              </Typography>
              <Typography
                variant="h1"
                component="h2"
                sx={{ color: '#626170', fontSize: '15px', fontWeight: '400' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>

            <Box className="Content2" height="254px">
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: '#007FFF',
                  textTransform: 'Uppercase',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                Presentation Grading with Criteria
              </Typography>
              <Typography
                variant="h1"
                component="h2"
                sx={{ color: '#626170', fontSize: '15px', fontWeight: '400' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
          </Box>

          <Box className="Sub-Content-Left" width="26%">
            <Box className="Content3" marginBottom="50px">
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  color: '#007FFF',
                  textTransform: 'Uppercase',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                }}
              >
                Conducting Live Quiz
              </Typography>
              <Typography
                variant="h1"
                component="h2"
                sx={{ color: '#626170', fontSize: '15px', fontWeight: '400' }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>

            <Box className="Content4">
              <img
                src={Tele}
                height="250"
                width="100%"
                sx={{ paddingLeft: '100px' }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default TeleCon;
