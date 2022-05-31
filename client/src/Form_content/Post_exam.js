import React, { useState } from "react";
import Dialogform from "../components/Dialogform";

import moment from 'moment'
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  Checkbox,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import Datepicker from "../components/DatePicker";
import ExamIconButton from "../assets/ImageJaven/ExamIconButton.png";
import useStyle from "./Styles/Post_exam_style";
import axios from "axios";


const dataTimeLimit = [
  {
    value: "10 seconds",
    label: "10 seconds",
  },
  {
    value: "30 minutes",
    label: "30 minutes",
  },
  {
    value: "45 minutes",
    label: "45 minutes",
  },
  {
    value: "1 hour",
    label: "1 hour",
  },
  {
    value: "2 hours",
    label: "2 hours",
  },
];
function Post_exam({
  open,
  close,
  maxWidth,
  questionMemo,
  exam,
  counter,
  itemCount,
  toast
}) {
  const { designs } = useStyle();

  const [selectRoom, setSelectRoom] = useState("");
  const [duedate, setDueDate] = useState(null);
  const [gsData, setGSData] = useState(null);
  const handleChangeRoom = (event) => {
    setSelectRoom(event.target.value);
  };

  const [selectCourseYearSec, setSelectCourseYearSec] = useState("");

  const handleChangeCourseYearSec = (event) => {
    setSelectCourseYearSec(event.target.value);
  };

  const [selectStudent, setSelectStudent] = useState("");

  const handleChangeStudent = (event) => {
    setSelectStudent(event.target.value);
  };

  const [selectTerm, setSelectTerm] = useState("");

  const handleChangeTerm = (event) => {
    setSelectTerm(event.target.value);
  };

  const [selectDueDate, setSelectDueDate] = useState("");

  const handleChangeDueDate = (event) => {
    setSelectDueDate(event.target.value);
  };

  const [selectTimeLimit, setSelectTimeLimit] = useState("");
  const handleChangeTimeLimit = (event) => {
    setSelectTimeLimit(event.target.value);
  };
  const handleClickSave = (type) => {
    const questionPayload = [];
    axios
      .post("http://localhost:5000/quizlit/create", {
        author: {
          userID: JSON.parse(localStorage.userData).data.user._id,
          name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
            JSON.parse(localStorage.userData).data.user.lastName
          } `,
        },
        rooms: [roomId.current],
        dueDate: "unavailable",
        timeLimit: selectTimeLimit,
        students: "unavailable",
        title: exam.current.title,
        instruction: exam.current.instruction,
        quizType: "Exam",
        graded: false,
        type,
        gsCategory: selectTerm,
      })
      .then( ( res ) =>
      {
        questionMemo.current.forEach((item) => {
          console.log(item);
          const {
            answerType,
            correctAnswer,
            points,
            questionsContent,
            media,
            ...others
          } = item;

          questionPayload.push({
            qAnswers: { ...others },
            quizID: res.data.data,
            answerType,
            correctAnswer,
            points,
            questionsContent,
            media,
          });
        });
        axios
          .post("http://localhost:5000/question/create", {
            questionPayload,
          })
          .then( ( res ) =>
          {
            toast.success('You have created and post an Exam', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
              });
            console.log(questionPayload);
            questionMemo.current = [{}];
            counter.current = 0;
            close();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  let point = 0;
  questionMemo.current.forEach((item) => {
    point += parseInt(item.points.replace(" point", ""));
  });
  const [dataRoom, setDataRoom] = React.useState(null);
  React.useMemo(() => {
    axios
      .post("http://localhost:5000/rooms", {
        userID: JSON.parse(localStorage.userData).data.user._id,
      })
      .then((res) => {
        setDataRoom(res.data);
      });
  }, []);
  const roomId = React.useRef(null);
  return (
    <div>

      <Dialogform
        divider
        open={open}
        close={close}
        fullWidth
        maxWidth={maxWidth}
        title="Post exam to this room/ class"
        btn={
          <Box
            sx={{
              display: "flex",
              gap: "1em",
              height: "auto",
              width: "relative",
            }}
          >
            <Button
              variant="contained"
              startIcon={<Save />}
              onClick={() => {
                handleClickSave(null);
              }}
              sx={{
                border: "1px solid #007FFF",
                backgroundColor: "transparent",
                boxShadow: "none",
                color: "#007FFF",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                padding: "0.3em 3em",
                "&: hover": {
                  border: "1px solid #0072ED",
                  backgroundColor: "transparent",
                  boxShadow: "none",
                },
              }}
            >
              Save Exam
            </Button>

            <Button
              variant="contained"
              onClick={() => {
                handleClickSave("quizlit");
              }}
              startIcon={
                <img
                  src={ExamIconButton}
                  alt="examicon"
                  style={{ height: "0.7em", width: "0.7em" }}
                />
              }
              sx={{
                backgroundColor: "#49B854",
                color: "white",
                fontSize: "0.8em",
                fontWeight: "600",
                textTransform: "Capitalize",
                padding: "0.3em 3em",
                boxShadow: "none",
                "&: hover": {
                  backgroundColor: "#31B13E",
                },
              }}
            >
              Post Exam
            </Button>
          </Box>
        }
      >
        <Grid container sx={{ p: "0em 1.5em" }}>
          {/* <Grid item xs={12}>
            <Typography
              sx={{
                color: "#3F3D56",
                fontSize: "1.2em",
                fontWeight: "600",
                height: "max-content",
                width: "40em",
              }}
            >
              Post exam to this room/ class?
            </Typography>
          </Grid> */}

          <Grid item xs={6} sx={{ marginTop: "1em" }}>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                color: "#3F3D56",
                fontSize: "0.8em",
                margin: "0em 0em 0.3em 0em",
              }}
            >
              Select Room
            </Typography>

            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectRoom}
              onChange={handleChangeRoom}
              disableUnderline
              fullWidth
              sx={{
                height: "2.8em",
                fontSize: "0.9em",
                color: "#3F3D56",
                fontWeight: 500,
                paddingTop: "0em",
                paddingBottom: "0em",
                marginBottom: "0.8em",
              }}
            >
              {dataRoom &&
                dataRoom.map((value, index) => {
                  return (
                    <MenuItem
                      key={index}
                      value={value}
                      accessKey={value._id}
                      onClick={(e) => {
                        roomId.current = e.target.accessKey;
                        axios
                          .post("http://localhost:5000/gradingSystem/record", {
                            roomID: e.target.accessKey,
                          })
                          .then((res) => {
                            setGSData(res.data[0].Category);
                            console.log(res.data);
                          })
                          .catch((err) => console.log(err));
                      }}
                    >
                      {value.RoomName}
                    </MenuItem>
                  );
                })}
            </Select>

            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                color: "#3F3D56",
                fontSize: "0.8em",
                margin: "0em 0em 0.3em 0em",
              }}
            >
              Select Course Year and Section
            </Typography>

            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectCourseYearSec}
              onChange={handleChangeCourseYearSec}
              disableUnderline
              fullWidth
              sx={{
                height: "2.8em",
                fontSize: "0.9em",
                color: "#3F3D56",
                fontWeight: 500,
                paddingTop: "0em",
                paddingBottom: "0em",
                marginBottom: "0.8em",
              }}
            >
              {dataRoom &&
                dataRoom.map((value, index) => {
                  return (
                    <MenuItem key={index} value={value}>
                      {" "}
                      {value.Course} {value.yearAndSection}
                    </MenuItem>
                  );
                })}
            </Select>

            {/* <FormControl
              variant="standard"
              sx={{
                width: '100%',
                paddingTop: '0em',
                marginBottom: '0.8em',
              }}
            >
              <InputLabel
                id="demo-simple-select-standard-label"
                sx={{
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  textTransform: 'Capitalize',
                }}
              >
                Select Students
              </InputLabel>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectStudent}
                onChange={handleChangeStudent}
                label="SelectStudent"
                disableUnderline
                sx={{
                  width: '100%',
                  fontSize: '0.9em',
                  fontWeight: '500',
                  color: '#3F3D56',
                  borderBottom: '1px solid #DBDBDB',
                  '&: hover': {
                    borderBottom: '1px solid #007FFF',
                    transition: 'all 300ms',
                  },
                }}
              >
                {dataStudent.map(({ value, label }) => (
                  <MenuItem key={value} value={value}>
                    {' '}
                    {label}{' '}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}

            <Typography
              variant="body1"
              sx={{
                fontWeight: "500",
                color: "#3F3D56",
                fontSize: "0.8em",
                margin: "0em 0em 0.3em 0em",
              }}
            >
              Set Time Limit
            </Typography>

            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={selectTimeLimit}
              onChange={handleChangeTimeLimit}
              disableUnderline
              fullWidth
              sx={{
                height: "2.8em",
                fontSize: "0.9em",
                color: "#3F3D56",
                fontWeight: 500,
                paddingTop: "0em",
                paddingBottom: "0em",
                marginBottom: "0.8em",
              }}
            >
              {dataTimeLimit.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {" "}
                  {label}{" "}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={6} sx={{ marginTop: "1em" }}>
            <Box sx={{ width: "relative", height: "auto", paddingLeft: "2em" }}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  color: "#3F3D56",
                  fontSize: "0.8em",
                  margin: "0em 0em 0.3em 0em",
                }}
              >
                Select Category
              </Typography>

              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectTerm}
                onChange={handleChangeTerm}
                disableUnderline
                fullWidth
                sx={{
                  height: "2.8em",
                  fontSize: "0.9em",
                  color: "#3F3D56",
                  fontWeight: 500,
                  paddingTop: "0em",
                  paddingBottom: "0em",
                  marginBottom: "0.8em",
                }}
              >
                {gsData &&
                  gsData.map((item, index) => (
                    <MenuItem key={index} value={Object.entries(item)[0][0]}>
                      {Object.entries(item)[0][0]}
                    </MenuItem>
                  ))}
              </Select>
              {/* 
              <FormControl
                variant="standard"
                sx={{
                  width: '100%',
                  paddingTop: '0em',
                  marginBottom: '0.8em',
                }}
              >
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    textTransform: 'Capitalize',
                  }}
                >
                  Set Due Date
                </InputLabel>styled

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectDueDate}
                  onChange={handleChangeDueDate}
                  label="SelectDueDate"
                  disableUnderline
                  sx={{
                    width: '100%',
                    fontSize: '0.9em',
                    fontWeight: '500',
                    color: '#3F3D56',
                    borderBottom: '1px solid #DBDBDB',
                    '&: hover': {
                      borderBottom: '1px solid #007FFF',
                      transition: 'all 300ms',
                    },
                  }}
                >
                  {dataDueDate.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {' '}
                      {label}{' '}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> */}
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "500",
                  color: "#3F3D56",
                  fontSize: "0.8em",
                  margin: "0em 0em 0.3em 0em",
                }}
              >
                Due Date
              </Typography>

              <Datepicker duedate={duedate} setDueDate={setDueDate} />
            </Box>
          </Grid>

          <Grid container rowSpacing={1}>
            <Grid item xs={12} sx={designs.ExamTake_GridItem_Style}>
              <Typography sx={designs.ExamName_Typography_Style}>
                {exam.current.title}
              </Typography>

              <Box className="container" sx={designs.Container_Style}>
                <Typography sx={designs.Instructions_Typography_Style}>
                  {exam.current.instruction}
                </Typography>

                <Divider sx={designs.Divider_Style} />

                <Box className="Exam-details" sx={designs.Exam_Details_Style}>
                  <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item md={2} sm={6} xs={12}>
                      <Typography sx={designs.Items_Typography_Style}>
                        {itemCount} items
                      </Typography>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Box className="Points" sx={designs.Points_Style}>
                        <Typography sx={designs.OverallPoints_Typography_Style}>
                          Overall Points:
                        </Typography>

                        <Typography sx={designs.Points_Typography_Style}>
                          {point} points
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item md={4} sm={6} xs={12}>
                      <Box className="DueDate" sx={designs.DueDate_Style}>
                        <Typography sx={designs.DueDate_Typography_Style}>
                          Due Date:
                        </Typography>

                        <Typography sx={designs.Date_Typography_Style}>
                        {duedate && moment(duedate).format('ll')}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={3} sm={6} xs={12}>
                      <Box className="TimeLimit" sx={designs.TimeLimit_Style}>
                        <Typography sx={designs.TimeLimit_Typography_Style}>
                          Time Limit:
                        </Typography>

                        <Typography sx={designs.Time_Typography_Style}>
                          {selectTimeLimit}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography
              sx={{
                color: "#3F3D56",
                fontSize: "0.8em",
                fontWeight: "600",
                height: "max-content",
                width: "40em",
              }}
            >
              This exam will:
            </Typography>
          </Grid>

          <Box className="Required-button" sx={designs.Required_Button_Style}>
            <Checkbox sx={designs.Required_Checkbox_Style} />
            <Typography sx={designs.Required_Typography_Style}>
              Restrict students in submitting the exam many times.
            </Typography>
          </Box>
        </Grid>
      </Dialogform>
    </div>
  );
}

export default Post_exam;
