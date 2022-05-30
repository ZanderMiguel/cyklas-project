import React from "react";
import {
  Container,
  Grid,
  Tooltip,
  Box,
  Typography,
  Avatar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import AvatarIcon from "../../../../assets/ImageJaven/Avatar.png";
import QuizIcon from "../../../../assets/ImageJaven/QuizIcon.png";
import useStyle from "../../../Styles/View_quiz_style";
import QuizCheckMultiV2 from "./QuizCheckMultiV2";
import QuizCheckImageV2 from "./QuizCheckImageV2";
import QuizCheckTFV2 from "./QuizCheckTFV2";
import { WorkspacePremium } from "@mui/icons-material";

const dataRoom = [
  {
    value: "Embedded Programming",
    label: "Embedded Programming",
  },
  {
    value: "Software Engineering 2",
    label: "Software Engineering 2",
  },
];

const dataStudents = [
  {
    value: "Paul Rudd",
    label: "Paul Rudd",
  },
  {
    value: "Johan Liebert",
    label: "Johan Liebert",
  },
];

function ViewQuizV2() {
  const { designs } = useStyle();

  const [selectRoom, setRoom] = React.useState("");
  const handleChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  const [selectStudents, setStudents] = React.useState("");

  const handleChangeStudents = (event) => {
    setStudents(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ padding: "1em 0em" }}>
      <Box
        sx={{
          width: "100%",
          height: "auto",
          display: "flex",
          gap: "0.8em",
          alignItems: "center",
          marginBottom: "0.5em",
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: "auto",
          }}
        >
          <Tooltip title="Select Room" placement="top">
            <FormControl
              variant="standard"
              sx={{
                width: "relative",
                paddingTop: "0em",
                borderBottom: "1px solid #DBDBDB",
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={designs.InputLabelRoom_Style}
              >
                Room
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectRoom}
                onChange={handleChangeRoom}
                label="SelectRoom"
                disableUnderline
                sx={{
                  width: "100%",
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "#3F3D56",
                  border: "1px solid #DBDBDB",
                  backgroundColor: "white",
                  textTransform: "Uppercase",
                  borderRadius: "0.2em",
                  padding: "0.2em 0em 0.2em 0.6em",
                  "&: hover": {
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    transition: "all 300ms",
                  },
                }}
              >
                {dataRoom.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {" "}
                    {label}{" "}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
        </Box>

        <Box
          sx={{
            width: "auto",
            height: "auto",
          }}
        >
          <Tooltip title="Select Student" placement="top">
            <FormControl
              variant="standard"
              sx={{
                width: "relative",
                paddingTop: "0em",
                borderBottom: "1px solid #DBDBDB",
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={designs.InputLabelRoom_Style}
              >
                Students
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectStudents}
                onChange={handleChangeStudents}
                label="SelectStudents"
                disableUnderline
                sx={{
                  width: "100%",
                  fontSize: "0.9em",
                  fontWeight: "400",
                  color: "#3F3D56",
                  border: "1px solid #DBDBDB",
                  backgroundColor: "white",
                  textTransform: "none",
                  borderRadius: "0.2em",
                  padding: "0.2em 0em 0.2em 0.6em",
                  "&: hover": {
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                    transition: "all 300ms",
                  },
                }}
              >
                {dataStudents.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {" "}
                    {label}{" "}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Tooltip>
        </Box>
      </Box>

      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          gap: "0.5em",
          alignItems: "center",
          padding: "0.5em 1.1em 0.5em 0.9em",
          marginBottom: "0.5em",
          backgroundColor: "white",
          borderRadius: "0.3em",
        }}
      >
        <Avatar
          src={AvatarIcon}
          alt="Avatar"
          sx={{ height: "2.5em", width: "2.5em" }}
        />

        <Box
          sx={{
            width: "auto",
            flexGrow: 1,
            height: "auto",
          }}
        >
          <Typography
            children="Armin Arlert"
            sx={{
              color: "#3F3D56",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "none",
              width: "auto",
              height: "max-content",
            }}
          />

          <Box
            sx={{
              width: "auto",
              height: "auto",
              display: "flex",
              gap: "0.3em",
              alignItems: "center",
            }}
          >
            <WorkspacePremium sx={{ color: "#FBC112" }} />

            <Typography
              children="1st place"
              sx={{
                color: "#8E8E8E",
                fontSize: "0.7em",
                fontWeight: "500",
                textTransform: "none",
                width: "auto",
                height: "max-content",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: "0.8em",
            alignItems: "center",
            width: "auto",
            height: "auto",
          }}
        >
          <Typography
            children="Score:"
            sx={{
              color: "#8E8E8E",
              fontSize: "0.8em",
              fontWeight: "600",
              textTransform: "Uppercase",
              width: "auto",
              height: "max-content",
            }}
          />

          <Typography
            children="100 / 100"
            sx={{
              color: "#007FFF",
              fontSize: "0.8em",
              fontWeight: "700",
              textTransform: "Uppercase",
              width: "auto",
              height: "max-content",
            }}
          />
        </Box>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "white",
          padding: "0.8em 1em",
          borderRadius: "0.3em",
          display: "flex",
          alignItems: "center",
          margin: "0em 0em 0.5em 0em",
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            height: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.8em",
              alignItems: "center",
              marginBottom: "0.5em",
            }}
          >
            <img
              src={QuizIcon}
              alt="Quiz Icon"
              style={{
                height: "2em",
              }}
            />

            <Typography
              children="Untitled Quiz"
              sx={{
                flexGrow: "1",
                fontSize: "1.3em",
                fontWeight: "600",
                color: "#3F3D56",
                height: "max-content",
              }}
            />
          </Box>
        </Box>
      </Grid>

      <QuizCheckMultiV2 />
      <QuizCheckImageV2 />
      <QuizCheckTFV2 />
    </Container>
  );
}

export default ViewQuizV2;
