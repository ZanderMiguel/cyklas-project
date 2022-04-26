import React, { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Typography,
  List,
  ListItem,
  Button,
  Divider,
} from '@mui/material';

function QuizPopover() {
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
    <Box height="15em" width="20em">
      {quizzes &&
        quizzes.map((items, index) => {
          return (
            <List>
              <ListItem>
                <Box display="flex" width="100%">
                  <Typography>{items.title}</Typography>
                  <Box flexGrow={1} />
                  <Button variant="contained">Start</Button>
                </Box>
              </ListItem>
              <Divider />
            </List>
          );
        })}
    </Box>
  );
}

export default QuizPopover;
