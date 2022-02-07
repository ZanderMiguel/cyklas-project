import React from 'react';
import {
  Grid,
  Typography,
  Avatar,
  Stack,
  TextField,
  Divider,
} from '@mui/material';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { styled } from '@mui/material/styles';
import Button from '../components/Button';
import UploadImage from '@mui/material/Button';
import { green } from '@mui/material/colors';

function PersonalInformation() {
  const InsertImage = styled('input')({
    display: 'none',
  });

  const textfield = [
    { label: 'First Name', value: 'firstname', holder: 'Enter first name...' },
    { label: 'Last Name', value: 'lastname', holder: 'Enter last name...' },
    { label: 'Gender', value: 'gender', holder: 'Enter first name...' },
    { label: 'First Name', value: 'firstname', holder: 'Enter first name...' },
    { label: 'First Name', value: 'firstname', holder: 'Enter first name...' },
  ];

  return (
    <>
      <Grid item xs={10} md={5} lg={5} sx={{ mb: 2 }}>
        <Stack spacing={1} justifyContent="center">
          <Typography
            variant="h5"
            children="PERSONAL INFORMATION"
            sx={{ fontWeight: 500 }}
            gutterBottom
          />
          <Divider />
          {textfield.map((item, index) => (
            <>
              <Typography sx={{ fontWeight: 400 }} children={item.label} />
              <TextField variant="outlined" placeholder={item.holder} />
            </>
          ))}
        </Stack>
        <Grid
          item
          container
          justifyContent="flex-end"
          alignItem="flex-end"
          spacing={1}
          sx={{ mt: 2 }}
        >
          <Grid item>
            <Button content="clear" variant="text" />
          </Grid>
          <Grid item>
            <Button
              content="save"
              variant="contained"
              sx={{
                backgroundColor: green[700],
                color: 'white',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: green[800],
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={9}
        md={5}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Stack
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={3}
          >
            <Typography children="Account Profile" />
            <Avatar
              alt="Remy Sharp"
              sx={{ width: 150, height: 150, marginRighT: '0px' }}
              children="N"
            />
            <label htmlFor="contained-button-file">
              <InsertImage
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
              />
              <UploadImage
                disableRipple
                startIcon={<CameraAltOutlinedIcon />}
                variant="contained"
                component="span"
              >
                Change Profile Image
              </UploadImage>
            </label>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default PersonalInformation;
