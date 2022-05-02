import React from 'react';
import NoContent from '../assets/ImageJaven/NoContent.png';
import { Container, Grid, Box, Typography, Divider } from '@mui/material';
import { Info } from '@mui/icons-material';

function MeetingInformation() {
  return (
    <div
      style={{
        width: '23.9rem',
        height: '98vh',
      }}
    >
      <Box
        sx={{
          width: 'relative',
          height: '2.5em',
          display: 'flex',
          alignItems: 'center',
          gap: '0.8em',
          padding: '0em 1em',
          margin: '0.5em 0.5em 1em 0.5em',
          backgroundColor: '#31353D',
          borderRadius: '0.4em',
          borderBottom: '1px solid #464646',
        }}
      >
        <Info sx={{ fontSize: '1.3em', color: '#DEDEDE' }} />

        <Typography
          children="Meeting Information"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '600',
            textAlign: 'center',
            '&: hover': {
              cursor: 'default',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          width: 'relative',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2em',
          borderRadius: '0.3em',
          margin: '0.8em 1.5em',
        }}
      >
        <Typography
          children="Meeting ID:"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            textAlign: 'Left',
          }}
        />

        <Typography
          children="VM22KRT"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            padding: '0em 0em',
            textAlign: 'Left',
          }}
        />
      </Box>

      <Box
        sx={{
          width: 'relative',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2em',
          borderRadius: '0.3em',
          margin: '0.8em 1.5em',
        }}
      >
        <Typography
          children="Meeting Started at:"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            textAlign: 'Left',
          }}
        />

        <Typography
          children="09:00 AM"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            padding: '0em 0em',
            textAlign: 'Left',
          }}
        />
      </Box>

      <Box
        sx={{
          width: 'relative',
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          gap: '1.2em',
          borderRadius: '0.3em',
          margin: '0.8em 1.5em',
        }}
      >
        <Typography
          children="Meeting Used Time:"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            textAlign: 'Left',
          }}
        />

        <Typography
          children="01h: 30m"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            padding: '0em 0em',
            textAlign: 'Left',
          }}
        />
      </Box>

      <Box
        sx={{
          border: '1px solid #464646',
          width: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.2em',
          padding: '0.3em 0em',
          margin: "1.5em",
          borderRadius: '0.3em',
        }}
      >
        <Typography
          children="December 12, 2021"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            textAlign: 'center',
          }}
        />

        <Typography
          children="3:23 PM"
          sx={{
            height: 'relative',
            width: 'auto',
            color: '#DEDEDE',
            fontSize: '0.8em',
            fontWeight: '500',
            textAlign: 'center',
          }}
        />
      </Box>
    </div>
  );
}

export default MeetingInformation;
