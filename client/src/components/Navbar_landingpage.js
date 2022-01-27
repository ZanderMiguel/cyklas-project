import React, { useState } from 'react';
import About from '../pages-landing/About';
import Home from '../pages-landing/Home';
import Service from '../pages-landing/Service';
import Contact from '../pages-landing/Contact';
import { Link, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
//Import Mui
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Logo from '../assets/Images/Ellipse 2.png';

const anchors = {
  textDecoration: 'none',
};
const Root = styled('Box')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

function Navbar_landingpage() {
  const { page } = useParams();

  const idx = {
    Home: 0,
    Service: 1,
    About: 2,
    Contact: 3,
  };
  const [value, setValue] = useState(idx[page] === undefined ? 0 : idx[page]);
  const handleClickTab = (e, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(value);
  }, [value]);

  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <AppBar position="sticky" sx={{ background: 'white' }} elevation={0}>
        <Container maxWidth="xl">
          <Toolbar>
            <img src={Logo} alt="cyklas logo" />
            <Typography
              variant="h6"
              fontFamily="Poppins"
              color="#3F3D56"
              fontWeight="Bold"
            >
              Cyklas
            </Typography>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Tabs
              onChange={handleClickTab}
              value={value}
              indicatorColor="primary"
              style={{ textDecoration: 'none' }}
            >
              <Tab disableRipple label="Home" component={Link} to="/" />
              <Tab
                disableRipple
                label="Service"
                component={Link}
                to="/Service"
              />
              <Tab disableRipple label="About" component={Link} to="/About" />
              <Tab
                disableRipple
                label="Contact"
                component={Link}
                to="/Contact"
              />
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        {page === undefined && <Home />}
        {page === 'Service' && <Service />}
        {page === 'About' && <About />}
        {page === 'Contact' && <Contact />}
      </Container>
    </>
  );
}

export default Navbar_landingpage;
