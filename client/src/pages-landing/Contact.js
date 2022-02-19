import React from 'react';
//importing Mui
import contactillu from '../assets/Images/Contact_illustration.svg';
import { Typography, Box, TextField, Button, IconButton, Divider } from '@mui/material';
import { LocationOn, Call, Email } from '@mui/icons-material';
// import {makeStyles} from '@mui/styles'
import { styled } from '@mui/material';
import CyklasLogo from '../assets/ImageJaven/CyklasLogo.png';
import Facebook from '../assets/ImageJaven/Facebook.png';
import Instagram from '../assets/ImageJaven/Instagram.png';
import Twitter from '../assets/ImageJaven/Twitter.png';
import Youtube from '../assets/ImageJaven/Youtube.png';
import "./Contacts.css";
import useStyle from './Contacts_style';

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
  const {designs, theme} = useStyle()
  console.log(theme)

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
          <Divider width = "100%" padding = "0px 20px"/>
          
          <Box
            className="Content"
            height="auto"
            width="100%"
          > 
            <Box className = "Content-sub" 
            margin = "25px 70px" 
            display="flex"
            flexWrap="wrap"
            gap="40px"
            height="auto"
            width="auto">

            <Box className="Cyklas-logo" sx = {designs.Cyklas_Logo_Style}>
              <Box className="Cyklas-logo-image" width = "max-content" height = "100%">
                <img
                  src={CyklasLogo}
                  style={{
                    height: '70px'
                  }}
                />
              

              <Typography
                sx={{
                  marginTop: '15px',
                  color: '#727184',
                  fontSize: '14px',
                  textTransform: 'Capitalize',
                  width: 'max-content',
                  height: 'max-content'
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
                  width: 'max-content',
                  height: 'max-content'
                }}
              >
                cycrowd@gmail.com
              </Typography>
              </Box>
            </Box>

            {/* <Box sx = {designs.BoxFlexGrow_Style}/> */}
            
            <Box className = "Content2" sx = {designs.Content2_Style}>
            <Box
              className="Cyklas"
              display="flex"
              flexDirection="column"
              width="190px"
              height="160px"
              padding="0px 20px"
            >
              <Typography
                sx={{
                  color: '#3F3D56',
                  fontSize: '17px',
                  textTransform: 'Uppercase',
                  fontWeight: '600',
                  width: '100%',
                  height: 'max-content'
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
              width="190px"
              height="160px"
              padding="0px 20px"
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
              width="190px"
              height="160px"
              padding="0px 20px"
            >
              <Typography
                sx={{
                  color: '#3F3D56',
                  fontSize: '17px',
                  textTransform: 'Uppercase',
                  fontWeight: '600',
                  width: '100%',
                  height: 'max-content'
                }}
              >
                Follow us
              </Typography>

              <Box
                className="Social-buttons"
                marginTop="13px"
                width="auto"
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
                      height: '31px',
                      width: '31px',
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
                      height: '34px',
                      width: '34px',
                    }}
                  />
                </IconButton>
              </Box>
              </Box>
            </Box>
            </Box>
          </Box>

          <Box
            className="Content2"
            padding="20px 0px"
            bottom="0"
            left="0"
            right="0"
            position="relative"
            width="100%"
            height="auto"
            backgroundColor="#007FFF"
          >
            <Box className = "Content2-sub" display="flex" gap = "20px" flexWrap="wrap" margin = "0px 70px" height = "auto" width = "auto">
            <Box
              className="TC-PP"
              display="flex"
              flexGrow = {1}
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
                sx={designs.Cycrowd_Typography_Style}>
                Website by CyCrowd
              </Typography>
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Contact;
