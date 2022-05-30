import React, { useState } from "react";
import Dialogform from "../components/Dialogform";
import Input from "../components/Input";
import Dropdown from "../components/Drowpdown";
import usePost from "../customHooks/usePost";
import moment from "moment";
import axios from "axios";
import { Grid, Button, Typography } from "@mui/material";

const gradingsystems = [];

function Create_room({ open, close, maxWidth, state, socket, gs, setNewRoom }) {
  const [roomname, setRoomname] = useState("");
  const [course, setCourse] = useState("");
  const [classday, setClassDay] = useState("");
  const [yearAndSection, setYearandsection] = useState("");
  const [classtime, setClassTime] = useState("");
  const [gradingsystem, setGradingSystem] = useState("");

  const [roomnameError, setRoomnameError] = useState(false);
  const [gradingsystemError, setGradingSystemError] = useState(false);

  const handleChangeGradingSystem = (event) => {
    setGradingSystem(event.target.value);
  };
  const handleTime = (event) => {
    setClassTime(event.target.value);
  };
  React.useEffect(() => {
    gradingsystems.splice(0, gradingsystems.length);
    gs &&
      gs.map((item) => {
        gradingsystems.push({ value: item._id, label: item.GradingName });
      });
  }, []);

  const { post, data } = usePost();

  const handleSubmit = (event) => {
    event.preventDefault();
    setRoomnameError(false);
    setGradingSystemError(false);

    {
      roomname === "" && setRoomnameError(true);
    }
    {
      gradingsystem === "" && setGradingSystemError(true);
    }

    const room = {
      RoomName: roomname,
      Course: course,
      ClassDays: classday,
      yearAndSection,
      ClassTime: moment(`March 25,2022 ${classtime}`).format("h:mm a"),
      GradingSystem: gradingsystem,
    };

    if (roomname && gradingsystem) {
      axios
        .post("http://localhost:5000/rooms/create", {
          Host: {
            name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
              JSON.parse(localStorage.userData).data.user.lastName
            }`,
            avatar: JSON.parse(localStorage.userData).data.imageUrl,
          },
          userID: JSON.parse(localStorage.userData).data.user._id,
          gsID: gradingsystem,
          ...room,
          members: [JSON.parse(localStorage.userData).data.user._id],
        })
        .then((res) => {
          console.log(res.data);
          setNewRoom((prev) => !prev);
          if (res.data.status === "success") {
            state(false);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  return (
    <>
      <Dialogform
        title="Create your Room!"
        divider
        open={open}
        close={close}
        maxWidth={maxWidth}
        btn={
          <Button
            variant="contained"
            type="submit"
            form="form1"
            sx={{
              fontWeight: "600",
              boxShadow: "none",
            }}
          >
            Submit
          </Button>
        }
      >
        <Typography
          sx={{ ml: "2em", p: 0, fontColor: "gray", fontSize: "0.8em" }}
        >
          {`NOTE: Before creating a room you must have a grading system. Go to RECORDS > Grading System`}{" "}
        </Typography>
        <form onSubmit={handleSubmit} id="form1">
          <Grid
            container
            spacing={2}
            sx={{ padding: "1em 1.5em 0.5em 1.5em", overflow: "auto" }}
          >
            <Input
              autoFocus
              inputLabel="Room Name"
              placeholder="Enter room name..."
              autoComplete="off"
              value={roomname}
              onChange={(e) => setRoomname(e.target.value)}
              half
            />
            <Input
              inputLabel="Course"
              placeholder="Enter course..."
              autoComplete="off"
              required
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              half
            />
            <Input
              inputLabel="Class Day"
              placeholder="Enter class day..."
              autoComplete="off"
              required
              value={classday}
              onChange={(e) => setClassDay(e.target.value)}
              half
            />
            <Input
              inputLabel="Year and Section"
              placeholder="Enter year and section..."
              autoComplete="off"
              required
              value={yearAndSection}
              onChange={(e) => setYearandsection(e.target.value)}
              half
            />
            <Input
              inputLabel="Class time"
              autoComplete="off"
              value={classtime}
              onChange={handleTime}
              type="time"
              half
              required
            />
            <Dropdown
              inputLabel="Grading System"
              autoComplete="off"
              value={gradingsystem}
              error={gradingsystemError}
              typeerror="Please select grading system. If doesnt have one make sure to create in RECORDS tab."
              onChange={handleChangeGradingSystem}
              options={gradingsystems}
              half
            />
          </Grid>
        </form>
      </Dialogform>
    </>
  );
}

export default Create_room;
