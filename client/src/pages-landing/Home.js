import React, {useState} from 'react';
import './Landingpage.css';

//importing Mui
import { Typography, Button, Box, Paper, TextField, Link } from '@mui/material';

import { AddCircle } from '@mui/icons-material';
//import image
import Flatimage from '../assets/Images/illustration.svg';
import MaleLogo from '../assets/Images/avatar_male.png';
import Google from '../assets/Rectangle 134.svg';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';


const style = { fontFamily: 'Poppins', marginTop: 1 };

const responseSuccessGoogle = (response) => {
  console.log(response);
  axios ({
    method:"POST",
    url:"http://localhost:5000/googlelogin",
    data:{tokenId: response.tokenId}
  }).then(response =>{
    console.log("Google login success",response)
  })
}

const responseErrorGoogle = (response) => {
  console.log(response);
}


function Home() {
const [email, setEmail] = useState('');
const [pass, setPass] = useState('');
const handleSubmit = (e) =>{
  e.preventDefault()
  const login = {
    emailAddress: email,
    password: pass,
  }
  
  axios.post("http://localhost:5000/login", login).then(response =>{
    localStorage.setItem('token', response.data.token)
    setEmail('')
    setPass('')
    // console.log(response.data.token);
  }).catch(err => {console.log(err.message)
    setEmail('')
    setPass('')
  })
 
}
  return (
    <>
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          height="90vh"
          gap="6rem"
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
              }}
            >
              The best Website for Virtual Class
            </Typography>
            <Button
              disableRipple
              variant="contained"
              sx={{
                backgroundColor: '#007FFF',
                '&:hover': { backgroundColor: '#007FFF' },
                textTransform: 'none',
                ...style,
                marginTop: 2,
                fontSize: '0.9em',
                fontWeight: '700',
                padding: '10px 20px',
                borderRadius: '10px',
              }}
              startIcon={<AddCircle sx={{ fontSize: 20 }} />}
            >
              Create your account now.
            </Button>
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
          </Box>
          <Paper
            sx={{
              width: '20rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '30px',
            }}
          >
            <img
              src={MaleLogo}
              alt="avatar"
              style={{ width: '6rem', maxWidth: '', height: 'auto' }}
            />
            <form onSubmit={handleSubmit} id="loginForm">
            <TextField
              required
              id="standard-required"
              placeholder="Enter your email address"
              type="email"
              variant="filled"
              size="small"
              fullWidth
              margin="normal"
              onChange={(e) => setEmail(e.target.value)}
                  value={email}
            />

            <TextField
              required
              id="standard-password-input"
              placeholder="Enter your password"
              type="password"
              autoComplete="current-password"
              variant="filled"
              size="small"
              margin="normal"
              fullWidth
              onChange={(e) => setPass(e.target.value)}
                  value={pass}
            />
            </form>
            <Typography
              sx={{ ...style }}
              gutterBottom
              alignSelf="right"
              component="div"
              variant="subtitle2"
            >
              <Link
                href="#"
                style={{ color: '#007FFF', textDecoration: 'none' }}
              >
                Forgot password?
              </Link>
            </Typography>

            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: '#007FFF',
                '&:hover': { backgroundColor: '#007FFF' },
                textTransform: 'none',
                ...style,
                marginTop: '10px',
                marginBottom: '10px',
                borderRadius: '10px',
              }}
              type="submit"
              form="loginForm"
            >
              Log in
            </Button>
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
           
              
      <GoogleLogin
    clientId="90759507047-37dohu0dq74j6oui4b6hvb3tj4vpphkm.apps.googleusercontent.com"
    render={renderProps => ( 
    <Button
      variant="text"
      fullWidth
      sx={{
        backgroundColor: 'white',
        textTransform: 'none',
        ...style,
        marginTop: '10px',
        color: '#007FFF',
        border: '1px solid #EB7E42',
        borderColor: '#007FFF',
      }}
      startIcon={<img src={Google} alt="Google Icon" />}
      onClick={renderProps.onClick} disabled={renderProps.disabled}>
         Google Login
         </Button>)}
    
    onSuccess={responseSuccessGoogle}
    onFailure={responseErrorGoogle}
    cookiePolicy={'single_host_origin'}
  />
            
          </Paper>
        </Box>
      </Box>
    </>
  );
}

export default Home;
