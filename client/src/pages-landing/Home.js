import React, { useState } from 'react';
import './Landingpage.css';
import Input from '../Form_content/Input';

//importing Mui
import {
  Typography,
  Button,
  Box,
  Paper,
  TextField,
  Link,
  Grid,
} from '@mui/material';

import { AddCircle } from '@mui/icons-material';
//import image
import Flatimage from '../assets/Images/illustration.svg';
import MaleLogo from '../assets/Images/avatar_male.png';
import Google from '../assets/Rectangle 134.svg';
import Register from '../Form_content/Register';

const style = { fontFamily: 'Poppins', marginTop: 1 };

function Home() {
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

  const handleChange = () => {};
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
              onClick={handleClickOpen}
            >
              Create your account now.
            </Button>
            {opendialog && <Register open={opendialog} close={handleClose} />}
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
          <form>
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
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  handlChange={handleChange}
                  autoFocus
                  size="medium"
                />
                <Input
                  name="password"
                  placeholder=" Enter password"
                  type={showPassword ? 'text' : 'password'}
                  handleShowPassword={handleShowPassword}
                  handlChange={handleChange}
                />
              </Grid>
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
              >
                Continue to google
              </Button>
            </Paper>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Home;
