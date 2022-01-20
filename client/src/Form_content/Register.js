import React from 'react';
import Textfield from './Textfield';
import Select from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { Button, Stack, Avatar, Grid, Box } from '@mui/material';

const genders = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

function Register() {
  const [gender, setGender] = React.useState('Male');
  const [values, setValues] = React.useState({
    showPassword: false,
    showConfirmPassword: false,
    password: '',
    confirmpassword: '',
  });

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Grid container overflow="auto">
        <Grid
          container
          item
          xs={6}
          justifyContent="space-around"
          alignItems="center"
        >
          <Button sx={{ borderRadius: '20px' }} variant="outlined">
            Professor
          </Button>
          <Button sx={{ borderRadius: '50px' }} variant="outlined">
            Student
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={6}
          justifyContent="space-around"
          alignItems="center"
        >
          <Avatar sx={{ height: '150px', width: '150px' }} />
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={{ xs: 1, md: 2, xl: 3 }}
        columnSpacing={{ xs: 2 }}
        sx={{ overflow: 'auto' }}
      >
        <Grid item xs={6}>
          <Textfield
            label="Firstname"
            variant="outlined"
            fullWidth="fullWidth"
          />
        </Grid>
        <Grid item xs={6}>
          <Textfield label="Lastname" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Textfield label="Contact Number" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <Select
            sx={{ width: '150px' }}
            select
            label="Gender"
            value={gender}
            onChange={handleChange}
          >
            {genders.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Grid>

        <Grid item xs={12}>
          <Textfield label="Email Address" variant="outlined" />
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password"
              type={values.showPassword ? 'text' : 'password'}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth required={true}>
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name="password2"
              type={values.showConfirmPassword ? 'text' : 'password'}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
              fullWidth
            />
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
}

export default Register;
