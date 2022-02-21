import React from 'react';
import logo from '../assets/Ellipse 3.svg';

//MUI imports
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Zander from '../assets/Images/zander.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Drawer from './Drawer';
import CusPopover from './Popover';

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClickNotif = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNotif = () => {
    setAnchorEl(null);
  };

  const handleClickArrow = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleCloseArrow = () => {
    setAnchorEl1(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'notif' : undefined;

  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? 'arrow' : undefined;

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
          <IconButton
            aria-describedby={id}
            size="small"
            onClick={handleClickNotif}
          >
            <Badge badgeContent={3} color="primary">
              <NotificationsIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
            </Badge>
          </IconButton>
          <CusPopover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleCloseNotif}
          >
            <Box p={2}>
              <Typography variant="h4">aslkdjalksjd</Typography>
            </Box>
          </CusPopover>
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
          <IconButton
            aria-describedby={id1}
            size="small"
            onClick={handleClickArrow}
          >
            <ArrowDropDownIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
          </IconButton>
          <CusPopover
            id={id1}
            open={open1}
            anchorEl={anchorEl1}
            onClose={handleCloseArrow}
          >
            <Box p={2}>
              <Typography variant="h4">aslkdjalksjd</Typography>
            </Box>
          </CusPopover>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
