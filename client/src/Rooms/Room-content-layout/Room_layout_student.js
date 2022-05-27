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
import axios from 'axios'
import { Link } from 'react-router-dom';
import CssBasedLine from '@mui/material/CssBaseline';
import RoomBackground6 from '../../assets/ImageJaven/RoomBackground6.png';

function Room_layout_student({ data,setNewRoom }) {
  return (
    <>
      <CssBasedLine />
      {data &&
        data.map( ( item, index ) =>
        {
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
                      <Typography
                        key={index}
                        variant="subtitle1"
                        noWrap
                        sx={{
                          fontSize: '1em',
                          fontWeight: 500,
                          color: '#3F3D56',
                          width: 'auto',
                        }}
                      >
                        {`Professor: ${item.Host.name}`}
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
                          color: '#8C8C8C',
                          textTransform: 'Uppercase',
                        }}
                      >
                        {item.ClassTime}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    className="right"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Avatar
                      src={item.Host.avatar.replace(
                        'blob:',
                        ''
                      )}
                      sx={{ width: '4rem', height: '4rem' }}
                    />
                  </Box>

                  <Box>
                    <Tooltip title="Leave Room" placement="right">
                      <IconButton
                        sx={{
                          marginLeft: '0.3em',
                          height: '1.2em',
                          width: '1.2em',
                        }}
                        onClick={() =>
                        { 
                          axios
                            .put('http://localhost:5000/room/leave', {
                              roomID: item._id,
                              userID: JSON.parse(localStorage.userData).data.user._id,
                            })
                            .then((res) => {
                              setNewRoom(prev => !prev)
                            })
                            .catch((err) => console.log(err));
                        }}
                      >
                        <DoorFrontOutlined
                          sx={{
                            fontSize: '0.8em',
                            color: '#707070',
                            '&: hover': { color: '#707070' },
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

export default Room_layout_student;
