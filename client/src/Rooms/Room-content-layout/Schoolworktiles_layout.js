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
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import {
  PanoramaOutlined,
  AttachFileOutlined,
  InsertLinkOutlined,
} from '@mui/icons-material';

const data = [
  {
    // Lesson: "Lesson 3",
    Activity: 'Activity 5',
    Professor: 'Mark Andrei (You)',
    date: 'posted on ' + Date.now(),
  },

  {
    // Lesson: "Lesson 2",
    Activity: 'Activity 4',
    Professor: 'Mark Andrei (You)',
    date: 'posted on ' + Date.now(),
  },

  {
    // Lesson: "Lesson 2",
    Activity: 'Activity 3',
    Professor: 'Mark Andrei (You)',
    date: 'posted on ' + Date.now(),
  },

  {
    // Lesson: "Lesson 1",
    Activity: 'Activity 2',
    Professor: 'Mark Andrei (You)',
    date: 'posted on ' + Date.now(),
  },

  {
    // Lesson: "Lesson 1",
    Activity: 'Activity 1',
    Professor: 'Mark Andrei (You)',
    date: 'posted on ' + Date.now(),
  },
];

function Schoolworktiles_layout() {
  const { designs } = useStyle();

  return (
    <>
      {data.map(function (item, index) {
        return (
          <Grid item xs={12} key={index}>
            <Box sx={designs.BoxTileContainer}>
              <Box sx={designs.ActivityContainer}>
                <img
                  src={ActivityIcon}
                  style={{
                    height: '2.2em',
                    margin: '0.5em 0.8em 0em 1.4em',
                  }}
                />

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
                  <IconButton sx={designs.IconButtonOptions}>
                    <MoreVert sx={designs.MoreVertIcon} />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default Schoolworktiles_layout;
