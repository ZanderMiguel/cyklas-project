import React from 'react';
import Input from '../../components/Input';
import useStyle from '../Styles/Announce_style';

import { Box, Grid, TextField, Avatar, InputAdornment } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MoreVert, Send, KeyboardArrowDown } from '@mui/icons-material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import ActivityIcon from '../../assets/ImageJaven/ActivityIcon.png';
import QuizIcon from '../../assets/ImageJaven/QuizIcon.png';
import ExamIcon from '../../assets/ImageJaven/ExamIcon.png';
import MeetingIcon from '../../assets/ImageJaven/MeetingIcon.png';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CusPopover from '../../components/Popover';
import SchoolworksTilespopover from '../../components/PopoverContent/SchoolworksTilespopover';
import {
  PanoramaOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
} from '@mui/icons-material';

const data = [
  {
    // Lesson: "Lesson 3",
    icon: <img
                  src={ActivityIcon}
                  style={{
                    height: '2.2em',
                    margin: '0.4em 0.8em 0em 1.4em',
                  }}
                />,
    Activity: 'Activity 5',
    Professor: 'Mark Andrei',
    date: 'posted this activity on ' + Date.now()
  },

  {
    // Lesson: "Lesson 2",
    icon: <img
                  src={QuizIcon}
                  style={{
                    height: '2.2em',
                    margin: '0.4em 0.8em 0em 1.4em',
                  }}
                />,
    Activity: 'Variables',
    Professor: 'Mark Andrei',
    date: 'posted this quiz on ' + Date.now()
  },

  {
    // Lesson: "Lesson 2",
    icon: <img
                  src={ExamIcon}
                  style={{
                    height: '2.2em',
                    margin: '0.4em 0.8em 0em 1.4em',
                  }}
                />,
    Activity: 'Preliminary Exam',
    Professor: 'Mark Andrei',
    date: 'posted this exam on ' + Date.now()
  },

  {
    // Lesson: "Lesson 1",
    icon: <img
                  src={MeetingIcon}
                  style={{
                    height: '2.2em',
                    margin: '0.4em 0.8em 0em 1.4em',
                  }}
                />,
    Activity: 'Video Conference',
    Professor: 'Mark Andrei',
    date: 'created this metting on ' + Date.now()
  },

  {
    // Lesson: "Lesson 1",
    icon: <img
                  src={ActivityIcon}
                  style={{
                    height: '2.2em',
                    margin: '0.4em 0.8em 0em 1.4em',
                  }}
                />,
    Activity: 'Activity 1',
    Professor: 'Mark Andrei',
    date: 'posted this activity on ' + Date.now()
  },
];

function Schoolworktiles_layout() {
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
    
    <Grid item xs={12} sx = {{ marginTop: "2em" }}>
      {data.map(function (item, index) {
        return (
            <Box key={index} sx={designs.BoxTileContainer}>
              <Box sx={designs.ActivityContainer}>
                {item.icon}

                <Box sx={designs.ActivityName_User_Date}>
                  <Box sx={designs.ActivityName}>
                    {/* <Typography
                          sx = {designs.Lesson}>
                          {item.Lesson}
                          </Typography> */}

                    <Typography noWrap sx={designs.Activity}>
                      {item.Activity}
                    </Typography>
                  </Box>

                  <Box sx={designs.User_Date}>
                    <Typography noWrap sx={designs.Professor}>
                      {item.Professor}
                    </Typography>

                    <Typography noWrap sx={designs.Date}>
                      {item.date}
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
      </Grid>
    </>
  );
}

export default Schoolworktiles_layout;
