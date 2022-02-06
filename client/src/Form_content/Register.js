import React, { useState } from 'react';
import Select from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Button, Typography, Avatar } from '@mui/material';

import Dialogform from '../components/Dialogform';
import Google from '../assets/Rectangle 134.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CusButton from '../components/Button';

import { GoogleLogin } from 'react-google-login';
import Input from './Input';
import { InputOutlined } from '@mui/icons-material';
import Drowpdown from './Drowpdown';

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
  const [gender, setGender] = useState('Male');
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleSubmit = () => {};
  const handleTextvalue = () => {};

  const googleSuccess = async (res) => {
    console.log(res);
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log('Google Sign In was unsucessful. Try again later');
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
              <Avatar sx={{ height: '60px', width: '60px' }} />
            </Grid>
          </Grid>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Input
                name="firstname"
                placeholder="Firstname"
                handlChange={handleChange}
                autoFocus
                half
              />
              <Input
                name="lastname"
                placeholder="Lastname"
                handlChange={handleChange}
                half
              />
              <Input
                name="email"
                placeholder="Email Address"
                type="email"
                handlChange={handleChange}
                half
              />
              <Drowpdown
                label="Gender"
                value={gender}
                onChange={handleChange}
                options={genders}
                half
              />
              <Input
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                handlChange={handleChange}
              />
              <Input
                name="confirm password"
                placeholder="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                handlChange={handleChange}
              />

              <Grid item xs={6}>
                <GoogleLogin
                  clientId="579265708499-7ii87q3j1lhihqbuu20224o4mofhstme.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<img src={Google} alt="Google Icon" />}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Continue to google
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              </Grid>
              <Grid item xs={6}>
                <CusButton
                  content="Create Account"
                  fullWidth
                  variant="contained"
                  borderRadius="10px"
                  sx={{
                    backgroundColor: '#007FFF',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: '#0072e6',
                    },
                  }}
                />
                <Typography>
                  Already have an account?
                  <Link style={{ textDecoration: 'none' }} to="/home">
                    Sign In
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Dialogform>
      </Router>
    </>
  );
}

export default Register;
