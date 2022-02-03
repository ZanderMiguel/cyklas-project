import React from 'react';
import logo from '../assets/Ellipse 3.svg';

//MUI imports
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Zander from '../assets/Images/zander.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Drawer from './Drawer';

function Navbar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        style={{ backgroundColor: '#EBEBEB', overflow: 'auto' }}
        position="sticky"
        elevation={1}
      >
        <Toolbar>
          <Drawer />
          <img src={logo} alt="cyklasLogo" />
          <Typography
            sx={{
              flexGrow: 1,
              color: '#3F3D56',
              fontWeight: '600',
              marginLeft: '10px',
            }}
            variant="h6"
          >
            Dashboard
          </Typography>

          <IconButton size="small">
            <Badge badgeContent={2} color="primary">
              <NotificationsIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
            </Badge>
          </IconButton>
          <Avatar src={Zander} sx={{ ml: '20px' }} />
          <Box
            sx={{
              ml: '5px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '6rem',
            }}
          >
            <Typography
              noWrap
              variant="body1"
              sx={{ fontWeight: 500, color: '#3F3D56' }}
            >
              Zander Miguel
            </Typography>
          </Box>
          <IconButton size="small">
            <ArrowDropDownIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
