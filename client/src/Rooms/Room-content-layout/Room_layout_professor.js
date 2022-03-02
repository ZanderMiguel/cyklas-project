import React from 'react';
import { Typography, Paper, IconButton, Box, Grid } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import CusPopover from '../../components/Popover';
import RoomsOptionpopover from '../../components/PopoverContent/RoomsOptionpopover';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import '../View_activity_style.css';
import CssBasedLine from '@mui/material/CssBaseline';

function Room_layout({ data }) {
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
              <Box className="RoomSubject" display="flex">
                <Box
                  className="sub-RoomSubject"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    maxWidth: '15rem',
                  }}
                >
                  <Link style={{ textDecoration: 'none' }} to={`/rooms/${id}`}>
                    <Typography
                      variant="h5"
                      noWrap
                      sx={{
                        fontWeight: 600,
                        color: '#3F3D56',
                        textTransform: 'Uppercase',
                      }}
                    >
                      {title}
                    </Typography>

                    <Typography
                      variant="h6"
                      noWrap
                      sx={{
                        fontWeight: 500,
                        color: '#3F3D56',
                        marginBottom: '1rem',
                      }}
                    >
                      {subtitle}
                    </Typography>
                  </Link>
                </Box>
                <Box flexGrow={1} />
                <Box className="RoomId" display="flex" marginLeft="17px">
                  <Typography
                    variant="body1"
                    component="h2"
                    sx={{
                      fontWeight: 'bold',
                      color: '#007FFF',
                      textTransform: 'Uppercase',
                      marginRight: '15px',
                      padding: '10px 0px 10px 0px',
                    }}
                  >
                    Room id:
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      color: '#007FFF',
                      textTransform: 'Uppercase',
                      marginRight: '20px',
                      padding: '10px 0px 10px 0px',
                    }}
                  >
                    {index}
                  </Typography>
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
                PaperProps={{ elevation: 0 }}
                open={account}
                anchorEl={anchorEl}
                onClose={handleCloseOption}
              >
                <RoomsOptionpopover />
              </CusPopover>

              <Box
                className="Schedule"
                display="flex"
                sx={{
                  marginBottom: '5px',
                }}
              >
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: 'medium',
                    color: '#8C8C8C',
                    marginRight: '48px',
                  }}
                >
                  {date}
                </Typography>
                <Box
                  className="Seperator"
                  width="1px"
                  height="auto"
                  sx={{
                    backgroundColor: '#C9C9C9',
                    marginRight: '20px',
                  }}
                ></Box>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: 'medium',
                    color: '#8C8C8C',
                    textTransform: 'Uppercase',
                  }}
                >
                  {time}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}

export default Room_layout;
