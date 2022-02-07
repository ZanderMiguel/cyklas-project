import React from 'react';
import { Divider, Grid, Typography, Stack, TextField } from '@mui/material';
function AccountInformation() {
  const textfield = [
    { label: 'First Name', value: 'firstname', holder: 'Enter first name...' },
    { label: 'Last Name', value: 'lastname', holder: 'Enter last name...' },
    { label: 'Gender', value: 'gender', holder: 'Enter first name...' },
    { label: 'First Name', value: 'firstname', holder: 'Enter first name...' },
    { label: 'First Name', value: 'firstname', holder: 'Enter first name...' },
  ];

  return (
    <>
      <Grid item xs={10} md={4}>
        <Typography
          variant="h5"
          children="ACCOUNT INFORMATION"
          sx={{ fontWeight: 500 }}
        />
        <Divider />
        <Typography
          variant="subtitle1"
          children="Email Address"
          sx={{ fontWeight: 600 }}
        />
        <Typography
          variant="body1"
          children="The email address you use to acces Cyklas"
        />
        <Typography
          variant="subtitle1"
          children="Password"
          sx={{ fontWeight: 600 }}
        />
        <Typography
          variant="body1"
          children="The current password you use to access Cyklas"
        />
      </Grid>
      <Grid item xs={10} md={5} overflow="auto">
        <Stack spacing={1} justifyContent="center">
          {textfield.map((item, index) => (
            <div key={index}>
              <Typography sx={{ fontWeight: 400 }} children={item.label} />
              <TextField
                variant="outlined"
                placeholder={item.holder}
                fullWidth
              />
            </div>
          ))}
        </Stack>
      </Grid>
    </>
  );
}

export default AccountInformation;
