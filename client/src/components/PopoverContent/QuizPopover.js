import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
  Tooltip,
} from '@mui/material';
import Livequiz_queue from '../../Form_content/Livequiz_queue';
import { Link } from 'react-router-dom';

function QuizPopover({ members, socket, teleRoom, setQuizInfo }) {
  const [quizzes, setQuizzes] = useState(null);

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/myQuizlit', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setQuizzes(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box height="15em" width="20em" padding="0.5em">
      {quizzes &&
        quizzes.map((items, index) => {
          return (
            <>
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  width: '100%',
                  backgroundColor: 'white',
                  alignItems: 'center',
                  padding: '0.5em 0.8em',
                  border: '1px solid #DBDBDB',
                  borderRadius: '0.3em',
                  marginBottom: '0.3em',
                  '&: hover': {
                    transition: 'all 250ms',
                    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                  },
                }}
              >
                <Tooltip title={items.title} placement="left">
                  <Typography
                    noWrap
                    children={items.title}
                    sx={{
                      fontSize: '0.9em',
                      fontWeight: '600',
                      color: '#3F3D56',
                      width: '11.5em',
                      height: 'max-content',
                      textTransform: 'Uppercase',
                      '&: hover': {
                        cursor: 'default',
                      },
                    }}
                  />
                </Tooltip>

                <Box flexGrow={1} />

                <Button
                  variant="contained"
                  onClick={() => {
                    socket.emit(
                      'quizParticipants',
                      members,
                      teleRoom,
                      true,
                      items._id,
                      items
                    );
                  }}
                  component={Link}
                  to={`/LiveQuiz/${teleRoom}`}
                  target="_blank"
                  children="Start Quiz"
                  sx={{
                    fontSize: '0.8em',
                    fontWeight: '600',
                    color: 'white',
                    textTransform: 'Capitalize',
                  }}
                />
              </Box>
            </>
          );
        })}
    </Box>
  );
}

export default QuizPopover;
