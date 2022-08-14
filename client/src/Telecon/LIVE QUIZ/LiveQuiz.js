import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Box,
  CssBaseline,
  Typography,
  Button,
  Grid,
  Container,
  Avatar,
  Divider,
  Tooltip,
} from '@mui/material';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import Background89 from '../../assets/ImageJaven/Background89.png';
import { Check, PeopleAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';
function LiveQuiz({ members, roomID, socket }) {
  let [entered, setEntered] = React.useState([
    JSON.parse(localStorage.userData).data.user._id,
  ]);
  const [quizInfo, setQuizInfo] = React.useState(null);
  React.useEffect(() => {
    socket.once('joined-lobby', (stdID, roomID, quizSrc) => {
      setEntered([...entered, stdID]);
      axios
        .post('http://localhost:5000/question', {
          quizID: quizSrc._id,
        })
        .then((res) => {
          console.log([quizSrc.title, ...res.data]);
          setQuizInfo([quizSrc.title, ...res.data]);
        })
        .catch((err) => console.log(err));
    });
  }, []);
  socket.emit(
    'enter-lobby',
    JSON.parse(localStorage.userData).data.user._id,
    roomID
  );
  socket.on('initializeGame', (members) => {
    window.open(`/quizgame/setup/${members.qID}`, '_self');
  });
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          backgroundImage: `url(${Background89})`,
          backgroundSize: 'cover',
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            background: 'rgba(23, 26, 32, 0.9)',
            padding: '0.8em 6.5em',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 'auto',
              flexGrow: 1,
              height: 'auto',
            }}
          >
            <Typography
              children={quizInfo && quizInfo[0]}
              sx={{
                color: 'white',
                fontSize: '1.5em',
                fontWeight: '700',
                textTransform: 'Uppercase',
                marginBottom: '0.3em',
              }}
            />

            <Box
              sx={{
                width: 'relative',
                height: 'auto',
                display: 'flex',
                alignItems: 'center',
                gap: '3em',
              }}
            >
              <Typography
                children={`${quizInfo && quizInfo.length - 1} total items`}
                sx={{
                  color: 'white',
                  fontSize: '1em',
                  fontWeight: '500',
                  textTransform: 'Capitalize',
                }}
              />

              <Typography
                children={`${
                  quizInfo &&
                  _.sumBy(quizInfo, (item) => {
                    console.log(item.points);
                    if (item.points) {
                      return parseInt(
                        item.points
                          ?.replace(' points', '')
                          .replace(' point', '')
                      );
                    }
                  })
                } total points`}
                sx={{
                  color: 'white',
                  fontSize: '1em',
                  fontWeight: '500',
                  textTransform: 'Capitalize',
                }}
              />
            </Box>
          </Box>

          {JSON.parse(localStorage.userData).data.user.userType ===
            'Professor' && (
            <Button
              onClick={() => {
                socket.emit('quizgameInit', members, roomID);
              }}
              variant="contained"
              children="Start Quiz"
              /* component={Link}
            to="/LivequizQuestion" */
              sx={{
                textTransform: 'Capitalize',
                fontSize: '0.9em',
                fontWeight: '600',
                boxShadow: 'none',
                '&: hover': {
                  boxShadow: 'none',
                },
              }}
            />
          )}
        </Grid>

        <Container
          maxWidth="lg"
          sx={{
            marginTop: '1.5em',
            height: '80vh',
            overflowY: 'auto',
          }}
        >
          <Box
            sx={{
              width: 'relative',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '0.8em',
            }}
          >
            <Typography
              children="Members who are joining this quiz"
              sx={{
                color: 'white',
                fontSize: '0.9em',
                fontWeight: '500',
                width: 'auto',
                flexGrow: 1,
              }}
            />

            <Box
              sx={{
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
              }}
            >
              <PeopleAlt sx={{ color: 'white', fontSize: '1.2em' }} />

              <Typography
                children={`${members.members.length}`}
                sx={{
                  color: 'white',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  textTransform: 'Uppercase',
                  height: 'max-content',
                  width: 'auto',
                  flexGrow: 1,
                  '&: hover': {
                    cursor: 'default',
                  },
                }}
              />
            </Box>
          </Box>
          {members.members.map(function (items, index) {
            return (
              <div key={index}>
                <Grid
                  item
                  xs={12}
                  sx={{
                    background: 'rgba(37, 40, 46, 0.8)',
                    borderRadius: '0.3em',
                  }}
                >
                  <Box
                    sx={{
                      width: 'relative',
                      height: 'auto',
                      display: 'flex',
                      gap: '0.8em',
                      alignItems: 'center',
                      padding: '0.5em 1.2em 0.5em 0.8em',
                    }}
                  >
                    <Avatar
                      src={`${items.camera.replace('blob:', '')}`}
                      sx={{ width: '3em', height: '3em' }}
                    />

                    <Typography
                      children={items.memberName}
                      sx={{
                        color: 'white',
                        fontSize: '0.9em',
                        fontWeight: '600',
                        width: 'auto',
                        flexGrow: 1,
                      }}
                    />

                    <Box
                      sx={{
                        width: 'auto',
                        height: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.3em',
                      }}
                    >
                      <Check sx={{ color: '#4FE14C', fontSize: '1.5em' }} />

                      <Typography
                        sx={{
                          color: '#4FE14C',
                          fontSize: '0.9em',
                          fontWeight: '600',
                          textTransform: 'uppercase',
                          width: 'auto',
                          height: 'max-content',
                        }}
                      >
                        {entered.includes(items.stdID)
                          ? JSON.parse(localStorage.userData).data.user._id ===
                            items.stdID
                            ? 'Ready'
                            : 'Ready'
                          : 'Absent'}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Divider />
              </div>
            );
          })}
        </Container>
      </Box>
    </>
  );
}

export default LiveQuiz;
