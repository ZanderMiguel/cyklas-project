import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';

function Accountpopover() {
  return (
    <Box width={360} maxWidth={150} maxHeight={300}>
      <List component="nav" aria-label="mailbox folders" sx={{ width: '100%' }}>
        <ListItem button component={Link} to="/Settings">
          <Box display="flex">
            <Settings sx={{ mr: '0.5em' }} />
            <Typography>Setting</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box display="flex">
            <Logout sx={{ mr: '0.5em' }} />
            <Typography>Log out</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default Accountpopover;
