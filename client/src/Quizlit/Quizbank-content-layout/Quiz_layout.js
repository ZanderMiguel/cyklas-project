import React from 'react';
import { Buttons as Button, Boxs as Box } from '../../components/Component';
import { Typography, IconButton } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import QuizIcon from '../../assets/ImageJaven/QuizIcon.png';
import useStyle from '../Styles/Quiz_style';
import { Link } from "react-router-dom";
import CusPopover from '../../components/Popover';
import SchoolworksTilespopover from '../../components/PopoverContent/SchoolworksTilespopover';

function Quiz_layout({ bank }) {
  const { designs } = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOption = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);

  return (
    <>
      {bank.map((item, idx) => {
        const { title, name, date, time } = item;
        return (
          <Box sx={designs.BoxTileContainer} key={idx}>
            <Box sx={designs.QuizContainer}>
              <img
                src={QuizIcon}
                alt="QuizIcon"
                style={{
                  height: '2.2em',
                  margin: '0.3em 0.8em 0em 1.4em',
                }}
              />

              <Box sx={designs.QuizName_User_Date} 
              component = {Link}
              to = "/View_quiz">
                <Box sx={designs.QuizName}>
                  <Typography noWrap sx={designs.Quiz}>
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
                <IconButton onClick={handleClickOption} sx={designs.IconButtonOptions}>
                  <MoreVert sx={designs.MoreVertIcon} />
                </IconButton>

                <CusPopover
                  PaperProps={{ elevation: 0 }}
                  open={account}
                  anchorEl={anchorEl}
                  onClose={handleCloseOption}>
                  <SchoolworksTilespopover />
                </CusPopover>
              </Box>
            </Box>
          </Box>
        );
      })}
    </>
  );
}

export default Quiz_layout;
