import React from 'react';
import { Grid, Box, Typography, Avatar } from '@mui/material';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';

const dataDayTime = [
  {
    day: 'Monday',
    time: '10:00 AM',
  },
  {
    day: 'Friday',
    time: '7:00 AM',
  },
];

function EvaluationRoom({ cc }) {
  return (
    <>
      <Grid
        item
        xs={7}
        sx={{
          padding: '0.3em',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'white',
            padding: '0.8em 1em',
            height: 'auto',
            display: 'flex',
            gap: '15px',
            borderRadius: '0.3em',
          }}
        >
          <Box
            width="9em"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Avatar
              alt={cc.professor.name[0].toUpperCase()}
              src={cc.professor.image.replace('blob:', '')}
              sx={{
                height: '100px',
                width: '100px',
              }}
            />
            <Typography
              sx={{
                color: '#3F3D56',
                width: '100%',
                fontSize: '0.8em',
                fontWeight: '600',
                textAlign: 'center',
              }}
            >
              {cc.professor.name.toUpperCase()}
            </Typography>
          </Box>

          <Box
            className="Room-sub"
            sx={{
              width: 'auto',
              flexGrow: 1,
              height: '8em',
              overflowY: 'auto',
            }}
          >
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '1.2em',
                fontWeight: '600',
                textTransform: 'Uppercase',
              }}
            >
              {cc.classRecord[0].RoomName}
            </Typography>

            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '1',
                fontWeight: '500',
                marginBottom: '0.8em',
              }}
            >
              {cc.classRecord[0].Course.toUpperCase()}{' '}
              {cc.classRecord[0].yearAndSection.toUpperCase()}
            </Typography>

            <Box marginBottom="0.2em" display="flex" gap="0.8em">
              <Typography
                sx={{
                  color: '#8C8C8C',
                  width: '7em',
                  fontSize: '0.8em',
                  height: 'max-content',
                }}
              >
                {cc.classRecord[0].ClassDays.toUpperCase()}
              </Typography>

              <Box
                width="1px"
                height="relative"
                margin="0.2em 0em"
                backgroundColor="#C9C9C9"
              />

              <Typography
                sx={{
                  color: '#8C8C8C',
                  width: 'auto',
                  fontSize: '0.8em',
                  height: 'max-content',
                  textTransform: 'Uppercase',
                }}
              >
                {cc.classRecord[0].ClassTime}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default EvaluationRoom;
