import React from 'react';
import {
  Typography,
  Paper,
  IconButton,
  Box,
  Grid,
  Avatar,
  Divider,
  Tooltip,
} from '@mui/material';
import { DoorFrontOutlined } from '@mui/icons-material';
import CusPopover from '../../../components/Popover';
import RoomOptionspopover_student from '../../../components/PopoverContent/RoomOptionspopover_student';
import { Link } from 'react-router-dom';
import CssBasedLine from '@mui/material/CssBaseline';
import RoomBackground8 from '../../../assets/ImageJaven/RoomBackground8.png';

const dataRoom = [
  {
    id: 'sadasdxzz',
    title: 'sadasdxzz',
    subtitle: 'sadasdxzz',
    classDay: 'Huwebes',
    classTime: '1: 00 PM',
  },
  {
    id: 'sadasdxzz',
    title: 'sadasdxzz',
    subtitle: 'sadasdxzz',
    classDay: 'Huwebes',
    classTime: '1: 00 PM',
  },
  {
    id: 'sadasdxzz',
    title: 'sadasdxzz',
    subtitle: 'sadasdxzz',
    classDay: 'Huwebes',
    classTime: '1: 00 PM',
  },
];

function Rooms_layout({ data }) {
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
      {dataRoom.map((item, index) => {
        // const {
        //   _id: id,
        //   RoomName: title,
        //   Course: subtitle,
        //   ClassDays: date,
        //   ClassTime: time,
        // } = item;
        return (
          <Grid item xs={12} key={index}>
            <Paper
              sx={{
                backgroundImage: `url(${RoomBackground8})`,
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
                    // to={`/rooms/${item.id}`}
                    to = "/Rooms_inside2"
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
                    {item.title}
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
                      {item.subtitle}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      noWrap
                      sx={{
                        fontSize: '1em',
                        fontWeight: 500,
                        color: '#3F3D56',
                        width: 'auto',
                      }}
                    >
                      Prof. Orense
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
                    width: "7em",
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#8C8C8C',
                    textTransform: 'Capitalize',
                  }}
                >
                  {item.classDay}
                </Typography>
                <Divider orientation = "vertical" flexItem sx = {{ margin: "0.3em 0em" }}/>
                <Typography
                  sx={{
                    width: "5em",
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#8C8C8C',
                    textTransform: 'Uppercase',
                  }}
                >
                  {item.classTime}
                </Typography>
              </Box>
                </Box>

                <Box
                  className="right"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Avatar sx={{ width: '4rem', height: '4rem' }} />
                </Box>

                <Box>
                  <Tooltip title="Leave Room" placement="top-end">
                    <IconButton
                      sx={{
                        marginLeft: '0.3em',
                        height: '1.2em',
                        width: '1.2em',
                      }}
                    >
                      <DoorFrontOutlined
                        sx={{
                          fontSize: '0.8em',
                          color: '#615F79',
                          '&: hover': { color: '#FF3B00' },
                        }}
                      />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
            </Paper>
          </Grid>
        );
      })}
    </>
  );
}

export default Rooms_layout;
