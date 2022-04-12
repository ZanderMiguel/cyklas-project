import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import './Styles/Landingpage.css';
import Input from '../components/Input';
import Button from '../components/Button';
import {
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
  useMediaQuery,
} from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Flatimage from '../assets/Images/illustration.svg';
import MaleLogo from '../assets/Images/avatar_male.png';
import Register from '../Form_content/Register';
import GoogleAuth from './GoogleAuth';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = { fontFamily: 'Poppins', marginTop: 1 };

function Home() {
  const [isPending, setIsPending] = useState(true);
  const [opendialog, setOpenDialog] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [notif, setNotif] = useState(null);

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };
  const [myApi, setMyApi] = React.useState(new Map());
  const handleChange = (e) => {
    setMyApi(myApi.set([e.target.name], e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/login', Object.fromEntries(myApi))
      .then((response) => {
        response.data.token &&
          localStorage.setItem('token', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data));
        setMyApi(new Map());
      })
      .catch((err) => {
        console.log(err.message);
        setMyApi(new Map());
        setNotif(
          toast.error('Error', {
            position: toast.POSITION.TOP_CENTER,
          })
        );
      });
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      {localStorage.userData && localStorage.token ? (
        <Redirect from="/home/login" to="/dashboard" />
      ) : (
        <>
          <ToastContainer />
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="2em"
            height="100vh"
            marginTop="4rem"
          >
            <Box className="left">
              <Typography
                variant="h4"
                sx={{
                  ...style,
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#3F3D56',
                }}
              >
                Can't go to school? <br />
                No problem! We can <br />
                bring school to you.
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  ...style,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#626170',
                  mb: 2,
                }}
              >
                The best Website for Virtual Class
              </Typography>
              {isMatch ? null : (
                <Button
                  content="Create your account now"
                  variant="contained"
                  borderRadius="10px"
                  sx={{
                    backgroundColor: '#007FFF',
                    color: 'white',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: '#0072e6',
                    },
                  }}
                  startIcon={<AddCircleOutlineOutlinedIcon />}
                  onClick={handleClickOpen}
                />
              )}
              {isMatch ? null : (
                <img
                  src={Flatimage}
                  alt="flat"
                  style={{
                    wheight: '300px',
                    width: '100%',
                    maxWidth: '600px',
                    marginTop: '16px',
                  }}
                />
              )}
            </Box>
            {opendialog && (
              <Register
                open={opendialog}
                close={handleClose}
                setOpenDialog={setOpenDialog}
                setNotif={setNotif}
              />
            )}
            <Paper
              elevation={3}
              sx={{
                width: '20rem',
                padding: '30px',
              }}
              type="submit"
              form="loginForm"
            >
              <form onSubmit={handleSubmit} id="loginForm">
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <img
                      src={MaleLogo}
                      alt="avatar"
                      style={{ width: '6rem', height: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      name="emailAddress"
                      type="email"
                      placeholder="Enter email address"
                      onChange={handleChange}
                      autoFocus
                      size="medium"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Input
                      name="password"
                      placeholder=" Enter password"
                      type={showPassword ? 'text' : 'password'}
                      handleShowPassword={handleShowPassword}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="subtitle2">
                      <Link
                        to="/forgotpassword"
                        style={{ color: '#007FFF', textDecoration: 'none' }}
                      >
                        Forgot password?
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      disabled={isPending ? false : true}
                      fullWidth
                      variant="contained"
                      borderRadius="10px"
                      type="submit"
                      sx={{
                        backgroundColor: '#007FFF',
                        color: 'white',
                        borderRadius: '10px',
                        marginBottom: '0em',
                        '&:hover': {
                          backgroundColor: '#0072e6',
                        },
                      }}
                    >
                      Log in
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    {isMatch ? (
                      <Typography
                        sx={{ ...style, fontWeight: 'bold' }}
                        gutterBottom
                        align="center"
                        component="div"
                        variant="subtitle2"
                      >
                        Don't have an account?
                        <Link
                          to="#"
                          onClick={() => setOpenDialog(true)}
                          style={{ color: '#007FFF', textDecoration: 'none' }}
                        >
                          Sign up
                        </Link>
                      </Typography>
                    ) : (
                      <Divider>or</Divider>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <GoogleAuth />
                  </Grid>
                </Grid>
              </form>
            </Paper>
            <Footer />
          </Box>
        </>
      )}
    </>
  );
}

export default Home;
