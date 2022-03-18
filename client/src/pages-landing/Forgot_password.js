import React, { useState } from 'react';
import {
  Grid,
  Paper,
  Typography,
  Container,
  CssBaseline,
  AppBar,
  Box,
  Button,
} from '@mui/material';
import Input from '../components/Input';
import Logo from '../assets/Images/Ellipse 2.png';
import { Link } from 'react-router-dom';

function Forgot_password() {
  const [successinfo, setSuccessInfo] = useState(false);
  const [forgotemail, setForgotEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');

  //Error State
  const [passwordError, setPasswordError] = useState(false);
  const [confirmpasswordError, setConfirmPasswordError] = useState(false);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError(false);
    setConfirmPasswordError(false);

    if (newpassword === '') {
      setPasswordError(true);
    }

    if (confirmpassword === '') {
      setConfirmPasswordError(true);
    }
    if (newpassword === confirmpassword) {
      setConfirmPasswordError(false);
    } else {
      setConfirmPasswordError(true);
    }

    if (newpassword && confirmpassword === newpassword) {
      const newPassword = { newpassword };
      console.log('newPassword');
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{ background: 'white', paddingLeft: 2, paddingTop: 2 }}
        elevation={0}
      >
        <Box display="flex" alignItems="center" flexWrap="wrap">
          <Box display="flex" alignItems="center">
            <img src={Logo} alt="cyklas logo" />
            <Typography
              variant="h6"
              fontFamily="Poppins"
              color="#3F3D56"
              fontWeight="Bold"
              noWrap
            >
              Cyklas
            </Typography>
          </Box>
          <Box flexGrow={1} />
          <Link to="/">
            <Button variant="contained" sx={{ mr: 2 }}>
              Log in
            </Button>
          </Link>
        </Box>
      </AppBar>
      <Container maxWidth="md">
        <Paper sx={{ width: '100%', padding: 4, height: 'auto', marginTop: 2 }}>
          <Grid container spacing={2} alignItems="center">
            {forgotemail && (
              <>
                <Input
                  inputLabel="Email Address"
                  placeholder="Email address*"
                  autoComplete="off"
                />
                <Grid item xs={12}>
                  <Box display="flex" justifyContent="flex-end">
                    <Button variant="text">Cancel</Button>
                    <Button
                      variant="contained"
                      sx={{ marginLeft: 2 }}
                      onClick={() => {
                        setSuccessInfo(true);
                        setForgotEmail(false);
                      }}
                    >
                      Send Reset Link
                    </Button>
                  </Box>
                </Grid>
                {successinfo && (
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        padding: 2,
                        marginTop: '1em',
                        borderRadius: '5px',
                        backgroundColor: '#4caf50',
                        color: 'white',
                      }}
                    >
                      <Typography sx={{ fontSize: '0.8em', fontWeight: 600 }}>
                        Check your email for password reset confirmation
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </>
            )}
          </Grid>
          {!forgotemail && (
            <>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="h5" sx={{ fontWeight: 600 }}>
                        CREATE NEW PASSWORD
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid container></Grid>
                  <Input
                    name="password"
                    placeholder="Password*"
                    inputLabel="New Password"
                    autoComplete="off"
                    error={passwordError}
                    helperText={
                      passwordError ? 'Please enter your password' : false
                    }
                    type={showPassword ? 'text' : 'password'}
                    handleShowPassword={handleShowPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
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
                    <Box display="flex" justifyContent="flex-end">
                      <Button variant="text">Cancel</Button>
                      <Button
                        variant="contained"
                        sx={{ marginLeft: 2 }}
                        onClick={() => {
                          setSuccessInfo(true);
                          setForgotEmail(false);
                        }}
                        type="submit"
                      >
                        Save
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}

export default Forgot_password;
