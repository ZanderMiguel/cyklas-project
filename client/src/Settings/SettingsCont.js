import React from 'react';
import { Container } from '@mui/material';
import MainSettings from './MainSettings';
import Settings from './Settings';
import { Link } from 'react-router-dom';

import { Grid, Paper, Typography } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PersonalInformation from './PersonalInformation';
import AccountInformation from './AccountInformation';
import { RecentActors } from '@mui/icons-material';

function SettingsCont() {
  const [background, setBackground] = React.useState(null);

  const handleMenu = () => {
    setBackground('#DBDBDB');
  };

  const menuItem = [
    {
      text: <Typography noWrap children="Profile" />,
      icon: <AccountBoxOutlinedIcon />,
      path: '/setting',
    },
    {
      text: <Typography noWrap children="Account" />,
      icon: <LockOutlinedIcon />,
      path: '/setting',
    },
  ];

  return (
    <>
      <Grid container sx={{ mt: 7 }} spacing={4}>
        <Grid item xs={2}>
          <Paper
            sx={{
              height: '70vh',
              paddingTop: '1em',
              borderRadius: '10px',
              border: '2px solid #DBDBDB ',
            }}
          >
            <List>
              {menuItem.map((item, index) => (
                <ListItem disableRipple button key={index}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item container xs={10} spacing={2}>
          <PersonalInformation />
        </Grid>
      </Grid>
    </>
  );
}

export default SettingsCont;
