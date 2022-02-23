import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  Avatar,
  Typography,
  Divider,
} from '@mui/material';
import { BsPencilSquare } from 'react-icons/bs';
import { HiPuzzle } from 'react-icons/hi';

function QuizlitAddpopover() {
  return (
    <Box width="10rem" maxWidth={400} maxHeight={300}>
      <List component="nav" sx={{ width: '100%' }}>
        <ListItem button component={Link} to="/quizlit/createquiz">
          <Box display="flex" alignItems="center">
            <HiPuzzle color="#007fff" size={20} />
            <Typography sx={{ ml: '1em', fontWeight: 600 }}>Quiz</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/quizlit/createexam">
          <Box display="flex">
            <BsPencilSquare color="#007fff" size={20} />
            <Typography sx={{ ml: '1em', fontWeight: 600 }}>Exam</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default QuizlitAddpopover;
