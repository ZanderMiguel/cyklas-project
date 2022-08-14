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
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Forgot_password() {
  return (
    <>
      <CssBaseline />
      <ToastContainer />
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
            <Input
              id="emailAdd"
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
                    axios
                      .post('http://localhost:5000/email/send', {
                        receiver: document.getElementById('emailAdd').value,
                      })
                      .then((res) => {
                        console.log(res.data);
                        if (res.data.error) {
                          toast.error(`${res.data.error}`, {
                            position: toast.POSITION.TOP_CENTER,
                          });
                        } else {
                          toast.success(`${'Email sent!'}`, {
                            position: toast.POSITION.TOP_CENTER,
                          });
                        }
                      })
                      .catch((error) => {
                        console.log(error);
                        toast.error(`${error}`, {
                          position: toast.POSITION.TOP_CENTER,
                        });
                      });
                  }}
                >
                  Send Reset Link
                </Button>
              </Box>
            </Grid>
            {/* {successinfo && (
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
                )} */}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

export default Forgot_password;
