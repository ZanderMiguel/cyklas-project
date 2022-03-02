import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  List,
  ListItem,
  Divider,
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import Zander from '../../assets/Images/zander.png';

function Accountpopover() {
  const theme = useTheme();

  return (
    <Box width={400} maxWidth={400} maxHeight={300}>
      <List component="nav" sx={{ width: '100%' }}>
        <ListItem>
          <Box display="flex" overflow="auto">
            <Avatar src={Zander} alt="profileImg" sx={{ mr: 2 }} />
            <Box>
              <Typography variant="h6">Zander Miguel Mirador</Typography>
              <Typography variant="body1">miradorzander@gmail.com</Typography>
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/settings">
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
