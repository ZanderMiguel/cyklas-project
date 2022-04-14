import React, { useState } from 'react';
import { Grid, Typography, Stack, TextField, Box, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Input from '../../../components/Input';
import useStyle from "./Styles/AccountInformation_layout_style";

function AccountInformation_layout() {
  const {designs} = useStyle();

  const [showPasswordCurrent, setShowPasswordCurrent] = React.useState(false);
  const [showPasswordNew, setShowPasswordNew] = React.useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);

  const handleShowPasswordCurrent = () =>
    setShowPasswordCurrent((prevShowPasswordCurrent) => !prevShowPasswordCurrent);
  
  const handleShowPasswordNew = () =>
    setShowPasswordNew((prevShowPasswordNew) => !prevShowPasswordNew);
    
  const handleShowPasswordConfirm = () =>
    setShowPasswordConfirm((prevShowPasswordConfirm) => !prevShowPasswordConfirm);

  const [myApi, setMyApi] = React.useState(new Map());
  const handleChangeCurrent = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };

  const handleChangeNew = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };

  const handleChangeConfirm = (e) => {
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
        
        <Grid item xs = {4} sx = {designs.RightContainer1_GridItem_Style}>
          <Typography
            variant="subtitle1"
            children="Email Address"
            sx={designs.Subtitle1_Style}/>

          <Typography
            variant="body1"
            children="The email address you use to access Cyklas"
            sx={designs.Body1_Style}/>

          <Typography
            variant="subtitle1"
            children="Password"
            sx={designs.Subtitle1_Style}/>

          <Typography
            variant="body1"
            children="The current password you use to access Cyklas"
            sx={designs.Body1_Style}/>
        </Grid>
        
        <Grid item md = {8} xs = {12} sx = {designs.RightContainer2_GridItem_Style}>
            <Typography
            variant="subtitle1"
            children="Email Address"
            sx={designs.Subtitle1_Responsive_Style}/>

            <Box flexGrow = {1} sx = {designs.BoxFlexGrow2_Style}/>

            <Typography
            variant="body1"
            children="The email address you use to access Cyklas"
            sx={designs.Body1_Responsive_Style}/>

            <Stack sx = {designs.Stack_Style}>
              <Typography sx = {designs.TextFieldLabel_Style} children="Email Address" />
              <TextField variant="outlined" defaultValue="markandrei@gmail.com" sx = {designs.TextField_Style} placeholder="Enter your email address" />
            </Stack>

            <Typography
            variant="subtitle1"
            children="Password"
            sx={designs.Subtitle1_Responsive_Style}/>

            <Box flexGrow = {1} sx = {designs.BoxFlexGrow2_Style}/>

            <Typography
            variant="body1"
            children="The current password you use to access Cyklas"
            sx={designs.Body1_Responsive_Style}/>

          {/* {textfield.map((item, index) => ( */}
            <Stack sx = {designs.Stack2_Style}>
              <Typography sx = {designs.TextFieldLabel2_Style} children="Current Password" />
                    <Input
                    name="password"
                    placeholder=" Enter your current password"
                    type={showPasswordCurrent ? 'text' : 'password'}
                    handleShowPassword={handleShowPasswordCurrent}
                    onChange={handleChangeCurrent}
                    sx = {designs.TextField2_Style}/>
              
              <Typography sx = {designs.TextFieldLabel2_Style} children="New Password" />
                    <Input
                    name="password"
                    placeholder=" Enter your new password"
                    type={showPasswordNew ? 'text' : 'password'}
                    handleShowPassword={handleShowPasswordNew}
                    onChange={handleChangeNew}
                    sx = {designs.TextField2_Style}/>

              <Typography sx = {designs.TextFieldLabel2_Style} children="Confirm New Password" />
                    <Input
                    name="password"
                    placeholder=" Confirm your new password"
                    type={showPasswordConfirm ? 'text' : 'password'}
                    handleShowPassword={handleShowPasswordConfirm}
                    onChange={handleChangeConfirm}
                    sx = {designs.TextField2_Style}/>
            </Stack>
          {/* ))} */}
          
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

export default AccountInformation_layout;
