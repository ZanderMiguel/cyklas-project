import React from 'react';

import { Grid, Paper, Typography } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PersonalInformation from './PersonalInformation';
import AccountInformation from './AccountInformation';

function SettingsCont() {
  const [view, setView] = React.useState(true);
  const [style, setStyle] = React.useState({
    backgroundColor: 'white',
  });

  const menuItem = [
    {
      text: <Typography noWrap children="Profile" />,
      icon: <AccountBoxOutlinedIcon />,
      onClick: (e) => {
        setView(true);
      },
    },
    {
      text: <Typography noWrap children="Account" />,
      icon: <LockOutlinedIcon />,
      onClick: () => {
        setView(false);
      },
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
                <ListItem
                  disableRipple
                  button
                  key={index}
                  onClick={item.onClick}
                  sx={style}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>{item.text}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
        <Grid item container xs={10} spacing={2}>
          {view ? <PersonalInformation /> : <AccountInformation />}
        </Grid>
      </Grid>
    </>
  );
}

export default SettingsCont;