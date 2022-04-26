import React from 'react';
import { Divider, Box, Typography, Avatar, Button } from '@mui/material';
import useStyle from '../components/PopoverContent/Styles/Notificationpopover_style';
import axios from 'axios';
import moment from 'moment';

function RequestPopup() {
  const { designs } = useStyle();
  const [items, setItems] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/requests', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {items ? (
        items.map((element, index) => {
          return (
            <div key={index}>
              <Box sx={designs.RequestContainer_Sub_Style}>
                <Box sx={designs.RequestContainer_Sub2_Style}>
                  {' '}
                  <Avatar src={element.requests.userImage} alt="" />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: '600',
                      color: '#3F3D56',
                      width: 'relative',
                    }}
                  >
                    {element.requests.userName}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: '500',
                      color: '#64627F',
                      width: '24.4em',
                    }}
                  >
                    {`is requesting to join your room ${element.requests.RoomName}`}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '0.5em',
                      fontWeight: '500',
                      color: '#8E8E8E',
                      width: 'relative',
                    }}
                  >
                    {moment(element.createdAt).format('MMMM DD YYYY / h:mm a')}
                  </Typography>

                  <Box
                    sx={{
                      marginTop: '0.5em',
                      width: 'relative',
                      height: 'auto',
                      display: 'flex',
                      gap: '1em',
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: '0.7em',
                        fontWeight: '600',
                        textTransform: 'Capitalize',
                        color: 'white',
                        backgroundColor: '#0069D3',
                        padding: '0.1em 2em',
                        boxShadow: 'none',
                        '&: hover': {
                          backgroundColor: '#005DC3',
                        },
                      }}
                      onClick={(e) => {
                        console.log(e.target.nonce);
                        axios
                          .post('http://localhost:5000/requests/accept', {
                            roomID: e.target.name,
                            memberID: e.target.accessKey,
                            reqID: e.target.nonce,
                          })
                          .then((res) => {
                            setItems(res.data);
                            console.log(res.data);
                          })
                          .catch((err) => console.log(err));
                      }}
                      name={element.room}
                      accessKey={element.requests.studentID}
                      nonce={element._id}
                    >
                      Accept
                    </Button>

                    <Button
                      variant="contained"
                      sx={{
                        fontSize: '0.7em',
                        fontWeight: '600',
                        textTransform: 'Capitalize',
                        color: '#3F3D56',
                        backgroundColor: 'transparent',
                        padding: '0.1em 2em',
                        boxShadow: 'none',
                        '&: hover': {
                          backgroundColor: 'transparent',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      Decline
                    </Button>
                  </Box>
                </Box>
              </Box>
              <Divider sx={designs.RequestDivider_Style} />
            </div>
          );
        })
      ) : (
        <Box sx={designs.RequestContainer_Sub4_Style}>
          <Typography children="Have nothing to show" />
        </Box>
      )}
    </>
  );
}

export default RequestPopup;
