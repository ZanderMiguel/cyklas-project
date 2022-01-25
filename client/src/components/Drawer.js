import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SideNav from '@mui/material/Drawer';
import Button from '@mui/material/Button';
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

  const drawerlist = [
    {
      icon: <RiDashboardLine size="25px" />,
      text: 'Dashboard',
    },
    {
      icon: <BsDoorOpen size="25px" />,
      text: 'Rooms',
    },
    {
      icon: <MdQuiz size="25px" />,
      text: 'Quizlit',
    },
    {
      icon: <MdOutlineVideoCameraFront size="25px" />,
      text: 'Telecon',
    },
    {
      icon: <VscFileSubmodule size="25px" />,
      text: 'Records',
    },
    {
      icon: <MdOutlineSettings size="25px" />,
      text: 'Setting',
    },
  ];

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List sx={{ marginTop: '50px' }}>
        {drawerlist.map((item, index) => {
          const { icon, text } = item;
          return (
            <ListItem
              button
              key={text}
              sx={{
                '&:hover': { backgroundColor: '#71707B', color: 'white' },
                marginBottom: '10px',
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {text}
                  </Typography>
                }
              />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>Click</Button>
      <SideNav anchor={'left'} open={drawer} onClose={toggleDrawer(false)}>
        {list()}
      </SideNav>
    </>
  );
}

export default Drawer;
