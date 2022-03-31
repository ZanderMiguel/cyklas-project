import React from 'react';
import logo from '../assets/Ellipse 3.svg';
import Notificationpopover from './PopoverContent/Notificationpopover';
import Accountpopover from './PopoverContent/Accountpopover';

//MUI imports
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  CssBaseline,
} from '@mui/material';
import { Badge } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Zander from '../assets/Images/zander.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Drawer from './Drawer';
import CusPopover from './Popover';
import { useTheme } from '@mui/material/styles';

const request = [
  { avatar: <Avatar />, student: 'zander' },
  { avatar: <Avatar />, student: 'rey' },
  { avatar: <Avatar />, student: 'lester' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'charles' },
  { avatar: <Avatar />, student: 'rules' },
];
const general = [
  {
    avatar: <Avatar />,
    action: 'Mark Andrei added you to his class',
    roomname: 'Embedded Programming',
  },
  {
    avatar: <Avatar />,
    action: 'Mark Andrei added you to his class',
    roomname: 'Embedded Programming',
  },
  {
    avatar: <Avatar />,
    action: 'Mark Andrei added you to his class',
    roomname: 'Embedded Programming',
  },
  {
    avatar: <Avatar />,
    action: 'Mark Andrei added you to his class',
    roomname: 'Embedded Programming',
  },
];

function Navbar() {
  const [badge, setBadge] = React.useState();
  const theme = useTheme();
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
  const notif = Boolean(anchorEl);

  const account = Boolean(anchorEl1);
  const badgeDot = React.useRef(null);

  return (
    <>
      <CssBaseline />
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
          <IconButton size="small" onClick={handleClickNotif}>
            <Badge
              variant={general.length > 0 || request.length > 0 ? 'dot' : null}
              color="primary"
              overlap="circular"
            >
              <NotificationsIcon sx={{ color: 'rgba(0, 0, 0, 0.54)' }} />
            </Badge>
          </IconButton>
          <CusPopover
            open={notif}
            anchorEl={anchorEl}
            onClose={handleCloseNotif}
          >
            <Notificationpopover general={general} request={request} />
          </CusPopover>
          <Box
            display="flex"
            alignItems="center"
            onClick={handleClickArrow}
            sx={{
              ml: '20px',
              '&:hover': {
                cursor: 'pointer',
                backgroundColor: '',
              },
            }}
          >
            <Avatar
              src={`${Buffer.from(
                JSON.parse(localStorage.userData).data.user.image
              ).toString()}`}
              alt="profileImg"
            />
            <Box
              sx={{
                display: 'flex',
                [theme.breakpoints.down('md')]: {
                  display: 'none',
                },
              }}
            >
              <Box
                sx={{
                  ml: '5px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '7rem',
                }}
              >
                <Typography
                  noWrap
                  variant="body1"
                  sx={{ fontWeight: 500, color: '#3F3D56' }}
                >
                  {JSON.parse(localStorage.userData).data.user.firstName}
                </Typography>
              </Box>
              <ArrowDropDownIcon sx={{ color: 'rgba(0, 0, 0, 0.54)', ml: 1 }} />
            </Box>
          </Box>
          <CusPopover
            open={account}
            anchorEl={anchorEl1}
            onClose={handleCloseArrow}
          >
            <Accountpopover
              avatar={`${Buffer.from(
                JSON.parse(localStorage.userData).data.user.image
              ).toString()}`}
            />
          </CusPopover>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
