import React from 'react';
//importing Mui
import contactillu from '../assets/Images/Contact_illustration.svg';
import { Typography, Box, TextField, Button, IconButton } from '@mui/material';
import { LocationOn, Call, Email } from '@mui/icons-material';
// import {makeStyles} from '@mui/styles'
import { styled } from '@mui/material';
import CyklasLogo from '../assets/ImageJaven/CyklasLogo.png';
import Facebook from '../assets/ImageJaven/Facebook.png';
import Instagram from '../assets/ImageJaven/Instagram.png';
import Twitter from '../assets/ImageJaven/Twitter.png';
import Youtube from '../assets/ImageJaven/Youtube.png';

const style = {
  fontFamily: 'Poppins',
};
const color = {
  marginRight: 1,
  fontSize: 32,
};

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#007FFF',
    padding: '10px',
  },
  '& placeholder.Mui-': {
    padding: '10px',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#007FFF',
  },
});

function Contact() {
  // const classes = useStyles();

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        height="70vh"
        width="100%"
        gap="30px"
      >
        <Box className="left_container" padding="20px" maxWidth="500px">
          <Typography
            sx={{
              ...style,
              fontWeight: 700,
              fontSize: '45px',
              color: '#3F3D56',
            }}
          >
            Send us a message
          </Typography>
          <Typography sx={{ ...style, color: '#007FFF' }} variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
            optio?
          </Typography>

          <CssTextField
            label="Enter your name"
            variant="standard"
            fullWidth
            sx={{ ...style, mt: 3 }}
          />

          <CssTextField
            label="Enter your email address"
            variant="standard"
            fullWidth
            sx={{ mt: 3 }}
          />
          <CssTextField
            label="Type your message here."
            variant="standard"
            multiline
            rows={4}
            fullWidth
            sx={{ mt: 3 }}
          />

          <Button
            sx={{
              textTransform: 'none',
              fontFamily: 'Poppins',
              backgroundColor: '#007FFF',
              '&:hover': { backgroundColor: '#007FFF' },
              mt: 2,
              color: 'white',
            }}
            fullWidth
          >
            Send to Us!
          </Button>
        </Box>
        <Box className="right_container" padding="20xp" maxWidth="500px">
          <img
            src={contactillu}
            alt="contact_illustration"
            style={{ maxWidth: '700px', width: '100%', height: 'auto' }}
          />
          <Box display="flex" marginLeft="40px">
            <LocationOn size="large" sx={{ color: '#EB7E42', ...color }} />
            <Typography sx={{ ...style, lineHeight: 2 }}>
              {' '}
              Bilibid Viejo Street, Quiapo Manila.
            </Typography>
          </Box>
          <Box display="flex" marginLeft="40px">
            <Call sx={{ color: '#54AC52', ...color }} />
            <Typography sx={{ ...style, lineHeight: 2 }}>
              +639484014538
            </Typography>
          </Box>
          <Box display="flex" marginLeft="40px">
            <Email sx={{ color: '#007FFF', ...color }} />{' '}
            <Typography sx={{ ...style, lineHeight: 2 }}>
              cycrowd@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box
          className="Footer"
          marginTop="40px"
          width="100%"
          height="auto"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            className="Seperator"
            height="2px"
            width="85%"
            backgroundColor="#ECECEC"
          ></Box>

          <Box
            className="Content"
            margin="60px 0px 60px 0px"
            display="flex"
            gap="20px"
            height="auto"
            width="85%"
          >
            <Box className="Cyklas-logo" width="280px" height="auto">
              <Box className="Cyklas-logo-image">
                <img
                  src={CyklasLogo}
                  style={{
                    height: '70px',
                  }}
                />
              </Box>

              <Typography
                sx={{
                  marginTop: '15px',
                  color: '#727184',
                  fontSize: '14px',
                  textTransform: 'Capitalize',
                  width: '100%',
                  height: 'max-content',
                }}
              >
                Bilibid Viejo Street, Quiapo Manila.
              </Typography>

              <Typography
                sx={{
                  marginTop: '15px',
                  color: '#727184',
                  fontSize: '14px',
                  textTransform: 'none',
                  width: '100%',
                  height: 'max-content',
                }}
              >
                cycrowd@gmail.com
              </Typography>
            </Box>

            <Box
              className="Cyklas"
              marginLeft="181px"
              display="flex"
              flexDirection="column"
              width="200px"
              height="auto"
            >
              <Typography
                sx={{
                  color: '#3F3D56',
                  fontSize: '17px',
                  textTransform: 'Uppercase',
                  fontWeight: '600',
                  width: '100%',
                  height: 'max-content',
                }}
              >
                CykLas
              </Typography>

              <Button
                variant="text"
                sx={{
                  margin: '17px 0px 5px 0px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                  paddingRight: '20px',
                }}
              >
                Home
              </Button>

              <Button
                variant="text"
                sx={{
                  marginBottom: '5px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                }}
              >
                Services
              </Button>

              <Button
                variant="text"
                sx={{
                  marginBottom: '5px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                  paddingRight: '20px',
                }}
              >
                About
              </Button>

              <Button
                variant="text"
                sx={{
                  marginBottom: '5px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                }}
              >
                Contacts
              </Button>
            </Box>

            <Box
              className="Services"
              display="flex"
              flexDirection="column"
              width="auto"
              height="auto"
            >
              <Typography
                sx={{
                  color: '#3F3D56',
                  fontSize: '17px',
                  textTransform: 'Uppercase',
                  fontWeight: '600',
                  width: '100%',
                  height: 'max-content',
                }}
              >
                Services
              </Typography>

              <Button
                variant="text"
                sx={{
                  margin: '17px 0px 5px 0px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                  paddingRight: '20px',
                }}
              >
                CyClassroom
              </Button>

              <Button
                variant="text"
                sx={{
                  marginBottom: '5px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                  paddingRight: '20px',
                }}
              >
                QuizLit
              </Button>

              <Button
                variant="text"
                sx={{
                  marginBottom: '5px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#93929E',
                  textTransform: 'none',
                  fontSize: '14px',
                  height: '25px',
                  paddingLeft: '0px',
                  paddingRight: '20px',
                }}
              >
                Telecon (Video Conference)
              </Button>
            </Box>

            <Box
              className="Socials"
              marginLeft="50px"
              width="230px"
              height="auto"
            >
              <Typography
                sx={{
                  color: '#3F3D56',
                  fontSize: '17px',
                  textTransform: 'Uppercase',
                  fontWeight: '600',
                  width: '100%',
                  height: 'max-content',
                }}
              >
                Follow us
              </Typography>

              <Box
                className="Social-buttons"
                marginTop="13px"
                width="100%"
                height="auto"
                display="flex"
                gap="18px"
              >
                <IconButton
                  aria-label="cancel"
                  sx={{
                    height: '30px',
                    width: '30px',
                  }}
                >
                  <img
                    src={Facebook}
                    alt="Facebook"
                    style={{
                      height: '30px',
                      width: '30px',
                    }}
                  />
                </IconButton>

                <IconButton
                  aria-label="cancel"
                  sx={{
                    height: '30px',
                    width: '30px',
                  }}
                >
                  <img
                    src={Instagram}
                    alt="Instagram"
                    style={{
                      height: '30px',
                      width: '30px',
                    }}
                  />
                </IconButton>

                <IconButton
                  aria-label="cancel"
                  sx={{
                    height: '20px',
                    width: '20px',
                    margin: '5px 0px 0px 5px',
                  }}
                >
                  <img
                    src={Twitter}
                    alt="Twitter"
                    style={{
                      height: '30px',
                      width: '30px',
                    }}
                  />
                </IconButton>

                <IconButton
                  aria-label="cancel"
                  sx={{
                    height: '20px',
                    width: '20px',
                    margin: '5px 0px 0px 9px',
                  }}
                >
                  <img
                    src={Youtube}
                    alt="Youtube"
                    style={{
                      height: '30px',
                      width: '30px',
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>

          <Box
            className="Content2"
            padding="20px 0px"
            width="100%"
            height="auto"
            display="flex"
            gap="670px"
            backgroundColor="#007FFF"
          >
            <Box
              className="TC-PP"
              marginLeft="70px"
              display="flex"
              height="auto"
              width="auto"
            >
              <Button
                variant="text"
                sx={{
                  marginRight: '20px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#E1E1E1',
                  textTransform: 'Uppercase',
                  fontSize: '13px',
                  fontWeight: '500',
                  height: '25px',
                }}
              >
                Terms & Conditions
              </Button>

              <Box
                className="Seperator-v"
                margin="5px 0px 16px 0px"
                height="relative"
                width="1px"
                backgroundColor="#E1E1E1"
              ></Box>

              <Button
                variant="text"
                sx={{
                  marginLeft: '20px',
                  borderRadius: '0em',
                  width: 'max-content',
                  height: 'max-content',
                  color: '#E1E1E1',
                  textTransform: 'Uppercase',
                  fontSize: '13px',
                  fontWeight: '500',
                  height: '25px',
                }}
              >
                Privacy Policy
              </Button>
            </Box>

            <Box className="All-rights-reserved" width="auto" height="auto">
              <Box
                className="All-rights-reserved-sub"
                width="auto"
                height="auto"
                display="flex"
                gap="8px"
              >
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: '12px',
                    textTransform: 'none',
                    fontWeight: '500',
                    width: 'max-content',
                    height: 'max-content',
                  }}
                >
                  &copy; 2022 CyKlas. All rights reserved.
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: 'white',
                  fontSize: '12px',
                  textTransform: 'none',
                  fontWeight: '500',
                  width: 'relative',
                  height: 'max-content',
                  textAlign: 'Right',
                }}
              >
                Website by CyCrowd
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
