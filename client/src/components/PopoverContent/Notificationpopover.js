import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, Box, Typography, Tabs, Tab, Button } from '@mui/material';
import { Circle, NotificationsActive } from '@mui/icons-material';
import useStyle from './Styles/Notificationpopover_style';
import RequestPopup from '../../Notifications/RequestPopup';
function Notificationpopover({ general, request }) {
  const { designs } = useStyle();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box
        sx={{
          padding: '0.8em 0em 0em 0em',
          position: 'sticky',
          top: 0,
          width: 'relative',
          height: 'auto',
          backgroundColor: 'white',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <NotificationsActive
            sx={{
              color: '#007FFF',
              fontSize: '1.5em',
              margin: '0em 0.5em 0em 0.5em',
            }}
          />
          <Typography
            sx={{
              fontSize: '1em',
              fontWeight: '500',
              color: '#3F3D56',
            }}
          >
            Notifications
          </Typography>

          <Box flexGrow={1} />

          <Button
            component={Link}
            to="/Notifications_viewall"
            sx={{
              margin: '0em 1em 0.8em 2em',
              padding: '0em 1em',
              fontSize: '0.8em',
              fontWeight: '500',
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: '#007FFF',
              width: 'max-content',
              '&: hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            View all notifications
          </Button>
        </Box>

        <Tabs value={value} onChange={handleChange} sx={{ margin: '0em 1em' }}>
          <Tab label="General" disableRipple />
          <Tab label="Requests" disableRipple />
        </Tabs>
      </Box>

      {value === 1 && (
        <Box sx={designs.RequestContainer_Style}>
          <RequestPopup />
        </Box>
      )}

      {value === 0 && (
        <>
          <Box sx={designs.GeneralContainer_Style}>
            {general.length > 0 ? (
              general.map((items, index) => (
                <div key={index}>
                  <Box sx={designs.GeneralContainer_Sub_Style}>
                    <Circle
                      sx={{
                        marginTop: '0.4em',
                        color: '#007FFF',
                        fontSize: '0.7em',
                      }}
                    />
                    {/* <Box sx = {designs.GeneralContainer_Sub2_Style}> {items.avatar}</Box> */}
                    <Box>
                      <Typography
                        sx={{
                          fontSize: '0.8em',
                          fontWeight: '600',
                          color: '#3F3D56',
                          width: '22.5em',
                        }}
                      >
                        {items.action}
                      </Typography>

                      <Box
                        sx={{
                          marginTop: '0.2em',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5em',
                          width: '18em',
                          height: 'auto',
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.7em',
                            fontWeight: '600',
                            color: '#605E73',
                            width: 'auto',
                          }}
                        >
                          {items.user}
                        </Typography>

                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{ margin: '0.2em 0em' }}
                        />

                        <Typography
                          sx={{
                            fontSize: '0.7em',
                            fontWeight: '500',
                            color: '#8E8E8E',
                            width: 'auto',
                          }}
                        >
                          {items.dateTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={designs.GeneralContainer_Sub2_Style}>
                      {' '}
                      {items.avatar}
                    </Box>
                  </Box>
                  <Divider sx={designs.Divider_Style} />
                </div>
              ))
            ) : (
              <Box sx={designs.GeneralContainer_Sub3y_Style}>
                <Typography children="have nothing to show" />
              </Box>
            )}
          </Box>
        </>
      )}
    </>
  );
}

export default Notificationpopover;
