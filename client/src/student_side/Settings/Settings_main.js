import React from 'react';
import { Grid, Paper, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import { AccountBoxOutlined, LockOutlined, Delete } from '@mui/icons-material';
import PersonalInformation_layout from './Layouts/PersonalInformation_layout';
import AccountInformation_layout from './Layouts/AccountInformation_layout';
import useStyle from "./Styles/Settings_main_style";

function Settings_main() {
  const { designs } = useStyle();

  const [view, setView] = React.useState(true);

  return (
      <Container maxWidth="lg">
        <Grid container sx = {designs.SettingsContainer_GridContainer_Style}>
          <Grid item xs = {12} sx = {designs.List_Responsive_Style}>
          <Button onClick={() => setView(true)} 
          variant="contained" sx = 
          { view ? { 
            boxShadow: "none",
            backgroundColor: "#F6F6F6", 
            fontSize: "0.9em", 
            fontWeight: "500", 
            color: "#3F3D56", 
            padding: "0.2em 2.7em", 
            width: "relative", 
            textTransform: "Capitalize", 
            borderRadius: "0em",
             "&: hover": { backgroundColor: "#EDEDED", boxShadow: "none", } 
          }
          :
          { 
            boxShadow: "none",
            backgroundColor: "#FEFEFE", 
            fontSize: "0.9em", 
            fontWeight: "500", 
            color: "#3F3D56", 
            padding: "0.2em 2.7em", 
            width: "relative", 
            textTransform: "Capitalize", 
            borderRadius: "0em",
             "&: hover": { backgroundColor: "#EDEDED", boxShadow: "none", } 
          }
          }
          startIcon={<LockOutlined sx = {{ 
            marginRight: "0.5em", 
            width: "max-content", 
            fontSize: "1.4em" 
            }}/>}>
            Profile
          </Button>

          <Button onClick={() => setView(false)} 
          variant="contained" sx = 
          { view ? { 
            boxShadow: "none",
            backgroundColor: "#FEFEFE", 
            fontSize: "0.9em", 
            fontWeight: "500", 
            color: "#3F3D56", 
            padding: "0.2em 2.7em", 
            width: "relative", 
            textTransform: "Capitalize", 
            borderRadius: "0em",
             "&: hover": { backgroundColor: "#EDEDED", boxShadow: "none", } 
          }
          :
          { 
            boxShadow: "none",
            backgroundColor: "#F6F6F6", 
            fontSize: "0.9em", 
            fontWeight: "500", 
            color: "#3F3D56", 
            padding: "0.2em 2.7em", 
            width: "relative", 
            textTransform: "Capitalize", 
            borderRadius: "0em",
             "&: hover": { backgroundColor: "#EDEDED", boxShadow: "none", } 
          }
          }
          startIcon={<AccountBoxOutlined sx = {{ 
            marginRight: "0.5em", 
            width: "max-content", 
            fontSize: "1.4em" 
            }}/>}>
            Account
          </Button>
          </Grid>

          <Grid item xs={3} sx = {designs.LeftContainer_GridItem_Style}>
            <Paper sx = {designs.Paper_Style}>
              <List sx = {designs.List_Style}>
                <ListItem
                  disableRipple
                  button
                  onClick={() => setView(true)}
                  sx = 
                  {view ? 
                    { backgroundColor: '#F6F6F6',  marginBottom: "0.2em", padding: "0.2em 1em", width: "relative", "&: hover": { backgroundColor: "#F6F6F6"} }
                    : 
                    { marginBottom: "0.2em", padding: "0.2em 1em", width: "relative", "&: hover": { backgroundColor: "#F6F6F6"} }}>
                  <ListItemIcon sx = {designs.ListItemIcon_Style}>
                    <LockOutlined sx = {designs.LockIcon_Style}/>
                  </ListItemIcon>
                  <ListItemText sx = {designs.ListItemText_Style}>
                    <Typography noWrap sx = {designs.Profile_Typography_Style}>Profile</Typography>
                  </ListItemText>
                </ListItem>

                <ListItem
                  disableRipple
                  button
                  onClick={() => setView(false)}
                  sx = 
                  {view ? 
                    { padding: "0.2em 1em", width: "relative", "&: hover": { backgroundColor: "#F6F6F6"} }
                    : 
                    { backgroundColor: '#F0F0F0', padding: "0.2em 1em", width: "relative", "&: hover": { backgroundColor: "#F6F6F6"} }}>
                  <ListItemIcon sx = {designs.ListItemIcon_Style}>
                    <AccountBoxOutlined sx = {designs.AccountBoxIcon_Style}/>
                  </ListItemIcon>
                  <ListItemText sx = {designs.ListItemText_Style}>
                    <Typography noWrap sx = {designs.Account_Typography_Style}>Account</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Paper>
          </Grid>
          <Grid item container md = {9} xs={12} sx = {designs.RightContainer_GridItem_Style}>
            {view ? <PersonalInformation_layout /> : <AccountInformation_layout />}
          </Grid>
        </Grid>
      </Container>
  );
}

export default Settings_main;
