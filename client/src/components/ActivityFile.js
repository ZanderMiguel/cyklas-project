import React from 'react';
import { Box, Typography } from '@mui/material';
import Wordfile from '../assets/ImageJaven/Wordfile.png';

function ActivityFile() {
  return (
    <Box
      className="Attach-file"
      sx={{
        backgroundColor: 'white',
        width: '100%',
        padding: '0.5em 0.9em',
        display: 'flex',
        gap: '0.9em',
        border: '1px solid #D4D4D4',
        borderRadius: '0.3em',
        '&: hover': {
          cursor: 'pointer',
          boxShadow:
            'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
        },
      }}
    >
      <img
        src={Wordfile}
        style={{
          height: '40px',
        }}
      />

      <Box
        className="Activity-filename"
        sx={{
          width: 'auto',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Typography
          noWrap
          sx={{
            color: '#3F3D56',
            fontSize: '0.8em',
            fontWeight: '600',
            width: 'relative',
            height: 'max-content',
          }}
        >
          ACTIVITY 5 - Paul Rudd.docx
        </Typography>

        <Typography
          sx={{
            color: '#3F3D56',
            fontSize: '0.7em',
            width: 'max-content',
            height: 'max-content',
          }}
        >
          Document File
        </Typography>
      </Box>
    </Box>
  );
}

export default ActivityFile;
