import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useStyle from './Styles/Notifications_viewall_style';
import axios from 'axios';
import moment from 'moment';

function Requests() {
  const { designs } = useStyle();
  const [items, setItems] = React.useState(null);

  React.useEffect(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/requests', {
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
            <Box sx={designs.RequestContainer_Sub_Style} key={index}>
              <Box sx={designs.RequestContainer_Sub2_Style}>
                <img src={element.requests.userImage} alt="" />
              </Box>

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
                  {element.requests.userName}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.8em',
                    fontWeight: '500',
                    color: '#64627F',
                    width: 'auto',
                    flexGrow: 1,
                  }}
                >
                  {`is requesting to join your room ${element.requests.RoomName}`}
                </Typography>

                <Typography
                  sx={{
                    fontSize: '0.5em',
                    fontWeight: '500',
                    color: '#8E8E8E',
                    width: 'auto',
                    flexGrow: 1,
                  }}
                >
                  {moment(element.createdAt).format('MMMM DD YYYY / h:mm a')}
                </Typography>

                <Box
                  sx={{
                    flexGrow: 1,
                    marginTop: '0.5em',
                    width: 'auto',
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
          );
        })
      ) : (
        <Box sx={designs.RequestContainer_Sub4_Style}>
          <Typography children="have nothing to show" />
        </Box>
      )}
    </>
  );
}

export default Requests;
