import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, Typography, Divider } from '@mui/material';
import QuizIcon from '../../assets/ImageJaven/QuizIcon.png';
import ExamIcon from '../../assets/ImageJaven/ExamIcon.png';
import useStyle from './Styles/QuizlitAddpopover_style';

function QuizlitAddpopover() {
  const { designs } = useStyle();

  return (
    <Box sx={designs.Container_Style}>
      <List component="nav" sx={designs.Nav_Style}>
        <ListItem button component={Link} to="/quizlit/createquiz">
          <Box sx={designs.QuizContainer_Style}>
            {/* <Extension sx = {{ fontsize: "1em", color: "#007FFF"}}/> */}
            <img src={QuizIcon} style={{ height: '1.5em', width: '1.5em' }} />
            <Typography sx={designs.Quiz_Typography_Style}>Quiz</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/quizlit/createexam">
          <Box sx={designs.ExamContainer_Style}>
            {/* <ListAlt sx = {{ fontsize: "1em", color: "#007FFF"}}/> */}
            <img src={ExamIcon} style={{ height: '1.4em', width: '1.4em' }} />
            <Typography sx={designs.Exam_Typography_Style}>Exam</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default QuizlitAddpopover;
