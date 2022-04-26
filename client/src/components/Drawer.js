import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideNav from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  MdOutlineQuiz,
  MdOutlineVideoCameraFront,
  MdOutlineSettings,
} from 'react-icons/md';
import { VscFileSubmodule } from 'react-icons/vsc';
import { RiDashboardLine } from 'react-icons/ri';
import { BsDoorOpen } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Drawer() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawer(open);
  };

  const userType =
    JSON.parse(localStorage.userData).data.user.userType === 'Professor'
      ? [
          {
            icon: <MdOutlineQuiz size="25px" />,
            text: 'Quizlit',
            path: '/quizlit',
          },
          {
            icon: <MdOutlineVideoCameraFront size="25px" />,
            text: 'Telecon',
            path: '/telecon',
          },
          {
            icon: <VscFileSubmodule size="25px" />,
            text: 'Records',
            path: '/records',
          },
        ]
      : [
          {
            icon: <VscFileSubmodule size="25px" />,
            text: 'ClassCard',
            path: '/classcards',
          },
        ];

  const drawerlist = [
    {
      icon: <RiDashboardLine size="25px" />,
      text: 'Dashboard',
      path: '/dashboard',
    },
    {
      icon: <BsDoorOpen size="25px" />,
      text: 'Rooms',
      path: '/rooms',
    },
    ...userType,
    {
      icon: <MdOutlineSettings size="25px" />,
      text: 'Settings',
      path: '/settings',
    },
  ];

  const divs = React.useRef(null);

  const list = () => (
    <Box
      sx={{ width: 280 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ marginTop: '50px' }}>
        {drawerlist.map((item, index) => {
          const { icon, text, path } = item;
          return (
            <Link
              key={text}
              style={{ textDecoration: 'none', color: 'blue' }}
              to={path}
            >
              <ListItem
                ref={divs}
                name={text}
                disableRipple
                button
                key={text}
                sx={{
                  marginBottom: "0.4em",
                  paddingLeft: "1.4em",
                  '&:hover': {
                    backgroundColor: '#71707B',
                    '& .MuiListItemIcon-root': {
                      color: 'white',
                    },
                    '& .MuiTypography-root': {
                      color: 'white',
                    },
                  }
                }}
              >
                <ListItemIcon>{icon}</ListItemIcon>

                <ListItemText
                  primary={
                    <Typography
                      sx={{
                        color: '#3F3D56',
                        fontSize: "1.1em",
                        fontWeight: 500,
                      }}
                    >
                      {text}
                    </Typography>
                  }
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <IconButton
        sx={{ marginRight: 2 }}
        size="medium"
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <Menu />
      </IconButton>

      <SideNav anchor={'left'} open={drawer} onClose={toggleDrawer(false)}>
        {list()}
      </SideNav>
    </>
  );
}

export default Drawer;
