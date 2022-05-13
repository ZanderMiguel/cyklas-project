import React from 'react';
import { Typography, Avatar, Box, Input } from '@mui/material';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';

const dataStudentList = [
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Paul Rudd',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Tom Holland',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Tom Hiddleston',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Sebastian Stan',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
  },
  {
    avatar: <Avatar src={AvatarIcon} sx={{ marginRight: '0.5em' }} />,
    studentName: 'Robert Downey Jr.',
    userType: 'Student',
    courseYearSec: 'BSCS 3A',
  },
];

function Automate({ members }) {
  return (
    <Box sx={{ width: 'relative', height: '23em' }}>
      <Box
        sx={{
          display: 'flex',
          width: 'relative',
          height: 'auto',
          gap: '0.4em',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#3F3D56',
            fontSize: '0.9em',
            fontWeight: '500',
            height: 'max-content',
            width: 'auto',
          }}
        >
          Allocate
        </Typography>

        <Typography
          sx={{
            color: '#3F3D56',
            fontSize: '0.9em',
            fontWeight: '600',
            height: 'max-content',
            width: 'auto',
          }}
        >
          {members.current.length}
        </Typography>

        <Typography
          sx={{
            color: '#3F3D56',
            fontSize: '0.9em',
            fontWeight: '500',
            height: 'max-content',
            width: 'auto',
          }}
        >
          Students into
        </Typography>

        <Input
          id="groupNumber"
          type="number"
          sx={{
            border: '1px solid #C4C4C4',
            borderRadius: '0.3em',
            padding: '0em 0.3em 0em 0.9em ',
            margin: '0em 0.5em',
            width: '5em',
            fontSize: '0.9em',
            fontWeight: '600',
            color: '#007FFF',
            '&: hover': {
              border: '1px solid #212121',
            },
          }}
        />

        <Typography
          sx={{
            color: '#3F3D56',
            fontSize: '0.9em',
            fontWeight: '500',
            height: 'max-content',
            width: 'auto',
          }}
        >
          groups.
        </Typography>
      </Box>

      <Typography
        sx={{
          color: '#3F3D56',
          fontSize: '0.8em',
          fontWeight: '400',
          textAlign: 'right',
          margin: '0.5em 0em 0.3em 0em',
          paddingBottom: '0.5em',
          width: 'relative',
          height: 'max-content',
          borderBottom: '1px solid #DBDBDB',
        }}
      >
        5 / 5
      </Typography>

      <Box sx={{ width: 'relative', height: 'auto' }}>
        {members.current.map(function (items, index) {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: 'relative',
                height: 'auto',
                padding: '0.5em 0em',
              }}
            >
              <Avatar
                src={items.camera}
                alt={items.memberName[0].toUpperCase()}
              />

              <Typography
                sx={{
                  color: '#3F3D56',
                  fontSize: '0.8em',
                  fontWeight: '600',
                  width: '20em',
                  height: 'auto',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                {items.memberName}
              </Typography>

              <Box flexGrow={1} />

              <Typography
                sx={{
                  color: '#007FFF',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  width: '5em',
                  height: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Student
              </Typography>

              <Box flexGrow={1} />

              <Typography
                noWrap
                sx={{
                  color: '#3F3D56',
                  fontSize: '0.8em',
                  fontWeight: '500',
                  width: '15em',
                  height: 'relative',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
              >
                {items.courseYearSec}
              </Typography>
            </Box>
          );
        })}
      </Box>

      <Box
        sx={{
          backgroundColor: '#EDF3F9',
          display: 'flex',
          width: 'relative',
          height: 'auto',
          gap: '0.4em',
          padding: '0.5em 0em',
          margin: '0.8em 0em 0em 0em',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            color: '#007FFF',
            fontSize: '0.9em',
            fontWeight: '600',
            height: 'max-content',
            width: 'auto',
          }}
        >
          (2 - 3)
        </Typography>

        <Typography
          sx={{
            color: '#007FFF',
            fontSize: '0.9em',
            fontWeight: '600',
            height: 'max-content',
            width: 'auto',
          }}
        >
          students per group.
        </Typography>
      </Box>
    </Box>
  );
}

export default Automate;
