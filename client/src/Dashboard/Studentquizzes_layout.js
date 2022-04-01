import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import QuizIcon from '../assets/ImageJaven/QuizIcon.png';
import useStyle from './Styles/Student_activities_style';
import { Link } from "react-router-dom";

const data = [
      {
        title: 'Variables',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
        points: '8 points',
        score: '4 / 4'
      },
      {
        title: 'Conditional Statements',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
        points: '8 points',
        score: '4 / 4'
      },
      {
        title: 'Arrays',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
        points: '8 points',
        score: '4 / 4'
      },
];

function Studentquizzes_layout() {
  const { designs } = useStyle();

  return (
    <>
      {data.map((items, index) => {
        return (
          <Box sx={designs.BoxTileContainer} key={index}
          component = {Link}
          to = "/Student_viewquiz">
            {/* <Box sx={designs.QuizContainer}> */}
              <img
                src={QuizIcon}
                alt="QuizIcon"
                style={{
                  height: '2.2em',
                  margin: '0.3em 0.8em 0em 0em',
                }}
              />

              <Box sx={designs.QuizName_User_Date}>
                <Typography noWrap sx={designs.Quiz}>
                  {items.title}
                </Typography>

                <Box sx={designs.User_Date}>
                  <Typography noWrap sx={designs.Professor}>
                    {items.name}
                  </Typography>

                  <Typography noWrap sx={designs.Date2}>
                    returned this quiz on {items.date} at {items.time}
                  </Typography>
                </Box>
              </Box>

              <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>

              <Box className = "points-score" sx = {designs.Points_Score_Style}>
                  <Typography noWrap sx={designs.Points_Style}>
                    {items.points}
                  </Typography>

                  <Divider orientation = "vertical" sx = {designs.DividerV_Style}/>

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

export default Studentquizzes_layout;
