import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Photo from '../assets/Images/Classroom.png';

function Service_CyClassroom() {
  const [classes, setClasses] = useState('Class Record');
  const [Grading, setGrading] = useState('Grading System');
  const [color, setColor] = useState('#007FFF');
  const [fontWeight, setFontWeight] = useState('bold');
  const [color2, setColor2] = useState('#626170');
  const [fontWeight2, setFontWeight2] = useState('550');
  return (
    <>
      <Box
        Box
        className="Container"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="6rem"
        marginTop="10rem"
      >
        <Box classname="Left-Content">
          <Box classname="Text">
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
              CyClassroom
            </Typography>
            <Box
              classname="Role"
              marginTop="20px"
              justifyContent="space-around"
              display="flex"
            >
              <Button
                onClick={() => {
                  setClasses('Class Record');
                  setGrading('Grading System');
                  setColor('#007FFF');
                  setFontWeight('bold');
                  setColor2('#626170');
                  setFontWeight2('550');
                }}
                disableRipple
                variant="text"
                sx={{
                  color: `${color}`,
                  fontWeight: `${fontWeight}`,
                  fontSize: '20px',
                  '&:hover': { backgroundColor: 'white', fontWeight: 'bold' },
                }}
              >
                Teacher{' '}
              </Button>
              <Button
                onClick={() => {
                  setClasses('Class Cards');
                  setGrading('Teacher Evaluation');
                  setColor2('#007FFF');
                  setFontWeight2('bold');
                  setColor('#626170');
                  setFontWeight('550');
                }}
                variant="text"
                disableRipple
                sx={{
                  color: `${color2}`,
                  fontWeight: `${fontWeight2}`,
                  fontSize: '20px',
                  '&:hover': {
                    backgroundColor: 'white',
                    fontWeight: 'bold',
                    color: '007FFF',
                  },
                }}
              >
                Student
              </Button>
            </Box>
          </Box>

          <Box
            className="Content"
            display="flex"
            flexDirection="column"
            marginTop="20px"
            marginLeft="40px"
          >
            <Box className="List" display="flex">
              <CheckCircleIcon
                sx={{ color: '#007FFF', fontSize: 30, marginRight: 3 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
              >
                Dashboard
              </Typography>
            </Box>

            <Box className="List" display="flex">
              <CheckCircleIcon
                sx={{ color: '#007FFF', fontSize: 30, marginRight: 3 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
              >
                Rooms
              </Typography>
            </Box>

            <Box className="List" display="flex">
              <CheckCircleIcon
                sx={{ color: '#007FFF', fontSize: 30, marginRight: 3 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
              >
                Activities
              </Typography>
            </Box>

            <Box className="List" display="flex">
              <CheckCircleIcon
                sx={{ color: '#007FFF', fontSize: 30, marginRight: 3 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
              >
                Exams
              </Typography>
            </Box>

            <Box className="List" display="flex">
              <CheckCircleIcon
                sx={{ color: '#007FFF', fontSize: 30, marginRight: 3 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
              >
                {classes}
              </Typography>
            </Box>

            <Box className="List" display="flex">
              <CheckCircleIcon
                sx={{ color: '#007FFF', fontSize: 30, marginRight: 3 }}
              />
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: 20, fontWeight: '400', color: '#626170' }}
              >
                {Grading}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="Right-Content">
          <img src={Photo} alt="PictureHere" height="auto" width="100%" />
        </Box>
      </Box>
    </>
  );
}

export default Service_CyClassroom;
