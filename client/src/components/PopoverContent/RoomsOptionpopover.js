import React from 'react';
import { List, ListItem, Divider, Box, Typography } from '@mui/material';

function RoomsOptionpopover() {
  return (
    <Box width={130}>
      <List component="nav" sx={{ width: '100%' }}>
        <ListItem button>
          <Box display="flex">
            <Typography>Edit</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box display="flex">
            <Typography>Leave room</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default RoomsOptionpopover;
