import React from "react";
import { Divider, Box, Typography, Avatar, Button } from "@mui/material";
import useStyle from "../components/PopoverContent/Styles/Notificationpopover_style";
import axios from "axios";
import moment from "moment";
import RequestSent from "../assets/ImageJaven/RequestSent.png";

function RequestPopup({ items, setItems }) {
  const { designs } = useStyle();
  const [toggleAccept, setToggleAccept] = React.useState(false);

  React.useEffect(() => {
    axios
      .post("http://localhost:5000/requests", {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  }, [toggleAccept]);

  const handleAcceptRequest = (event, stdImage, stdName, stdID) => {
    axios
      .post("http://localhost:5000/records/create", {
        room: event.target.name,
        student: {
          stdID,
          name: stdName,
          image: stdImage,
        },
        gradingSystem: [],
        professor: {
          profID: JSON.parse(localStorage.userData).data.user._id,
          name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
            JSON.parse(localStorage.userData).data.user.lastName
          }`,
          image: JSON.parse(localStorage.userData).data.user.image,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));

    axios
      .post("http://localhost:5000/requests/accept", {
        roomID: event.target.name,
        memberID: stdID,
        reqID: event.target.nonce,
      })
      .then((res) => {
        setItems(res.data);
        setToggleAccept((prev) => !prev);
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteRequest = (event, element) => {
    axios
      .delete("http://localhost:5000/requests/decline", {
        data: { reqID: element },
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
                  <Avatar
                    src={element.requests.userImage.replace("blob:", "")}
                    alt=""
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "0.8em",
                      fontWeight: "600",
                      color: "#3F3D56",
                      width: "relative",
                    }}
                  >
                    {element.requests.userName}
                  </Typography>

                  <Box
                    sx={{
                      width: "relative",
                      height: "auto",
                      display: "flex",
                      gap: "0.5em",
                      flexWrap: "wrap",
                    }}
                  >
                    <Typography
                      children="is requesting to join your room"
                      sx={{
                        fontSize: "0.8em",
                        fontWeight: "500",
                        color: "#64627F",
                        width: "auto",
                        textTransform: "none",
                      }}
                    />

                    <Typography
                      children={`"${element.requests.RoomName}"`}
                      sx={{
                        fontSize: "0.8em",
                        fontWeight: "600",
                        color: "#64627F",
                        width: "auto",
                        textTransform: "Uppercase",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontSize: "0.7em",
                      fontWeight: "500",
                      color: "#8E8E8E",
                      width: "relative",
                    }}
                  >
                    {moment(element.createdAt).format("MMMM DD YYYY / h:mm a")}
                  </Typography>

                  <Box
                    sx={{
                      marginTop: "0.5em",
                      width: "relative",
                      height: "auto",
                      display: "flex",
                      gap: "1em",
                    }}
                  >
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "0.7em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        color: "white",
                        backgroundColor: "#0069D3",
                        padding: "0.1em 2em",
                        boxShadow: "none",
                        "&: hover": {
                          backgroundColor: "#005DC3",
                        },
                      }}
                      onClick={(event) =>
                        handleAcceptRequest(
                          event,
                          element.requests.userImage,
                          element.requests.userName,
                          element.requests.studentID
                        )
                      }
                      name={element.room}
                      nonce={element._id}
                    >
                      Accept
                    </Button>

                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "0.7em",
                        fontWeight: "600",
                        textTransform: "Capitalize",
                        color: "#3F3D56",
                        backgroundColor: "transparent",
                        padding: "0.1em 2em",
                        boxShadow: "none",
                        "&: hover": {
                          backgroundColor: "transparent",
                          boxShadow: "none",
                        },
                      }}
                      onClick={(event) => {
                        handleDeleteRequest(event, element._id);
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
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.8em",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={RequestSent}
            alt="Request Sent"
            style={{
              height: "7em",
              marginTop: "2em",
            }}
          />

          <Typography
            children="There is no request to show."
            sx={{
              fontSize: "0.9em",
              fontWeight: "600",
              color: "#3F3D56",
              marginRight: "1em",
            }}
          />
        </Box>
      )}
    </>
  );
}

export default RequestPopup;
