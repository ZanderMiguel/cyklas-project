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

function Notificationpopover({ general, request }) {
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
        <Box width="30rem" maxHeight="20rem" padding="0.5em 1em">
          {request.length > 0 ? (
            request.map((items, index) => (
              <>
                <Box
                  key={index}
                  width="100%"
                  display="flex"
                  alignItems="center"
                >
                  <Box display="flex" flexGrow={1} alignItems="center">
                    <Box mr={2}>{items.avatar}</Box>
                    <Typography>{items.student}</Typography>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: '0.9em', textTransform: 'none' }}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="text"
                    sx={{ textTransform: 'none', ml: '0.5em', mr: '0.7em' }}
                  >
                    Decline
                  </Button>
                </Box>
                <Divider sx={{ mb: '0.5em', mt: '0.5em' }} />
              </>
            ))
          ) : (
            <Box
              width="100%"
              height="20rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography children="have nothing to show" />
            </Box>
          )}
        </Box>
      )}

      {value === 0 && (
        <Box width="30rem" maxHeight="20rem" padding="0.5em 1em">
          {general.length > 0 ? (
            general.map((items, index) => (
              <div key={index}>
                <Box width="100%" display="flex" alignItems="center">
                  <Box mr={2}>{items.avatar}</Box>
                  <Box>
                    <Typography>{items.action} </Typography>
                    <Typography>{items.roomname}</Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: '0.5em', mt: '0.5em' }} />
              </div>
            ))
          ) : (
            <Box
              width="100%"
              height="20rem"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography children="have nothing to show" />
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default Notificationpopover;
