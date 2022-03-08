import React from 'react';
//importing Mui
import contactillu from '../assets/Images/Contact_illustration.svg';
import {
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Divider,
} from '@mui/material';
import { LocationOn, Call, Email } from '@mui/icons-material';
// import {makeStyles} from '@mui/styles'
import { styled } from '@mui/material';
import CyklasLogo from '../assets/ImageJaven/CyklasLogo.png';
import Facebook from '../assets/ImageJaven/Facebook.png';
import Instagram from '../assets/ImageJaven/Instagram.png';
import Twitter from '../assets/ImageJaven/Twitter.png';
import Youtube from '../assets/ImageJaven/Youtube.png';
import './Contacts.css';
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
  const { designs } = useStyle();

  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        height="97vh"
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
        <Box className="Footer" sx = {designs.Footer_Style}>
          <Divider sx = {designs.Divider_Style}/>
          
          <Box className="Content" sx = {designs.Content_Style}> 
            <Box className = "Content-sub" sx = {designs.Content_Sub_Style}>

            <Box className = "CyklasLogo-Cyklas" sx = {designs.CyklasLogo_Cyklas_Style}>
              <Box className="Cyklas-logo" sx = {designs.Cyklas_Logo_Style}>
                <Box className="Cyklas-logo-image" sx = {designs.Cyklas_Logo_Image_Style}>
                  <img
                    src={CyklasLogo}
                    style={{
                      height: '70px'
                    }}
                  />
                

                <Typography sx = {designs.CompanyAddress_Typography_Style}>
                  Bilibid Viejo Street, Quiapo Manila.
                </Typography>

                <Typography sx = {designs.CompanyEmailAddress_Typography_Style}>
                  cycrowd@gmail.com
                </Typography>
                </Box>
              </Box>

              <Box className="Content-sub2" sx={designs.Content_Sub2_Style}>
                <Box className="Cyklas" sx={designs.Cyklas_Style}>
                  <Typography sx={designs.Cyklas_Typography_Style}>
                    CykLas
                  </Typography>

                  <Typography sx={designs.Home_TextButton_Style}>
                    Home
                  </Typography>

                  <Typography sx={designs.Services_TextButton_Style}>
                    Services
                  </Typography>

                  <Typography sx={designs.About_TextButton_Style}>
                    About
                  </Typography>

                  <Typography sx={designs.Contacts_TextButton_Style}>
                    Contacts
                  </Typography>
                </Box>

                <Box className="Services" sx={designs.Services_Style}>
                  <Typography sx={designs.Services_Typography_Style}>
                    Services
                  </Typography>

                  <Typography sx={designs.Classroom_TextButton_Style}>
                    CyClassroom
                  </Typography>

                  <Typography sx={designs.Quizlit_TextButton_Style}>
                    QuizLit
                  </Typography>

                  <Typography sx={designs.Telecon_TextButton_Style}>
                    Telecon (Video Conference)
                  </Typography>
                </Box>

                <Button variant="text" sx = {designs.Contacts_TextButton_Style}>
                  Contacts
                </Button>
              </Box>
            </Box>

            <Box className = "Services-Socials" sx = {designs.Services_Socials_Style}>
              <Box className="Services" sx = {designs.Services_Style}>
                <Typography sx = {designs.Services_Typography_Style}>
                  Services
                </Typography>

                <Button variant="text" sx = {designs.Classroom_TextButton_Style}>
                  CyClassroom
                </Button>

                <Button variant="text" sx = {designs.Quizlit_TextButton_Style}>
                  QuizLit
                </Button>

                <Button variant="text" sx = {designs.Telecon_TextButton_Style}>
                  Telecon (Video Conference)
                </Button>
              </Box>

              <Box className="Socials" sx = {designs.Socials_Style}>
                <Typography sx = {designs.FollowUs_Typography_Style}>
                  Follow us on
                </Typography>

                <Box className="Social-buttons" sx = {designs.SocialButtons_Style}>
                  <IconButton
                    aria-label="facebook"
                    sx = {designs.Facebook_IconButton_Style}>
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
                    aria-label="instagram"
                    sx = {designs.Instagram_IconButton_Style}>
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
                    aria-label="twitter"
                    sx = {designs.Twitter_IconButton_Style}>
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
                    aria-label="youtube"
                    sx = {designs.Youtube_IconButton_Style}>
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

          <Box className="Content2" sx = {designs.Content2_Style}>
            <Box className = "Content2-sub" sx = {designs.Content2_Sub_Style}>
            <Box className="TC-PP" sx = {designs.TC_PP_Style}>

              <Typography onClick = {() => { alert('clicked');}}
              sx = {designs.TermsCondition_Typography_Style}>
                Terms & Conditions
              </Typography>

              <Divider orientation = "vertical" flexItem sx = {designs.DividerV_Style}/>

              <Typography onClick = {() => { alert('clicked');}}
              sx = {designs.PrivacyPolicy_Typography_Style}>
                Privacy Policy
              </Typography>

            </Box>

            <Box className="All-rights-reserved" sx = {designs.All_Rights_Reserved_Style}>
              <Box className="All-rights-reserved-sub" sx = {designs.All_Rights_Reserved_Sub_Style}>
                <Typography sx = {designs.All_Rights_Reserved_Typography_Style}>
                  &copy; 2022 CyKlas. All rights reserved.
                </Typography>
              </Box>

              <Typography sx = {designs.Cycrowd_Typography_Style}>
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
