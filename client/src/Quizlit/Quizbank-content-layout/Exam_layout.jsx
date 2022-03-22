import React from 'react';
import { Buttons as Button, Boxs as Box } from '../../components/Component';
import { Typography, IconButton } from '@mui/material';
import ExamIcon from '../../assets/ImageJaven/ExamIcon.png';
import { MoreVert } from '@mui/icons-material';
import { Link } from "react-router-dom";
import useStyle from '../Styles/Exam_style';

function Exam_layout({ bank }) {
  const { designs } = useStyle();

  return (
    <>
      {bank.map((item, idx) => {
        const { title, name, date, time } = item;
        return (
          <Box sx={designs.BoxTileContainer} key={idx}
          component = {Link}
          to = "/View_exam">
            <Box sx={designs.ExamContainer}>
              <img
                src={ExamIcon}
                alt="QuizIcon"
                style={{
                  height: '2.2em',
                  margin: '0.5em 0.8em 0em 1.4em',
                }}
              />

              <Box sx={designs.ExamName_User_Date}>
                <Box sx={designs.ExamName}>
                  <Typography noWrap sx={designs.Exam}>
                    {title}
                  </Typography>
                </Box>

                <Box sx={designs.User_Date}>
                  <Typography noWrap sx={designs.Professor}>
                    {name} (You)
                  </Typography>

                  <Typography noWrap sx={designs.Date}>
                    {date} at {time}
                  </Typography>
                </Box>
              </Box>

              <Box sx={designs.BoxOptions}>
                <IconButton sx={designs.IconButtonOptions}>
                  <MoreVert sx={designs.MoreVertIcon} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default Exam_layout;
