import React, { useState } from 'react';
import { Grid, Button, Typography, Avatar, Box, Tooltip } from '@mui/material';
import Dialogform from '../components/Dialogform';
import { BrowserRouter as Router } from 'react-router-dom';
import CusButton from '../components/Button';
import Input from '../components/Input';

import axios from 'axios';
import { toast } from 'react-toastify';

// const genders = [
//   {
//     value: 'Male',
//     label: 'Male',
//   },
//   {
//     value: 'Female',
//     label: 'Female',
//   },
// ];

function Register({ open, close, setOpenDialog, setNotif }) {
  const [toggleprof, setToggleProf] = useState('text');
  const [togglestud, setToggleStud] = useState('text');
  const [imgSrc, setImgSrc] = useState(null);
  const [usertype, setUserType] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [emailaddress, setEmailAddress] = useState('');
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

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault(false);
    setUserTypeError(false);
    setFirstNameError(false);
    setLastNameError(false);
    setEmailAddressError(false);
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (usertype === '') {
      setUserTypeError(true);
    }

    if (firstname === '') {
      setFirstNameError(true);
    }
    if (lastname === '') {
      setLastNameError(true);
    }
    if (emailaddress === '') {
      setEmailAddressError(true);
    }
    if (password === '') {
      setPasswordError(true);
    }
    if (confirmpassword === '') {
      setConfirmPasswordError(true);
    }
    if (password === confirmpassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }

    if (
      usertype &&
      firstname &&
      lastname &&
      emailaddress &&
      password &&
      confirmpassword === password
    ) {
      const userRegister = {
        userType: usertype,
        firstName: firstname,
        lastName: lastname,
        emailAddress: emailaddress,
        password,
        image: imgSrc,
      };

      axios
        .post('http://localhost:5000/register', userRegister)
        .then(() => {
          setNotif(
            toast.success('Registered Successfully!', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
              draggable: false,
              closeOnClick: true,
            })
          );
          setOpenDialog(false);
        })
        .catch((err) => {
          console.log(err.message);
          setNotif(
            toast.error(`${err}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 5000,
              draggable: false,
              closeOnClick: true,
            })
          );
        });
    }
  };
  const handleClickProf = (text) => (event) => {
    setToggleProf('contained');
    setToggleStud('text');
    setUserTypeError(false);
    setUserType(text);
  };
  const handleClickStud = (text) => (event) => {
    setToggleStud('contained');
    setToggleProf('text');
    setUserTypeError(false);
    setUserType(text);
  };
  return (
    <>
      <Router>
        <Dialogform divider title="Register" open={open} close={close}>
          <Box sx={{ pr: '2em', pl: '2em', pb: '2em', pt: '0em' }}>
            <Grid
              container
              item
              xs={12}
              justifyContent="space-around"
              alignItems="center"
            >
              <div>
                <label htmlFor="getFile">
                <Tooltip title="Upload Account Picture" placement="top">
                  <Avatar
                    src={imgSrc}
                    sx = {{ 
                      width: '64px',
                      height: '64px',
                      '&: hover': {
                        cursor: 'pointer',
                        boxShadow:
                          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                      }
                    }}
                  />
                </Tooltip>
                </label>
                <input
                  type="file"
                  name="image"
                  id="getFile"
                  style={{ display: 'none' }}
                  onChange={(event) => {
                    console.log(URL.createObjectURL(event.target.files[0]));
                    setImgSrc(URL.createObjectURL(event.target.files[0]));
                  }}
                />
              </div>
            </Grid>
            <Grid container overflow="auto" sx={{ mb: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Select user type:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant={toggleprof}
                    disableRipple
                    onClick={handleClickProf('Professor')}
                    name="userType"
                    sx = {{
                      border: "1px solid #007FFF"
                    }}
                  >
                    Professor
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    fullWidth
                    variant={togglestud}
                    disableRipple
                    onClick={handleClickStud('Student')}
                    name="userType"
                    sx = {{
                      border: "1px solid #007FFF"
                    }}
                  >
                    Student
                  </Button>
                </Grid>
              </Grid>
              {usertypeError && (
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
                  helperText={
                    firstnameError ? 'Please enter your first name' : false
                  }
                  onChange={(event) => setFirstName(event.target.value)}
                  autoFocus
                  half
                />
                <Input
                  name="lastName"
                  inputLabel="Last Name"
                  placeholder="Last name*"
                  required
                  autoComplete="off"
                  error={lastnameError}
                  helperText={
                    lastnameError ? 'Please enter your last name' : false
                  }
                  onChange={(event) => setLastName(event.target.value)}
                  half
                />
                <Input
                  name="emailAddress"
                  inputLabel="Email Address"
                  placeholder="Email address*"
                  required
                  type="email"
                  autoComplete="off"
                  error={emailaddressError}
                  helperText={
                    emailaddressError
                      ? 'Please enter your email address'
                      : false
                  }
                  onChange={(event) => setEmailAddress(event.target.value)}
                />
                {/* <Drowpdown
                  label="Gender"
                  inputLabel="Gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  options={genders}
                  half
                /> */}
                <Input
                  name="password"
                  placeholder="Password*"
                  required
                  inputLabel="Password"
                  autoComplete="off"
                  error={passwordError}
                  helperText={
                    passwordError ? 'Please enter your password' : false
                  }
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
                  helperText={
                    confirmpasswordError
                      ? 'Confirm password is empty or it is not the same as your entered password'
                      : false
                  }
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
                <Grid item xs={12}>
                  <CusButton
                    content="Create Account"
                    fullWidth
                    variant="contained"
                    borderRadius="10px"
                    type="submit"
                    sx={{
                      backgroundColor: '#007FFF',
                      color: 'white',
                      fontWeight: "600",
                      boxShadow: "none",
                      '&:hover': {
                        backgroundColor: '#0072e6',
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </form>
          </Box>
        </Dialogform>
      </Router>
    </>
  );
}

export default Register;
