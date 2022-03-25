import React, { useState } from 'react';
import './Styles/Landingpage.css';
import Input from '../components/Input';

//importing Mui
import { Typography, Box, Paper, Link, Grid, Container } from '@mui/material';
import { GoogleLogin } from 'react-google-login';
import Divider from '@mui/material/Divider';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
//import image
import Flatimage from '../assets/Images/illustration.svg';
import MaleLogo from '../assets/Images/avatar_male.png';
import Google from '../assets/Rectangle 134.svg';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Register from '../Form_content/Register';
import Button from '../components/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Footer from './Footer';

const style = { fontFamily: 'Poppins', marginTop: 1 };

const googleSuccess = async (res) => {
  console.log(res);
  axios({
    method: 'POST',
    url: 'http://localhost:5000/googlelogin',
    data: { tokenId: res.tokenId },
  }).then((res) => {
    console.log('Google login success', res);
  });
};
const googleFailure = (error) => {
  console.log(error);
  console.log('Google Sign In was unsucessful. Try again later');
};

function Home({ data }) {
  const history = useHistory();
  const [isPending, setIsPending] = useState(true);
  const [opendialog, setOpenDialog] = useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

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
    setIsPending(true);

    axios
      .post('http://localhost:5000/login', Object.fromEntries(myApi))
      .then((response) => {
        response.data.token &&
          localStorage.setItem('token', response.data.token);

        localStorage.setItem('userData', JSON.stringify(response.data));

        setMyApi(new Map());
        setIsPending(false);
        history.push('/dashboard');
      })
      .catch((err) => {
        console.log(err.message);
        setMyApi(new Map());
        setIsPending(true);
      });
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap="2em"
        height="100vh"
        marginTop="5rem"
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
        {opendialog && <Register open={opendialog} close={handleClose} />}
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
                    href="/forgotpassword"
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
                  content="log in"
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
                />
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
                      href="#"
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
                <GoogleLogin
                  clientId="579265708499-7ii87q3j1lhihqbuu20224o4mofhstme.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <Button
                      variant="outlined"
                      content="continue with google"
                      startIcon={<img src={Google} alt="Google Icon" />}
                      color="#007FFF"
                      borderColor="#007FFF"
                      fullWidth
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    />
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Footer />
      </Box>
    </>
  );
}

export default Home;
