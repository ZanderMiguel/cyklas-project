import React from 'react';
import {
  Container,
  Divider,
  Box,
  Typography,
  Avatar,
  Tabs,
  Tab,
  Button,
} from '@mui/material';
import {
  Circle,
  NotificationsActive,
  PostAdd,
  ClearAll,
} from '@mui/icons-material';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';
import useStyle from './Styles/Notifications_viewall_style';
import Requests from './Requests';
import axios from 'axios'

const general = [
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'You are added to a new room "SOFTWARE ENGINEERING 2".',
    user: 'Zander Miguel',
    dateTime: 'December 25, 2024 at 9:05 AM',
  },
  {
    avatar: (
      <PostAdd
        sx={{ color: '#47B753', borderRadius: '2em', fontSize: '2em' }}
      />
    ),
    action:
      'You posted a new announcement on your room "EMBEDDED PROGRAMMING".',
    user: 'Mark Andrei (You)',
    dateTime: 'December 14, 2024 at 3:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action:
      'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
    user: 'Paul Rudd',
    dateTime: 'November 16, 2024 at 12:35 AM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
    user: 'Paul Rudd',
    dateTime: 'November 15, 2024 at 7:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action:
      'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
    user: 'Paul Rudd',
    dateTime: 'November 16, 2024 at 12:35 AM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
    user: 'Paul Rudd',
    dateTime: 'November 15, 2024 at 7:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action:
      'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
    user: 'Paul Rudd',
    dateTime: 'November 16, 2024 at 12:35 AM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
    user: 'Paul Rudd',
    dateTime: 'November 15, 2024 at 7:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'You are added to a new room "SOFTWARE ENGINEERING 2".',
    user: 'Zander Miguel',
    dateTime: 'December 25, 2024 at 9:05 AM',
  },
  {
    avatar: (
      <PostAdd
        sx={{ color: '#47B753', borderRadius: '2em', fontSize: '2em' }}
      />
    ),
    action:
      'You posted a new announcement on your room "EMBEDDED PROGRAMMING".',
    user: 'Mark Andrei (You)',
    dateTime: 'December 14, 2024 at 3:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action:
      'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
    user: 'Paul Rudd',
    dateTime: 'November 16, 2024 at 12:35 AM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
    user: 'Paul Rudd',
    dateTime: 'November 15, 2024 at 7:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action:
      'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
    user: 'Paul Rudd',
    dateTime: 'November 16, 2024 at 12:35 AM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
    user: 'Paul Rudd',
    dateTime: 'November 15, 2024 at 7:05 PM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action:
      'Your student from "EMBEDDED PROGRAMMING" wrote a comment on your post.',
    user: 'Paul Rudd',
    dateTime: 'November 16, 2024 at 12:35 AM',
  },
  {
    avatar: <Avatar src={AvatarIcon} />,
    action: 'Your student from "EMBEDDED PROGRAMMING" submitted an Activity.',
    user: 'Paul Rudd',
    dateTime: 'November 15, 2024 at 7:05 PM',
  },
];

function Notification_viewall() {
  const { designs } = useStyle();
  const [value, setValue] = React.useState(0);
  // const [data, setData] = React.useState(null);
  React.useMemo(() => {
    axios.post('http://localhost:5000/');
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          padding: '0.8em 0em 0em 0em',
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
            startIcon={<ClearAll />}
            sx={{
              margin: '0em 0em 0.8em 0em',
              padding: '0em 1em',
              fontSize: '0.8em',
              fontWeight: '500',
              textTransform: 'none',
              backgroundColor: 'transparent',
              color: '#3F3D56',
              width: 'max-content',
              '&: hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            Clear Notifications
          </Button>
        </Box>

        <Tabs value={value} onChange={handleChange} sx={{ margin: '0em 1em' }}>
          <Tab label="General" disableRipple />
          <Tab label="Requests" disableRipple />
        </Tabs>
      </Box>

      {value === 1 && (
        <Box sx={designs.RequestContainer_Style}>
          <Requests />
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
                          width: 'auto',
                          flexGrow: 1,
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
                          width: 'auto',
                          height: 'auto',
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: '0.5em',
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
                            fontSize: '0.5em',
                            fontWeight: '500',
                            color: '#8E8E8E',
                            width: 'auto',
                          }}
                        >
                          {items.dateTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Box flexGrow={1} />

                    <Box sx={designs.GeneralContainer_Sub2_Style}>
                      {' '}
                      {items.avatar}
                    </Box>
                  </Box>
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
    </Container>
  );
}

export default Notification_viewall;
