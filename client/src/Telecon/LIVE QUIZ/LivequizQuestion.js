import React from 'react';
import {
  CssBaseline,
  Box,
  Typography,
  Button,
  Grid,
  Container,
  Backdrop,
} from '@mui/material';
import Background89 from '../../assets/ImageJaven/Background89.png';
import hqdefault from '../../assets/ImageJaven/hqdefault.jpg';
import { TimerOutlined } from '@mui/icons-material';
import QuestionResult from './QuestionResult';
import LivequizMulti from './LivequizMulti';
import LivequizImagemulti from './LivequizImagemulti';
import LivequizTF from './LivequizTF';
import LivequizSA from './LivequizSA';
import LivequizTimer from './LivequizTimer';
import { useParams, Redirect } from 'react-router-dom';

function LivequizQuestion({ socket }) {
  const { quizID, qIdx } = useParams();
  const [quizSrc, setQuizSrc] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const point = React.useRef(0);
  const [redirect, setRedirect] = React.useState(null);
  const quizlitSrc = React.useRef(null);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    socket.emit('start-quiz', quizID);
    socket.once('data-loaded', (quizData, quiID, quizlitData) => {
      setQuizSrc(quizData);
      quizlitSrc.current = quizlitData;
      console.log(quizlitData);
    });
  }, []);
  socket.on('timesup', () => {
    setOpen(true);
    socket.emit(
      'to-next',
      3,
      quizID,
      point.current,
      JSON.parse(localStorage.userData).data.user._id,
      parseInt(qIdx)
    );
  });
  socket.on('next', (index) => {
    if (index === quizlitSrc.current.length) {
      setRedirect(<Redirect to="/LivequizStudentrankings" />);
    } else {
      setRedirect(<Redirect to={`/quiz-game/${quizID}/${index}`} />);
    }
    setOpen(false);
  });
  return (
    <>
      <CssBaseline />
      {quizSrc && (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            backgroundImage: `url(${Background89})`,
            backgroundSize: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <LivequizTimer data={quizSrc[qIdx]} socket={socket} qIdx={qIdx} />
          <Box
            sx={{
              width: '65%',
              background: 'rgba(37, 40, 46, 0.8)',
              borderRadius: '0.5em',
              height: '85vh',
              padding: '2em 1.5em',
              boxShadow:
                'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
            }}
          >
            <Box
              sx={{
                width: 'relative',
                height: '100%',
                overflowY: 'auto',
              }}
            >
              <Box
                sx={{
                  width: 'relative',
                  height: '100%',
                }}
              >
                <Typography
                  children="Question 1 / 4"
                  sx={{
                    color: '#DEDEDE',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    textTransform: 'Uppercase',
                    width: 'relative',
                    height: 'max-content',
                    textAlign: 'center',
                    marginBottom: '0.1em',
                  }}
                />

                <Typography
                  children={`${quizSrc[qIdx].answerType}`}
                  sx={{
                    color: '#1389FF',
                    fontSize: '1em',
                    fontWeight: '700',
                    textTransform: 'Uppercase',
                    width: 'relative',
                    height: 'max-content',
                    textAlign: 'center',
                    paddingBottom: '0.3em',
                    marginBottom: '0.5em',
                  }}
                />

                <Typography
                  children={`${quizSrc[qIdx].questionsContent}`}
                  sx={{
                    color: 'white',
                    fontSize: '1.2em',
                    fontWeight: '600',
                    textTransform: 'sino',
                    width: 'relative',
                    height: 'max-content',
                    textAlign: 'center',
                    padding: '0em 1em',
                    marginBottom: '1em',
                  }}
                />
                <Box
                  sx={{
                    width: 'relative',
                    height: 'auto',
                    padding: '0em 2em',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                >
                  <Grid item xs={12} sx={{ width: '100%' }}>
                    {quizSrc[qIdx].answerType === 'Multiple Choice' && (
                      <LivequizMulti
                        quizData={quizSrc[qIdx]}
                        point={point}
                        socket={socket}
                      />
                    )}
                    {quizSrc[qIdx].answerType === 'Image' && (
                      <LivequizImagemulti
                        quizData={quizSrc[qIdx]}
                        point={point}
                        socket={socket}
                      />
                    )}
                    {quizSrc[qIdx].answerType === 'True or False' && (
                      <LivequizTF
                        quizData={quizSrc[qIdx]}
                        point={point}
                        socket={socket}
                      />
                    )}
                    {quizSrc[qIdx].answerType === 'Short Answer' && (
                      <LivequizSA />
                    )}
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        {/* <TimerWait/> */}
        <QuestionResult point={point} socket={socket} />
      </Backdrop>
      {redirect && redirect}
    </>
  );
}

export default LivequizQuestion;
