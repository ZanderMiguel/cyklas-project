import React from 'react';
import { Boxs as Box } from '../../components/Component';
import { Typography, IconButton } from '@mui/material';
import ExamIcon from '../../assets/ImageJaven/ExamIcon.png';
import { MoreVert } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyle from '../Styles/Exam_style';
import CusPopover from '../../components/Popover';
import SchoolworksTilespopover from '../../components/PopoverContent/SchoolworksTilespopover';

function Exam_layout({ bank }) {
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
            <Box sx={designs.ExamContainer}>
              <img
                src={ExamIcon}
                alt="QuizIcon"
                style={{
                  height: '2.2em',
                  margin: '0.3em 0.8em 0em 1.4em',
                }}
              />

              <Box
                sx={designs.ExamName_User_Date}
                component={Link}
                to="/View_exam"
              >
                <Box sx={designs.ExamName}>
                  <Typography noWrap sx={designs.Exam}>
                    {title}
                  </Typography>
                </Box>

                {/* <Box sx={designs.User_Date}>
                  <Typography noWrap sx={designs.Professor}>
                    {name} (You)
                  </Typography>

                  <Typography noWrap sx={designs.Date}>
                    {date} at {time}
                  </Typography>
                </Box> */}
              </Box>

              <Box sx={designs.BoxOptions}>
                <IconButton
                  onClick={handleClickOption}
                  sx={designs.IconButtonOptions}
                >
                  <MoreVert sx={designs.MoreVertIcon} />
                </IconButton>

                <CusPopover
                  PaperProps={{ elevation: 0 }}
                  open={account}
                  anchorEl={anchorEl}
                  onClose={handleCloseOption}
                >
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

export default Exam_layout;
