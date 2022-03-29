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
import useStyle from "./Styles/Accountpopover_style";

function Accountpopover() {
  const {designs} = useStyle();
  const theme = useTheme();

  return (
    <Box sx = {designs.Container_Style}>
      <List component="nav" sx = {designs.Nav_Style}>
        <ListItem>
          <Box sx = {designs.Container_Sub_Style}>
            <Avatar src={Zander} alt="profileImg" sx = {designs.ProfileImg_Style} />
            <Box>
              <Typography variant="h6">Zander Miguel Mirador</Typography>
              <Typography variant="body1">miradorzander@gmail.com</Typography>
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/settings">
          <Box sx = {designs.Container_Sub2_Style}>
            <Settings sx = {designs.Settings_Style} />
            <Typography>Setting</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button>
          <Box sx = {designs.Container_Sub3_Style}>
            <Logout sx = {designs.Logout_Style} />
            <Typography>Log out</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default Accountpopover;
