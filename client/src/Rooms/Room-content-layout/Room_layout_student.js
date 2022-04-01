import React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Box,
  Grid,
  Avatar,
  Divider,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import CusPopover from '../../components/Popover';
import RoomOptionspopover_student from '../../components/PopoverContent/RoomOptionspopover_student';
import { Link } from 'react-router-dom';
import CssBasedLine from '@mui/material/CssBaseline';

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
    <>
      <CssBasedLine />
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
                marginBottom: '10px',
                '&:hover': {
                  boxShadow:
                    '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
                },
              }}
            >
              <Box display="flex">
                <Box
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '15rem',
                  }}
                >
                  <Typography
                    component={Link}
                    to={`/rooms/${id}`}
                    variant="h5"
                    noWrap
                    sx={{
                      fontWeight: 600,
                      color: '#3F3D56',
                      textTransform: 'Uppercase',
                      textDecoration: 'none',
                    }}
                  >
                    {title}
                  </Typography>
                  <Box display="flex">
                    <Typography
                      variant="subtitle1"
                      noWrap
                      sx={{
                        fontWeight: 500,
                        color: '#3F3D56',
                      }}
                    >
                      {subtitle}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      noWrap
                      sx={{
                        fontWeight: 500,
                        color: '#3F3D56',
                        ml: 2,
                      }}
                    >
                      Prof. Orense
                    </Typography>
                  </Box>
                </Box>
                <Box flexGrow={1} />
                <Box className="right" display="flex" alignItems="flex-start">
                  <Avatar sx={{ width: '4rem', height: '4rem' }} />
                  <IconButton onClick={handleClickOption} sx={{ marginLeft: '0.3em' }}>
                    <MoreVert />
                  </IconButton>

                  <CusPopover
                  PaperProps={{ elevation: 0 }}
                  open={account}
                  anchorEl={anchorEl}
                  onClose={handleCloseOption}
                >
                  <RoomOptionspopover_student />
                </CusPopover>
                </Box>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}

export default Room_layout_student;
