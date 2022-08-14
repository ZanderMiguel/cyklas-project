import React from 'react';
import Dialogform from '../components/Dialogform';
import { Grid, Box, Typography, Avatar, Button } from '@mui/material';
import {
  Check,
  VideocamOutlined,
  VideocamOffOutlined,
  Extension,
} from '@mui/icons-material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';

const dataStudents = [
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Paul Rudd',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
    cameraStatus: (
      <VideocamOutlined sx={{ color: '#615F79', fontSize: '1.5em' }} />
    ),
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Tom Holland',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
    cameraStatus: (
      <VideocamOutlined sx={{ color: '#615F79', fontSize: '1.5em' }} />
    ),
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Tom Hiddleston',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
    cameraStatus: (
      <VideocamOutlined sx={{ color: '#615F79', fontSize: '1.5em' }} />
    ),
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Sebastian Stan',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
    cameraStatus: (
      <VideocamOffOutlined sx={{ color: '#615F79', fontSize: '1.5em' }} />
    ),
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Robert Downey Jr.',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
    cameraStatus: (
      <VideocamOffOutlined sx={{ color: '#615F79', fontSize: '1.5em' }} />
    ),
  },
];

function Livequiz_queue({ open, close, maxWidth, socket, teleRoom, quizInfo }) {
  console.log(quizInfo);
  return (
    <div>
      <Dialogform
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Button
            onClick={() => {
              window.open(`/LiveQuiz/${teleRoom}`);
            }}
            variant="contained"
            startIcon={<Extension />}
            sx={{
              backgroundColor: '#49B854',
              color: 'white',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              padding: '0.3em 3em',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: '#31B13E',
              },
            }}
          >
            Join Quiz
          </Button>
        }
      >
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: 'flex',
                width: 'relative',
                height: 'auto',
                padding: '0.4em 1.5em',
                backgroundColor: '#FCFCFC',
                boxShadow:
                  'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
              }}
            >
              <Box
                sx={{
                  width: '25em',
                  height: 'auto',
                }}
              >
                <Typography
                  noWrap
                  sx={{
                    color: '#3F3D56',
                    fontSize: '1em',
                    fontWeight: '800',
                    textTransform: 'Uppercase',
                    width: 'relative',
                    height: 'max-content',
                  }}
                >
                  {quizInfo && quizInfo.title}
                </Typography>
              </Box>

              <Box flexGrow={1} />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              sx={{
                height: 'auto',
                width: 'relative',
                display: 'flex',
                padding: '0.5em 0em',
                margin: '0em 2em 0.3em 1.5em',
              }}
            >
              <Avatar
                src={JSON.parse(localStorage.userData).data.imageUrl}
                sx={{ marginRight: '0.5em' }}
              />

              <Box
                sx={{
                  height: 'auto',
                  width: '8em',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  sx={{
                    color: '#3F3D56',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    width: 'relative',
                    height: 'auto',
                  }}
                >
                  {`${JSON.parse(localStorage.userData).data.user.firstName} ${
                    JSON.parse(localStorage.userData).data.user.lastName
                  } `}
                </Typography>
              </Box>

              <Box flexGrow={1} />

              <Typography
                sx={{
                  color: '#007FFF',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  width: '5em',
                  height: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {JSON.parse(localStorage.userData).data.user.userType}
              </Typography>

              <Box flexGrow={1} />

              <Box flexGrow={1} />

              <Box
                sx={{
                  width: 'auto',
                  height: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '0.3em',
                }}
              >
                <Check sx={{ color: '#5AD357', fontSize: '1.1em' }} />

                <Typography
                  sx={{
                    color: '#5AD357',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    width: 'auto',
                    height: 'max-content',
                  }}
                >
                  Ready
                </Typography>
              </Box>

              <Box flexGrow={1} />

              <Box
                sx={{
                  height: 'relative',
                  width: 'auto',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <VideocamOffOutlined
                  sx={{ color: '#615F79', fontSize: '1.5em' }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Livequiz_queue;
