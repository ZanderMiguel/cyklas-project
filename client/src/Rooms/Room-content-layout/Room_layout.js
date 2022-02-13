import React from 'react';
import { Typography, Paper, IconButton, Box, Grid } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { Link } from 'react-router-dom';

function Room_layout({ data }) {
  console.log(data);
  return (
    <>
      <CssBaseline />
      {data
        .sort((a, b) => b.id - a.id)
        .map((item, index) => {
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
                elevation={0}
                sx={{
                  backgroundColor: '#FAFAFA',
                  width: '100%',
                  padding: '17px 17px 17px 35px',
                  borderRadius: '0.5em',
                  marginBottom: '10px',
                  '&:hover': {
                    boxShadow:
                      '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
                  },
                }}
              >
                <Box className="RoomSubject" display="flex">
                  <Box className="sub-RoomSubject" flexGrow={1}>
                    <Link
                      style={{ textDecoration: 'none' }}
                      to={`/Rooms/${id}`}
                    >
                      <Typography
                        variant="h5"
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
                        sx={{
                          fontWeight: 'bold',
                          color: '#3F3D56',
                          marginBottom: '15px',
                        }}
                      >
                        {subtitle}
                      </Typography>
                    </Link>
                  </Box>

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
                      onClick={() => {
                        console.log('potangina mo');
                      }}
                    >
                      <MoreVert />
                    </IconButton>
                  </Box>
                </Box>

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
