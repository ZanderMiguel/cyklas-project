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
import './Styles/Contacts.css';
import useStyle from './Styles/Contacts_style';
import Footer from './Footer';

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
      </Box>
      <Footer />
    </>
  );
}

export default Contact;
