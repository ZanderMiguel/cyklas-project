import React from 'react';

import { Box, Typography, Button } from '@mui/material';
import useStyle from './Styles/Notifications_viewall_style';
function Requests({ items }) {
  const { designs } = useStyle();
  return (
    <Box sx={designs.RequestContainer_Sub_Style}>
      <Box sx={designs.RequestContainer_Sub2_Style}> {items.avatar}</Box>

      <Box>
        <Typography
          sx={{
            fontSize: '0.8em',
            fontWeight: '600',
            color: '#3F3D56',
            width: 'auto',
            flexGrow: 1,
          }}
        >
          {items.user}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.8em',
            fontWeight: '500',
            color: '#64627F',
            width: 'auto',
            flexGrow: 1,
          }}
        >
          {items.action}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.5em',
            fontWeight: '500',
            color: '#8E8E8E',
            width: 'auto',
            flexGrow: 1,
          }}
        >
          {items.dateTime}
        </Typography>

        <Box
          sx={{
            flexGrow: 1,
            marginTop: '0.5em',
            width: 'auto',
            height: 'auto',
            display: 'flex',
            gap: '1em',
          }}
        >
          <Button
            variant="contained"
            sx={{
              fontSize: '0.7em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              color: 'white',
              backgroundColor: '#0069D3',
              padding: '0.1em 2em',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: '#005DC3',
              },
            }}
          >
            Accept
          </Button>

          <Button
            variant="contained"
            sx={{
              fontSize: '0.7em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              color: '#3F3D56',
              backgroundColor: 'transparent',
              padding: '0.1em 2em',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
              },
            }}
          >
            Decline
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Requests;
