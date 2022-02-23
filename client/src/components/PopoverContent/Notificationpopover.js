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

function Notificationpopover() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="General" disableRipple />
        <Tab label="Requests" disableRipple />
      </Tabs>
      <Divider />
      {value === 1 && (
        <Box padding="0.5em 1em">
          <div
            style={{
              boxSizing: 'border-box',
              maxHeight: 500,
              maxWidth: 400,
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column-reverse',
            }}
          >
            {request.map((items, index) => (
              <Box key={index} width={400} display="flex" alignItems="center">
                <Box display="flex" flexGrow={1}>
                  <Box mr={2}>{items.avatar}</Box>
                  <Typography>{items.student}</Typography>
                </Box>
                <Button variant="contained"> accept</Button>
                <Button variant="text"> decline</Button>
              </Box>
            ))}
          </div>
        </Box>
      )}

      {value === 0 && (
        <Box width={400} padding="0.5em 1em">
          {general.map((items, index) => (
            <div key={index}>
              <Box width="100%" display="flex" alignItems="center">
                <Box mr={2}>{items.avatar}</Box>
                <Box>
                  <Typography>{items.action} </Typography>
                  <Typography>{items.roomname}</Typography>
                </Box>
              </Box>
              <Divider />
            </div>
          ))}
        </Box>
      )}
    </>
  );
}

export default Notificationpopover;
