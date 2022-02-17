import React, { useState } from 'react';
import { Grid, Button, Typography, Avatar, RadioGroup, Radio, FormControlLabel } from '@mui/material';

import Dialogform from '../components/Dialogform';
import Google from '../assets/Rectangle 134.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CusButton from '../components/Button';

import { GoogleLogin } from 'react-google-login';
import Input from '../components/Input';
import Drowpdown from '../components/Drowpdown';
import axios from 'axios';

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
const initialValues = {firstname: "", lastname: '', email: '', password:''}
const [formValues, setFormValue] = useState(initialValues);

const [category, setCategory] = useState('professor');
const [gender, setGender] = useState('Male');


const [showPassword, setShowPassword] = useState(false);
const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

 const handleChange = (e) => {
   const {name, value} = e.target;
   setFormValue({...formValues, [name]: value});
   console.log(formValues);

};

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = {
      userType: category,
    firstName: formValues.firstname,
    lastName: formValues.lastname,
    emailAddress: formValues.email,
    gender: gender,
    password: formValues.password,
       
    };
    axios.post('http://localhost:5000/register/new-user', register).then(response => {
      localStorage.setItem('token', response.data.token)
  });
}


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
              {/* <Button sx={{ borderRadius: '20px' }} variant="outlined">
                Professor
              </Button>
              <Button sx={{ borderRadius: '50px' }} variant="outlined">
                Student
              </Button> */}
              <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)} form='form1'>
              <FormControlLabel value='professor' control={<Radio />} label='Professor'/>
              <FormControlLabel value='student' control={<Radio />} label='Student'/>
              </RadioGroup>
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
          <form onSubmit={handleSubmit} id='form1'>
            <Grid container spacing={2}>
              <Input
                name="firstname"
                placeholder="Firstname"
                onChange={handleChange}
                autoFocus
                half
              />
              <Input
                name="lastname"
                placeholder="Lastname"
                onChange={handleChange}
                half
              />
              <Input
                name="email"
                placeholder="Email Address"
                type="email"
                onChange={handleChange}
                half
              />
              <Drowpdown
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={genders}
                half
              />
              <Input
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                onChange={handleChange}
              />
              <Input
                name="confirm password"
                placeholder="Confirm Password"
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                onChange={handleChange}
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
                type='submit'
                form='form1'
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
