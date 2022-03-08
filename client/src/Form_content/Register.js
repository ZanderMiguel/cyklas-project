import React, { useState } from 'react';
import { Grid, Button, Typography, Avatar, Box } from '@mui/material';

import Dialogform from '../components/Dialogform';
import Google from '../assets/Rectangle 134.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import CusButton from '../components/Button';
import usePost from '../customHooks/usePost';
import { GoogleLogin } from 'react-google-login';
import Input from '../components/Input';
import Drowpdown from '../components/Drowpdown';

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
  const [imgSrc, setImgSrc] = useState(null)
  const [registration, setRegistration] = useState(new Map())
  registration.set('gender', gender)
  const{post} = usePost()
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleChange = (event) => {
    setRegistration(registration.set([event.target.name], event.target.value))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    const { confirmpassword, ...fields } = Object.fromEntries(registration)
    post('http://localhost:5000/register',{...fields})
    console.log({ ...fields })
  };
  const handleClick = (text) => (event) => {
    console.log(text)
    setRegistration(registration.set([event.target.name], text))
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
              <Button sx={{ borderRadius: '20px' }} variant="outlined"
                onClick={handleClick("Professor")} name="userType"
              >
                Professor
              </Button>
              <Button sx={{ borderRadius: '50px' }} variant="outlined"
                onClick={handleClick("Student")} name="userType"
              >
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
              <div>
                <label htmlFor="getFile">
                  <Avatar src={imgSrc} style={{width: '64px', height: '64px'}}/>
                </label>
                <input type="file" name="image" id="getFile" style={{display: 'none'}} onChange={(event)=>{
                  console.log(URL.createObjectURL(event.target.files[0]))
                  setRegistration(registration.set([event.target.name],URL.createObjectURL(event.target.files[0])))
                  setImgSrc(URL.createObjectURL(event.target.files[0]))
                  //setImgSrc(event.target.files[0])
                }}/>
              </div>

            </Grid>
          </Grid>
          <form onSubmit={handleSubmit} autoComplete="off">
            <Grid container spacing={2}>
              <Input
                name="firstName"
                placeholder="Firstname"
                onChange={handleChange}
                autoFocus
                half
              />
              <Input
                name="lastName"
                placeholder="Lastname"
                onChange={handleChange}
                half
              />
              <Input
                name="emailAddress"
                placeholder="Email Address"
                type="email"
                onChange={handleChange}
                half
              />
              <Drowpdown
                label="Gender"
                name="gender"
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
                name="confirmpassword"
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
                  content="Create Account"
                  fullWidth
                  variant="contained"
                  borderRadius="10px"
                  type="submit"
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
