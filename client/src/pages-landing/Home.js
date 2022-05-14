import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import './Styles/Landingpage.css';
import Input from '../components/Input';
import Button from '../components/Button';
import LoadingButton from '@mui/lab/LoadingButton';
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
  const [isPending, setIsPending] = useState(false);
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
    setIsPending(true)
    axios
      .post(
        'http://localhost:5000/login',
        Object.fromEntries(myApi)
      )
      .then((response) => {
        if (response.data.status === 'error') {
          setNotif(
            toast.error('Invalid Username or Password!', {
              position: toast.POSITION.TOP_CENTER,
            })
          );
        setIsPending(false)
        } else {
          response.data.token &&
            localStorage.setItem('token', response.data.token);
          localStorage.setItem( 'userData', JSON.stringify( response.data ) );
         setIsPending(false)
        }

        setMyApi(new Map());
      })
      .catch((err) => {
        console.log(err.message);
        setMyApi(new Map());
        setNotif(
          toast.error(`${err.message}`, {
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
            gap="11em"
            height="100vh"
            marginTop="4em"
          >
            <Box className="left">
              <Typography
                variant="h4"
                sx={{
                  width: '60%',
                  fontWeight: 'bold',
                  color: '#3F3D56',
                }}
              >
                Can't go to school? <br />
                No problem! We can <br />
                bring school to you.
              </Typography>
              <Typography
                children="The best Website for Virtual Class"
                sx={{
                  fontSize: '0.8em',
                  fontWeight: '500',
                  textTransform: 'Uppercase',
                  textAlign: 'center',
                  color: '#626170',
                  margin: '0.8em 0em',
                  width: '60%',
                  padding: '0.2em 0em',
                  backgroundColor: 'white',
                }}
              />

              {isMatch ? null : (
                <Button
                  content="Create your account now"
                  variant="contained"
                  sx={{
                    margin: '0.8em 0em',
                    padding: '0.5em 0em',
                    width: '60%',
                    boxShadow: 'none',
                    backgroundColor: '#007FFF',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '0.3em',
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
                   {!isPending ? <Button
                      fullWidth
                      variant="contained"
                      borderRadius="10px"
                      children="login"
                      type="submit"
                      sx={{
                        backgroundColor: '#007FFF',
                        fontSize: '0.9em',
                        fontWeight: '600',
                        color: 'white',
                        borderRadius: '0.3em',
                        boxShadow: 'none',
                        marginBottom: '0em',
                        '&:hover': {
                          backgroundColor: '#0072e6',
                        },
                        }} /> :
                        <LoadingButton loading fullWidth variant="contained">
                        Submit
                      </LoadingButton>
                      }
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
