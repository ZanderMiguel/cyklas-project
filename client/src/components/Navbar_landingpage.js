import React, { useState } from 'react';
import About from '../pages-landing/About';
import Home from '../pages-landing/Home';
import Service from '../pages-landing/Service';
import Contact from '../pages-landing/Contact';
import { Link, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from './Drawer_landingpage';

//Import Mui
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Tabs,
  Tab,
  IconButton,
} from '@mui/material';
import Logo from '../assets/Images/Ellipse 2.png';

function Navbar_landingpage() {
  const { page } = useParams();

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const idx = {
    Home: 0,
    Service: 1,
    About: 2,
    Contact: 3,
  };
  const [value, setValue] = useState(idx[page] === undefined ? 0 : idx[page]);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };
  React.useEffect(() => {
    setValue(value);
  }, [value]);

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
              noWrap
            >
              Cyklas
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            {isMatch ? (
              <Drawer />
            ) : (
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
            )}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        {page === undefined && <Home />}
        {page === 'Service' && <Service />}
        {page === 'About' && <About />}
      </Container>
      {page === 'Contact' && <Contact />}
    </>
  );
}

export default Navbar_landingpage;
