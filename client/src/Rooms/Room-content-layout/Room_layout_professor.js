import React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import CusPopover from '../../components/Popover';
import RoomOptionspopover_professor from '../../components/PopoverContent/RoomOptionspopover_professor';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import RoomBackground6 from '../../assets/ImageJaven/RoomBackground6.png';
import '../Styles/View_activity_style.css';

function Room_layout({ data, socket , setNewRoom }) {
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
      <CssBaseline />
      {data.map((item, index) => {
        const {
          _id: id,
          RoomName: title,
          Course: subtitle,
          ClassDays: date,
          ClassTime: time,
          yearAndSection: yrsection,
        } = item;
        return (
          <Grid item xs={12} key={index}>
            <Paper
              sx={{
                backgroundImage: `url(${RoomBackground6})`,
                backgroundSize: 'cover',
                boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
                width: '100%',
                padding: '17px 17px 17px 35px',
                borderRadius: '0.5em',
                marginBottom: '1em',
                '&:hover': {
                  boxShadow:
                    'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
                },
              }}
            >
              <Box display="flex">
                <Box
                  sx={{
                    width: 'auto',
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component={Link}
                    to={`/rooms/${item._id}`}
                    variant="h5"
                    sx={{
                      fontSize: '1.5em',
                      fontWeight: 600,
                      color: '#3F3D56',
                      textTransform: 'Uppercase',
                      textDecoration: 'none',
                      width: 'relative',
                    }}
                  >
                    {item.RoomName}
                  </Typography>
                  <Box
                    display="flex"
                    gap="1em"
                    width="auto"
                    flexGrow={1}
                    flexWrap="wrap"
                  >
                    <Typography
                      variant="subtitle1"
                      noWrap
                      sx={{
                        fontSize: '1em',
                        fontWeight: 500,
                        color: '#3F3D56',
                        width: 'auto',
                        textTransform: 'uppercase',
                        marginBottom: '1rem',
                      }}
                    >
                      {item.Course}
                    </Typography>
                  </Box>

                  <Box
                    className="Schedule"
                    display="flex"
                    gap="1em"
                    sx={{
                      marginBottom: '5px',
                    }}
                  >
                    <Typography
                      sx={{
                        width: '7em',
                        fontSize: '0.8em',
                        fontWeight: '500',
                        color: '#8C8C8C',
                        textTransform: 'Capitalize',
                      }}
                    >
                      {item.ClassDays}
                    </Typography>
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: '0.3em 0em' }}
                    />
                    <Typography
                      sx={{
                        width: '5em',
                        fontSize: '0.8em',
                        fontWeight: '500',
                        color: '#8C8C8C',
                        textTransform: 'Uppercase',
                      }}
                    >
                      {item.ClassTime}
                    </Typography>
                  </Box>
                </Box>

                <Box flexGrow={1} />
                <Box className="RoomId" display="flex">
                  <IconButton
                    aria-label="options"
                    size="medium"
                    sx={{
                      color: '#8E8E8E',
                      height: '35px',
                      width: '35px',
                    }}
                    onClick={handleClickOption}
                  >
                    <MoreVert />
                  </IconButton>
                </Box>
              </Box>

              <CusPopover
                PaperProps={{ elevation: 1 }}
                open={account}
                anchorEl={anchorEl}
                onClose={handleCloseOption}
              >
                <RoomOptionspopover_professor id={ id} setNewRoom={setNewRoom} />
              </CusPopover>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}

export default Room_layout;
