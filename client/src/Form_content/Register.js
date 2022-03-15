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
  const [toggleprof, setToggleProf] = useState('outlined');
  const [togglestud, setToggleStud] = useState('outlined');
  const [imgSrc, setImgSrc] = useState(null);
  const [usertype, setUserType] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [emailaddress, setEmailAddress] = useState('');
  const [gender, setGender] = useState('Male');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  //error States
  const [usertypeError, setUserTypeError] = useState(false);
  const [firstnameError, setFirstNameError] = useState(false);
  const [lastnameError, setLastNameError] = useState(false);
  const [emailaddressError, setEmailAddressError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmpasswordError, setConfirmPasswordError] = useState(false);

  const { post } = usePost();
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault(false);
    setFirstNameError(false);
    setLastNameError(false);
    setEmailAddressError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (usertype == '') {
    }

    if (firstname == '') {
      setFirstNameError(true);
    }
    if (lastname == '') {
      setLastNameError(true);
    }
    if (emailaddress == '') {
      setEmailAddressError(true);
    }
    if (password == '') {
      setPasswordError(true);
    }
    if (confirmpassword == '') {
      setConfirmPasswordError(true);
    }

    if (
      usertype &&
      firstname &&
      lastname &&
      emailaddress &&
      password &&
      confirmpassword
    ) {
      console.log('create');
    }
  };
  const handleClickProf = (text) => (event) => {
    setToggleProf('contained');
    setToggleStud('outlined');
    setUserType(text);
  };
  const handleClickStud = (text) => (event) => {
    setToggleStud('contained');
    setToggleProf('outlined');
    setUserType(text);
  };
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
              <Button
                sx={{ borderRadius: '20px' }}
                variant={toggleprof}
                disableRipple
                onClick={handleClickProf('Professor')}
                name="userType"
              >
                Professor
              </Button>
              <Button
                sx={{ borderRadius: '50px' }}
                variant={togglestud}
                disableRipple
                onClick={handleClickStud('Student')}
                name="userType"
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
                  <Avatar
                    src={imgSrc}
                    style={{ width: '64px', height: '64px' }}
                  />
                </label>
                <input
                  type="file"
                  name="image"
                  id="getFile"
                  style={{ display: 'none' }}
                  onChange={(event) => {
                    console.log(URL.createObjectURL(event.target.files[0]));

                    setImgSrc(URL.createObjectURL(event.target.files[0]));
                    //setImgSrc(event.target.files[0])
                  }}
                />
              </div>
            </Grid>
            {usertype && (
              <Grid item xs={12}>
                <Box
                  sx={{
                    padding: 1,
                    marginTop: '1em',
                    borderRadius: '5px',
                    backgroundColor: '#ef5350',
                    color: 'white',
                  }}
                >
                  <Typography sx={{ fontSize: '0.8em', fontWeight: 600 }}>
                    Please select "PROFESSOR" or "STUDENT"
                  </Typography>
                </Box>
              </Grid>
            )}
          </Grid>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Input
                name="firstName"
                inputLabel="First Name"
                placeholder="First name*"
                required
                autoComplete="off"
                error={firstnameError}
                onChange={(event) => setFirstName(event.target.value)}
                autoFocus
                half
              />
              <Input
                name="lastName"
                inputLabel="Last Name"
                placeholder="Last name*"
                autoComplete="off"
                error={lastnameError}
                onChange={(event) => setLastName(event.target.value)}
                half
              />
              <Input
                name="emailAddress"
                inputLabel="Email Address"
                placeholder="Email address*"
                type="email"
                autoComplete="off"
                error={emailaddressError}
                onChange={(event) => setEmailAddress(event.target.value)}
                half
              />
              <Drowpdown
                label="Gender"
                inputLabel="Gender"
                name="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={genders}
                half
              />
              <Input
                name="password"
                placeholder="Password*"
                inputLabel="Password"
                autoComplete="off"
                error={passwordError}
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Input
                name="confirmpassword"
                inputLabel="Confirm Password"
                placeholder="Confirm password*"
                type={showPassword ? 'text' : 'password'}
                handleShowPassword={handleShowPassword}
                error={confirmpasswordError}
                onChange={(event) => setConfirmPassword(event.target.value)}
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
