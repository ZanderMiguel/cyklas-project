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

import { Button, Avatar, Grid, Typography } from '@mui/material';
import Dialogform from '../components/Dialogform';
import Google from '../assets/Rectangle 134.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

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

function Register({ open, close }) {
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
      <Router>
        <Dialogform title="Register here" open={open} close={close}>
          <Grid container overflow="auto" sx={{ mb: 2 }}>
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
            rowSpacing={{ xs: 3, md: 2 }}
            columnSpacing={{ xs: 2 }}
            sx={{ overflow: 'auto' }}
          >
            <Grid item xs={6}>
              <Textfield
                id="Firstname"
                label="Firstname"
                variant="outlined"
                fullWidth="fullWidth"
              />
            </Grid>
            <Grid item xs={6}>
              <Textfield id="Lastname" label="Lastname" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
              <Textfield
                id="Contact"
                label="Contact Number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <Select
                select
                label="Gender"
                value={gender}
                onChange={handleChange}
                fullWidth
              >
                {genders.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={12}>
              <Textfield id="Email" label="Email Address" variant="outlined" />
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
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
                <InputLabel htmlFor="outlined-adornment-Confirmpassword">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-Confirmpassword"
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
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                startIcon={<img src={Google} alt="Google Icon" />}
              >
                Continue to google
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                fullWidth
                sx={{
                  mb: 2,
                  '& .MuiButton-label': {
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textAlign: 'left',
                    display: 'block',
                  },
                }}
              >
                Create Account
              </Button>
              <Typography>
                Already have an account? <Link to="/home"> Sign In</Link>
              </Typography>
            </Grid>
          </Grid>
        </Dialogform>
      </Router>
    </>
  );
}

export default Register;
