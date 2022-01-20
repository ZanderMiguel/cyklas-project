import React from 'react';
import logo from '../assets/Ellipse 3.svg';

//MUI imports
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ backgroundColor: 'transparent' }}
      >
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Menu />
          </IconButton>
          <img src={logo} alt="cyklasLogo" />
          <Typography variant="h6" sx={{ flexGrow: 1, color: '#3F3D56' }}>
            CyKlas
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
