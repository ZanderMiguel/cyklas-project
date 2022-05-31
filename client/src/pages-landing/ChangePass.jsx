import React, { useState } from 'react';
import { Grid, Paper, Typography, Container, Box, Button } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Input from '../components/Input';
import axios from 'axios';
function ChangePass() {
  const { token } = useParams();
  const [showPassword, setShowPassword] = useState(false);
  const [newpassword, setNewPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [oldPassword, setOldPassword] = useState(false);
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
      axios
        .post(
          'http://localhost:5000/password/change',
          { password: confirmpassword, oldPassword },
          {
            headers: {
              authorization: token,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 'error') {
            toast.error(`${res.data.message}`, {
              position: toast.POSITION.TOP_CENTER,
            });
          } else {
            toast.success(`${res.data.message}`, {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <ToastContainer />
      <Container maxWidth="md">
        <Paper sx={{ width: '100%', padding: 4, height: 'auto', marginTop: 2 }}>
          <Grid container spacing={2} alignItems="center">
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
                  name="oldPassword"
                  placeholder="Password*"
                  inputLabel="Old Password"
                  autoComplete="off"
                  error={passwordError}
                  helperText={
                    passwordError ? 'Please enter your password' : false
                  }
                  type={showPassword ? 'text' : 'password'}
                  onChange={(e) => {
                    setOldPassword(e.target.value);
                  }}
                />
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
                      type="submit"
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default ChangePass;
