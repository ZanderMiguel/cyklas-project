import React, { useState } from 'react';
import { Grid, Typography, Stack, TextField, Input, Box, Button } from '@mui/material';
import useStyle from "./Styles/Account_info_style";

function AccountInformation() {
  const {designs} = useStyle();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const [myApi, setMyApi] = React.useState(new Map());
  const handleChange = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };

  const textfield = [
    { 
      label: 'Current Password', 
      value: 'currentpassword',
      holder: 'Enter your current password'
    },
    { 
      label: 'New Password', 
      value: 'newpassword',
      holder: 'Enter your new password'
    },
    { 
      label: 'Confirm Password', 
      value: 'confirmedpassword',
      holder: 'Confirm your new password'
    }
  ];

  return (
    <>
      <Typography children = "ACCOUNT INFORMATION" sx = {designs.AccountInformation_Typography_Style}/>
      <Grid container>
        
        <Grid item xs = {3} sx = {designs.RightContainer1_GridItem_Style}>
          <Typography
            variant="subtitle1"
            children="Email Address"
            sx={{ marginLeft: "1.7em", fontWeight: "600", fontSize: "1em", color: "#3F3D56" }}/>

          <Typography
            variant="body1"
            children="The email address you use to access Cyklas"
            sx={{ marginLeft: "2.1em", fontWeight: "500", fontSize: "0.8em", color: "#696779" }}/>

          <Typography
            variant="subtitle1"
            children="Password"
            sx={{ marginLeft: "1.7em", marginTop: "1.4em", fontWeight: "600", fontSize: "1em", color: "#3F3D56" }}/>

          <Typography
            variant="body1"
            children="The current password you use to access Cyklas"
            sx={{ marginLeft: "2.1em", fontWeight: "500", fontSize: "0.8em", color: "#696779" }}/>
        </Grid>
        
        <Grid item md = {9} xs = {12} sx = {designs.RightContainer2_GridItem_Style}>
            <Typography
            variant="subtitle1"
            children="Email Address"
            sx={designs.Subtitle1_Style}/>

            <Typography
            variant="body1"
            children="The email address you use to access Cyklas"
            sx={designs.Body1_Style}/>

            <Stack sx = {designs.Stack_Style}>
              <Typography sx = {designs.TextFieldLabel_Style} children="Email Address" />
              <TextField variant="outlined" defaultValue="markandrei@gmail.com" sx = {designs.TextField_Style} placeholder="Enter your email address" />
            </Stack>

            <Typography
            variant="subtitle1"
            children="Password"
            sx={designs.Subtitle1_Style}/>

            <Typography
            variant="body1"
            children="The current password you use to access Cyklas"
            sx={designs.Body1_Style}/>

          {textfield.map((item, index) => (
            <Stack key={index} sx = {designs.Stack_Style}>
              <Typography sx = {designs.TextFieldLabel_Style} children={item.label} />
              <Input
                    name="password"
                    placeholder = {item.holder}
                    type={showPassword ? 'text' : 'password'}
                    handleShowPassword={handleShowPassword}
                    onChange={handleChange}
                  />
            </Stack>
          ))}
          
        </Grid>
        
        <Grid item xs = {12} sx = {{ height: "max-content" }}>
            <Box className = "Button-container" sx = {designs.Button_Container_Style}>
              <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>
              
              <Button variant = "contained" sx = {designs.Save_Button_Style}>
                Save
              </Button>
            </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default AccountInformation;
