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
import useStyle from "./Styles/Notificationpopover_style";

function Notificationpopover({ general, request }) {
  const {designs} = useStyle();
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
        <Box sx = {designs.RequestContainer_Style}>
          {request.length > 0 ? (
            request.map((items, index) => (
              <div key={index}>
                <Box sx = {designs.RequestContainer_Sub_Style}>
                  <Box sx = {designs.RequestContainer_Sub2_Style}>
                    <Box sx = {designs.RequestContainer_Sub3_Style}>{items.avatar}</Box>
                    <Typography>{items.student}</Typography>
                  </Box>
                  <Button
                    variant="contained" sx = {designs.AcceptButton_Style} >
                    Accept
                  </Button>
                  <Button
                    variant="text" sx = {designs.DeclineButton_Style}>
                    Decline
                  </Button>
                </Box>
                <Divider sx = {designs.Divider_Style} />
              </div>
            ))
          ) : (
            <Box sx = {designs.RequestContainer_Sub4_Style}>
              <Typography children="have nothing to show" />
            </Box>
          )}
        </Box>
      )}

      {value === 0 && (
        <Box sx = {designs.GeneralContainer_Style}>
          {general.length > 0 ? (
            general.map((items, index) => (
              <div key={index}>
                <Box sx = {designs.GeneralContainer_Sub_Style}>
                  <Box sx = {designs.GeneralContainer_Sub2_Style}> {items.avatar}</Box>
                  <Box>
                    <Typography>{items.action} </Typography>
                    <Typography>{items.roomname}</Typography>
                  </Box>
                </Box>
                <Divider sx = {designs.Divider_Style} />
              </div>
            ))
          ) : (
            <Box sx = {designs.GeneralContainer_Sub3y_Style}>
              <Typography children="have nothing to show" />
            </Box>
          )}
        </Box>
      )}
    </>
  );
}

export default Notificationpopover;
