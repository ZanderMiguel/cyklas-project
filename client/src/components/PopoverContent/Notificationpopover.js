import React from 'react';
import { Link } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import { IoNewspaperSharp } from 'react-icons/io5';
import { HiUserGroup } from 'react-icons/hi';
import { FaClipboardList } from 'react-icons/fa';

const list = [
  { avatar: <Avatar />, student: 'zander' },
  { avatar: <Avatar />, student: 'rey' },
  { avatar: <Avatar />, student: 'lester' },
  { avatar: <Avatar />, student: 'charles' },
];

function Notificationpopover() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box maxWidth={500} maxHeight={300} padding="1rem">
      <Tabs value={value} onChange={handleChange}>
        <Tab label="General" disableRipple />
        <Tab label="Requests" disableRipple />
      </Tabs>
      <Divider sx={{ mb: 2 }} />
      {list.map((items, index) => (
        <Box key={index} width="100%" display="flex" alignItems="center">
          <Box mr={2}>{items.avatar}</Box>
          <Typography>{items.student}</Typography>
          <Box flexGrow={1} />
          <Button variant="contained"> accept</Button>
          <Button variant="text"> decline</Button>
        </Box>
      ))}
    </Box>
  );
}

export default Notificationpopover;
