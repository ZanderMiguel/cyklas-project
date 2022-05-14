import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import QuizIcon from '../../../../assets/ImageJaven/QuizIcon.png';
import useStyle from './Styles/Quizzes_layout_style';
import { Link } from 'react-router-dom';

const data = [
  {
    title: 'Variables',
    name: 'Mark Orense',
    date: Date.now().toLocaleString(),
    time: Date.now().toLocaleString(),
    points: '8 points',
    score: '4 items',
  },
  {
    title: 'Conditional Statements',
    name: 'Mark Orense',
    date: Date.now().toLocaleString(),
    time: Date.now().toLocaleString(),
    points: '8 points',
    score: '4 items',
  },
  {
    title: 'Arrays',
    name: 'Mark Orense',
    date: Date.now().toLocaleString(),
    time: Date.now().toLocaleString(),
    points: '8 points',
    score: '4 items',
  },
];

function Quizzes_layout() {
  const { designs } = useStyle();

  return (
    <>
      {data.map((items, index) => {
        return (
          <Box sx={designs.BoxTileContainer} key={index}>
            <img
              src={QuizIcon}
              alt="QuizIcon"
              style={{
                height: '2.2em',
                margin: '0.3em 0.8em 0em 0em',
              }}
            />

            <Box
              sx={designs.QuizName_User_Date}
              component={Link}
              to="Quiz_viewed"
            >
              <Typography noWrap sx={designs.Quiz}>
                {items.title}
              </Typography>
            </Box>

            <Box className="points-score" sx={designs.Points_Score_Style}>
              <Typography noWrap sx={designs.Points_Style}>
                {items.points}
              </Typography>

              <Divider orientation="vertical" sx={designs.DividerV_Style} />

              <Typography noWrap sx={designs.Score_Style}>
                {items.score}
              </Typography>
            </Box>

            <Box sx={designs.BoxOptions}>
              <IconButton sx={designs.IconButtonOptions}>
                <MoreVert sx={designs.MoreVertIcon} />
              </IconButton>
            </Box>
            {/* </Box> */}
          </Box>
        );
      })}
    </>
  );
}

export default Quizzes_layout;
