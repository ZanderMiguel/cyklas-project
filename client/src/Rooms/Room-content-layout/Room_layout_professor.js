import React from 'react';
import { Typography, Paper, IconButton, Box, Grid, Divider } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import CusPopover from '../../components/Popover';
import RoomOptionspopover_professor from '../../components/PopoverContent/RoomOptionspopover_professor';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';
import RoomBackground6 from "../../assets/ImageJaven/RoomBackground6.png";
import '../Styles/View_activity_style.css';
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
              sx={{
                // backgroundColor: '#F6F6F6',
                backgroundImage:`url(${RoomBackground6})`,
                backgroundSize: 'cover',
                boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
                width: '100%',
                padding: '17px 17px 17px 35px',
                borderRadius: '0.5em',
                marginBottom: '1em',
                '&:hover': {
                  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
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
                      noWrap
                      sx={{
                        fontSize: "1.5em",
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
                        fontSize: "1em",
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
                <Box className="RoomId" display="flex">
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "0.8em",
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
                      fontSize: "0.8em",
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
                <RoomOptionspopover_professor />
              </CusPopover>

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
                    width: "7em",
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#8C8C8C',
                    textTransform: 'Capitalize',
                  }}
                >
                  {date}
                </Typography>
                <Divider orientation = "vertical" flexItem sx = {{ margin: "0.3em 0em" }}/>
                <Typography
                  sx={{
                    width: "3em",
                    fontSize: '0.8em',
                    fontWeight: '500',
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
