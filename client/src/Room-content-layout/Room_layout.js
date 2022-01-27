import React from 'react';
import { Typography, Paper, IconButton, Box, Grid } from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { CssBaseline } from '@mui/material';

function Room_layout({ data, elevation }) {
  return (
    <>
      <CssBaseline />
      {data.map((item, index) => {
        const {
          RoomName: title,
          Course: subtitle,
          ClassDays: date,
          ClassTime: time,
        } = item;
        return (
          <Paper
            key={index}
            data-index={index}
            sx={{
              backgroundColor: '#FAFAFA',
              width: '100%',
              padding: '17px 17px 17px 35px',
              borderRadius: '0.5em',
              marginBottom: '10px',
            }}
          >
            <Box className="RoomSubject" display="flex">
              <Box className="sub-RoomSubject" flexGrow={1}>
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
        );
      })}
    </>
  );
}

export default Room_layout;
