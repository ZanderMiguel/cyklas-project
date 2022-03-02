import React, { useState } from 'react';
import About from '../pages-landing/About';
import Home from '../pages-landing/Home';
import Service from '../pages-landing/Service';
import Contact from '../pages-landing/Contact';
import { useParams, useHistory } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

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

function Navbar_landingpage({ data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const { page } = useParams();
  const history = useHistory();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const open = Boolean(anchorEl);

  const tabNameToIndex = {
    0: 'login',
    1: 'service',
    2: 'about',
    3: 'contact',
  };
  const indexToTabName = {
    login: 0,
    service: 1,
    about: 2,
    contact: 3,
  };
  const [value, setValue] = useState(indexToTabName[page]);

  //Event_Handler
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChangeIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickTab = (e, newValue) => {
    history.push(`/home/${tabNameToIndex[newValue]}`);
    setValue(newValue);
  };

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <>
      <AppBar position="sticky" sx={{ background: 'white' }} elevation={0}>
        <Container maxWidth="xl">
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <Box display="flex" alignItems="center">
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
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Tabs
              onChange={handleClickTab}
              value={value}
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              style={{ textDecoration: 'none' }}
            >
              <Tab disableRipple label="Home" />
              <Tab disableRipple label="Service" />
              <Tab disableRipple label="About" />
              <Tab disableRipple label="Contact" />
            </Tabs>

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
          </Box>
        </Container>
      </AppBar>
      <Container maxWidth="xl">
        {value === 0 && <Home data={data} />}
        {value === 1 && <Service />}
        {value === 2 && <About />}
      </Container>
      {value === 3 && <Contact />}
    </>
  );
}

export default Navbar_landingpage;
