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
  Tooltip
} from '@mui/material';
import { Settings, Logout, Circle } from '@mui/icons-material';
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
        <ListItem sx = {{ padding: "0em" }}>
          <Box sx={designs.Container_Sub_Style}>
            <Avatar
              src={avatar}
              alt="profileImg"
              sx={designs.ProfileImg_Style}
            />
            <Box>
              <Typography sx = {{
                color: "#3F3D56",
                fontSize: "1.2em",
                fontWeight: "600",
                textTransform: "none",
                width: "15em",
                height: "auto"
              }}>
                {`${JSON.parse(localStorage.userData).data.user.firstName} ${
                  JSON.parse(localStorage.userData).data.user.lastName
                }`}
              </Typography>
              
              <Box sx = {{ width: "relative", height: "auto", display: "flex", gap: "0.5em" }}>
                <Circle sx = {{  marginTop: "0.6em", color: "#007FFF", fontSize: "0.5em" }}/>

                <Typography sx = {{
                  color: "#007FFF",
                  fontSize: "0.8em",
                  fontWeight: "500",
                  texTransform: "Uppercase",
                  width: "auto",
                  height: "auto",
                  marginRight: "0.5em"
                }}>
                  {JSON.parse(localStorage.userData).data.user.userType}
                </Typography>

                <Divider orientation = "vertical" flexItem sx = {{ margin: "0.3em 0em" }}/>
                
                <Tooltip title = {JSON.parse(localStorage.userData).data.user.emailAddress} placement="top">
                <Typography noWrap sx = {{
                color: "#3F3D56",
                fontSize: "0.8em",
                fontWeight: "500",
                texTransform: "none",
                width: "13em",
                height: "auto",
                "&: hover": {
                  cursor: "pointer"
                }
              }}>
                {JSON.parse(localStorage.userData).data.user.emailAddress}
              </Typography>
              </Tooltip>
              </Box>
              
            </Box>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/settings" sx = {{ padding: "0.5em 1em", "&: hover": { backgroundColor: "#FCFCFC", borderLeft: "5px solid #007FFF"} }}>
          <Box sx={designs.Container_Sub2_Style}>
            <Settings sx={designs.Setting_Style} />
            <Typography sx = {{ marginTop: "0.1em", fontSize: "0.9em", fontWeight: "500", color: "#3F3D56" }}>Setting</Typography>
          </Box>
        </ListItem>
        <Divider />
        <ListItem button onClick={handleLogOut} sx = {{ padding: "0.5em 1.2em", "&: hover": { backgroundColor: "#FCFCFC", borderLeft: "5px solid #007FFF"} }}>
          <Box sx={designs.Container_Sub2_Style}>
            <Logout sx={designs.Logout_Style} />
            <Typography sx = {{ marginTop: "0.1em", fontSize: "0.9em", fontWeight: "500", color: "#3F3D56" }}>Logout</Typography>
          </Box>
        </ListItem>
      </List>
    </Box>
  );
}

export default Accountpopover;
