import React, { ReactFragment } from 'react';
import { Grid, Typography, Avatar, Stack, TextField, Box } from '@mui/material';
import { CameraAltOutlined } from '@mui/icons-material';
import UploadImage from "@mui/material/Button"
import { styled } from '@mui/material/styles';
import Button from '../components/Button';
import useStyle from "./Styles/Personal_info_style";

function PersonalInformation() {
  const {designs} = useStyle();

  const InsertImage = styled('input')({
    display: 'none',
  });

  const textfield = [
    { 
      label: 'First Name', 
      value: 'firstname', 
      holder: 'Enter first name...',
      default: 'Mark' 
    },
    { 
      label: 'Last Name', 
      value: 'lastname', 
      holder: 'Enter last name...',
      default: 'Andrei' 
    },
    { 
      label: 'Gender', 
      value: 'gender', 
      holder: 'Choose your gender...',
      default: 'Male' 
    }
  ];

  return (
    <>
      <Grid item md = {6} xs = {12}>
        <Stack>
          <Typography children = "PERSONAL INFORMATION" sx = {designs.PersonalInformation_Typography_Style}/>
            
          {textfield.map((item, index) => (
            <Stack key={index} sx = {designs.Stack_Style}>
              <Typography sx = {designs.TextFieldLabel_Style} children={item.label} />
              <TextField variant="outlined" defaultValue={item.default} sx = {designs.TextField_Style} placeholder={item.holder} />
            </Stack>
          ))}
        </Stack>
        
        <Box className = "Clear-save" sx = {designs.Clear_Save_Style}>
          
          <Box flexGrow = {1} sx = {designs.BoxFlexGrow_Style}/>
          
          <Button content="clear" variant="text" sx = {designs.Clear_Button_Style}/>
          
          <Button
              content="save"
              variant="contained"
              sx = {designs.Save_Button_Style}/>
        </Box>

      </Grid>
      
      <Grid item md = {6} xs = {12}>
          <Box className = "AccountPicture" sx = {designs.AccountPicture_Style}>
            <Typography children="Account Picture" sx = {designs.AccountPicture_Typography_Style}/>
            
            <Avatar alt="Remy Sharp" children="M" sx = {designs.Avatar_Style}/>

            <label htmlFor="contained-button-file">
              <InsertImage
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"/>
              <UploadImage
                disableRipple
                startIcon={<CameraAltOutlined/>}
                variant="contained"
                component="span"
                sx = {designs.UploadImage_Button_Style}
              >
                Change Profile Picture
              </UploadImage>
            </label>
          </Box>

      </Grid>
    </>
  );
}

export default PersonalInformation;
