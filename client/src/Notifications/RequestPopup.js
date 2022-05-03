import React from 'react';
import { Divider, Box, Typography, Avatar, Button } from '@mui/material';
import useStyle from '../components/PopoverContent/Styles/Notificationpopover_style';
import axios from 'axios';
import moment from 'moment';
import Nodata from "../assets/ImageJaven/Nodata.png";

function RequestPopup() {
  const { designs } = useStyle();
  const [items, setItems] = React.useState(null);
  const [toggleAccept, setToggleAccept] = React.useState(false);

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/requests', {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, [toggleAccept]);

  const handleAcceptRequest = (event) => {
    axios
      .post('http://localhost:5000/requests/accept', {
        roomID: event.target.name,
        memberID: event.target.accessKey,
        reqID: event.target.nonce,
      })
      .then((res) => {
        setItems(res.data);
        setToggleAccept((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {items &&
        items.length > 0 &&
        items.map((element, index) => {
          return (
            <div key={index}>
              <Box sx={designs.RequestContainer_Sub_Style}>
                <Box sx={designs.RequestContainer_Sub2_Style}>
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
                  
                  <Box 
                  sx = {{ 
                    width: "relative",
                    height: "auto",
                    display: "flex",
                    gap: "0.5em",
                    flexWrap: "wrap"
                  }}>
                    <Typography children = "is requesting to join your room"
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: '500',
                      color: '#64627F',
                      width: 'auto',
                      textTransform: "none"
                    }}/>

                    <Typography children = {`"${element.requests.RoomName}"`}
                    sx={{
                      fontSize: '0.8em',
                      fontWeight: '600',
                      color: '#64627F',
                      width: 'auto',
                      textTransform: "Uppercase"
                    }}/>
                  </Box>
                  
                  <Typography
                    sx={{
                      fontSize: '0.7em',
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
                      onClick={(event) => handleAcceptRequest(event)}
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
        })}
      {items && items.length === 0 && (
        <Box 
        sx = {{ 
          display: "flex",
          flexDirection: "column",
          gap: "0.8em",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Box sx = {{
            height: "7em",
            width: "7em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "8em",
            backgroundColor: "#F3F3F3",
            margin: "1em 1em 0em 0em"
          }}>
             <img src = {Nodata} alt = "No Data" 
            style = {{ 
              height: "8em"
            }}/>
          </Box>
         
          <Typography children = "There is no request to show."
          sx = {{ 
            fontSize: "0.8em",
            fontWeight: "600",
            color: "#3F3D56",
            marginRight: "1em"
          }}/>
        </Box>
      )}
    </>
  );
}

export default RequestPopup;
