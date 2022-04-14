import React from 'react';
import { Box, Typography, IconButton, Divider } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import ExamIcon from '../../../../assets/ImageJaven/ExamIcon.png';
import useStyle from './Styles/Exams_layout_style';
import { Link } from "react-router-dom";

const data = [
      {
        title: 'Variables',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
        points: '8 points',
        score: '5 / 5'
      },
      {
        title: 'Conditional Statements',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
        points: '8 points',
        score: '5 / 5'
      },
      {
        title: 'Arrays',
        name: 'Mark Orense',
        date: Date.now().toLocaleString(),
        time: Date.now().toLocaleString(),
        points: '8 points',
        score: '5 / 5'
      },
];

function Exams_layout() {
  const { designs } = useStyle();

  return (
    <>
      {data.map((items, index) => {
        return (
          <Box sx={designs.BoxTileContainer} key={index}
          >
              <img
                src={ExamIcon}
                alt="ExamIcon"
                style={{
                  height: '2.2em',
                  margin: '0.3em 0.8em 0em 0em',
                }}
              />

              <Box sx={designs.ExamName_User_Date}
              component = {Link}
              to = "/Exam_viewed"
              >
                <Typography noWrap sx={designs.Exam}>
                  {items.title}
                </Typography>

                <Box sx={designs.User_Date}>
                  <Typography noWrap sx={designs.Professor}>
                    {items.name}
                  </Typography>

                  <Typography noWrap sx={designs.Date2}>
                    returned this exam on {items.date} at {items.time}
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
          </Box>
        );
      })}
    </>
  );
}

export default Exams_layout;
