import React from 'react';

import { Grid, Paper, Typography, Container } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PersonalInformation from './PersonalInformation';
import AccountInformation from './AccountInformation';

function SettingsCont() {
  const [view, setView] = React.useState(true);

  return (
    <>
      <Container maxWidth="lg">
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
                <ListItem
                  disableRipple
                  button
                  onClick={() => setView(true)}
                  sx={view ? { backgroundColor: '#EBEBEB' } : null}
                >
                  <ListItemIcon>
                    <LockOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography noWrap>Profile</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem
                  disableRipple
                  button
                  onClick={() => setView(false)}
                  sx={view ? null : { backgroundColor: '#EBEBEB' }}
                >
                  <ListItemIcon>
                    <AccountBoxOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography noWrap>Account</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item container xs={10} spacing={2}>
            {view ? <PersonalInformation /> : <AccountInformation />}
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SettingsCont;
