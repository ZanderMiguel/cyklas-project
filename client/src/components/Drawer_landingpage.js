import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideNav from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {
  MdQuiz,
  MdOutlineVideoCameraFront,
  MdOutlineSettings,
} from 'react-icons/md';
import { VscFileSubmodule } from 'react-icons/vsc';
import { RiDashboardLine } from 'react-icons/ri';
import { BsDoorOpen } from 'react-icons/bs';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Drawer_landingpage() {
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

  const drawerlist = [
    {
      text: 'HOME',
      path: '/',
    },
    {
      text: 'SERVICE',
      path: '/Service',
    },
    {
      text: 'ABOUT',
      path: '/About',
    },
    {
      text: 'CONTACT',
      path: '/Contact',
    },
  ];

  const list = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ marginTop: '50px' }}>
        {drawerlist.map((item, index) => {
          const { text, path } = item;
          return (
            <Link
              key={index}
              style={{ textDecoration: 'none', color: 'blue' }}
              to={path}
            >
              <ListItem
                disableRipple
                button
                key={text}
                sx={{
                  '&:hover': {
                    backgroundColor: '#71707B',
                  },
                  marginBottom: '10px',
                }}
              >
                <ListItemText
                  sx={{ '&:hover': { color: 'white' } }}
                  primary={
                    <Typography
                      sx={{
                        color: '#3F3D56',
                        fontWeight: 600,
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

export default Drawer_landingpage;
