import React from 'react';
import logo from '../assets/Ellipse 3.svg';
import Notificationpopover from './PopoverContent/Notificationpopover';
// import Notifications_viewall from '../Notifications/Notifications_viewall';
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
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Drawer from './Drawer';
import CusPopover from './Popover';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import { useTheme } from '@mui/material/styles';
import { PostAdd } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const general = [
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action: 'You are added to a new room "SOFTWARE ENGINEERING 2".',
  //   user: 'Zander Miguel',
  //   dateTime: 'December 25, 2024 at 9:05 AM',
  // },
  // {
  //   avatar: (
  //     <PostAdd
  //       sx={{ color: '#47B753', borderRadius: '2em', fontSize: '2em' }}
  //     />
  //   ),
  //   action:
  //     'You posted a new announcement on your room "EMBEDDED PROGRAMMING".',
  //   user: 'Mark Andrei (You)',
  //   dateTime: 'December 14, 2024 at 3:05 PM',
  // },
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action:
  //     'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
  //   user: 'Paul Rudd',
  //   dateTime: 'November 16, 2024 at 12:35 AM',
  // },
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
  //   user: 'Paul Rudd',
  //   dateTime: 'November 15, 2024 at 7:05 PM',
  // },
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action:
  //     'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
  //   user: 'Paul Rudd',
  //   dateTime: 'November 16, 2024 at 12:35 AM',
  // },
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
  //   user: 'Paul Rudd',
  //   dateTime: 'November 15, 2024 at 7:05 PM',
  // },
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action:
  //     'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
  //   user: 'Paul Rudd',
  //   dateTime: 'November 16, 2024 at 12:35 AM',
  // },
  // {
  //   avatar: <Avatar src={AvatarIcon} />,
  //   action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
  //   user: 'Paul Rudd',
  //   dateTime: 'November 15, 2024 at 7:05 PM',
  // },
];

function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const [items, setItems] = React.useState(null);
  const [toggleAccept, setToggleAccept] = React.useState(false);
  const [userImg, setUserImg] = React.useState('');
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/requests', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setItems(res.data);
        setUserImg(`http://localhost:5000/static/${res.data.data.myFile[0]}`);
      })
      .catch((err) => console.log(err));
  }, [toggleAccept]);

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
            {location.pathname.slice(0, 10) === '/dashboard'
              ? 'Dashboard'
              : location.pathname.slice(0, 9) === '/telecon'
              ? 'Telecon'
              : location.pathname.slice(0, 6) === `/rooms`
              ? 'Rooms'
              : location.pathname.slice(0, 11) === '/classcards'
              ? 'Class Card'
              : location.pathname.slice(0, 8) === '/quizlit'
              ? 'Quizlit'
              : location.pathname.slice(0, 8) === '/records'
              ? 'Records'
              : location.pathname.slice(0, 9) === '/settings' && 'Settings'}
          </Typography>
          <IconButton size="small" onClick={handleClickNotif}>
            <Badge
              variant={items && items.length > 0 ? 'dot' : null}
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
            <Notificationpopover
              general={general}
              items={items}
              setToggleAccept={setToggleAccept}
              setItems={setItems}
            />
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
              src={JSON.parse(localStorage.userData).data.imageUrl}
              alt={JSON.parse(
                localStorage.userData
              ).data.user.firstName[0].toUpperCase()}
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
              avatar={JSON.parse(localStorage.userData).data.imageUrl}
              alt={JSON.parse(
                localStorage.userData
              ).data.user.firstName[0].toUpperCase()}
            />
          </CusPopover>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
