import React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Box,
  Grid,
  Avatar,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import CusPopover from '../../components/Popover';
import RoomsOptionpopover from '../../components/PopoverContent/RoomsOptionpopover';
import { Link } from 'react-router-dom';

function Room_layout_student({ data }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickOption = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);

  return (
    <div>
      {data.map((item, index) => {
        const {
          _id: id,
          RoomName: title,
          Course: subtitle,
          ClassDays: date,
          ClassTime: time,
        } = item;
        return (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={2}
              sx={{
                backgroundColor: '#FAFAFA',
                width: '100%',
                padding: '17px 17px 17px 35px',
                borderRadius: '0.5em',
                marginBottom: '0.5em',
                '&:hover': {
                  boxShadow:
                    '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
                },
              }}
            >
              <Box></Box>
            </Paper>
          </Grid>
        );
      })}
    </div>
  );
}

export default Room_layout_student;
