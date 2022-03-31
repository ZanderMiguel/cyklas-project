import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { useHistory } from 'react-router-dom';
import {
  List,
  ListItem,
  Divider,
  Box,
  Typography,
  Avatar,
} from '@mui/material';
import { Settings, Logout } from '@mui/icons-material';
import useStyle from './Styles/Accountpopover_style';

function Accountpopover({ avatar }) {
  const history = useHistory();
  const { designs } = useStyle();
  const theme = useTheme();

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('token');
    history.push('/home');
  };

  return (
    <Box sx={designs.Container_Style}>
      <List component="nav" sx={designs.Nav_Style}>
        <ListItem>
          <Box sx={designs.Container_Sub_Style}>
            <Avatar
              src={avatar}
              alt="profileImg"
              sx={designs.ProfileImg_Style}
            />
            <Box>
              <Typography variant="h6">
                {`${JSON.parse(localStorage.userData).data.user.firstName} ${
                  JSON.parse(localStorage.userData).data.user.lastName
                }`}
              </Typography>
              <Typography variant="body1">
                {JSON.parse(localStorage.userData).data.user.emailAddress}
              </Typography>
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/settings">
          <Box sx={designs.Container_Sub2_Style}>
            <Settings sx={designs.Setting_Style} />
            <Typography>Setting</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button onClick={handleLogOut}>
          <Box sx={designs.Container_Sub3_Style}>
            <Logout sx={designs.Logout_Style} />
            <Typography>Log out</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default Accountpopover;
