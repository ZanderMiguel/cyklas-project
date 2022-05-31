import React, { useState } from "react";

import { TextField, Box, Container, Grid, Input, Button } from "@mui/material";
import CusButton from "../../components/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import useStyle from "../Styles/Quiz_multiplechoice_style";
import Questions from "./Questions";

import { Add } from "@mui/icons-material";
import usePost from "../../customHooks/usePost";
import axios from "axios";
import Background11 from "../../assets/ImageJaven/Background11.png";
import QuizIconButton from "../../assets/ImageJaven/QuizIconButton.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Quizform() {
  const { post } = usePost();
  const counter = React.useRef(1);
  const { designs } = useStyle();
  const title = React.useRef("");
  const questionMemo = React.useRef([{}]);
  const [qArray, setQArray] = useState([
    <Questions counter={counter.current} questionMemo={questionMemo} />,
  ]);
  const handleQuestionAdd = () => {
    counter.current = counter.current + 1;
    setQArray([
      ...qArray,
      <Questions counter={counter.current} questionMemo={questionMemo} />,
    ]);
  };

  return (
    <>
      <ToastContainer />
      <Container maxWidth="md" sx={{ padding: "2em 0em" }}>
        <Grid
          container
          justifyContent="center"
          rowSpacing={1}
          sx={{ margin: "0.5em 0em 2em 0em" }}
        >
          {/* <Grid item container justifyContent="flex-end">
            <Grid item>
              <CusButton
              variant="contained"
              content="Create Quiz"
              id="quizform"
              onClick={() => {
                const questionPayload = [];

                axios
                  .post('http://localhost:5000/quizlit/create', {
                    author: {
                      userID: JSON.parse(localStorage.userData).data.user._id,
                      name: `${
                        JSON.parse(localStorage.userData).data.user.firstName
                      } ${
                        JSON.parse(localStorage.userData).data.user.lastName
                      } `,
                    },

                    title: title.current,
                    quizType: 'Quiz',
                    graded: false,
                  })
                  .then((res) => {
                    questionMemo.current.forEach((item) => {
                      const {
                        title,
                        answerType,
                        correctAnswer,
                        points,
                        timeLimit,
                        questionsContent,
                        media,
                        ...answers
                      } = item;
                      questionPayload.push({
                        qAnswers: { ...answers },
                        answerType,
                        correctAnswer,
                        points,
                        timeLimit,
                        media,
                        questionsContent,
                        quizID: res.data.data,
                      });
                      console.log(questionPayload);
                    });

                    post('http://localhost:5000/question/create', {
                      questionPayload,
                    });
                  })
                  .catch((err) => console.log(err));
              }}
              sx={{
                textDecoration: 'none',
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#43a047',
                },
              }}
              startIcon={
                <AddCircleIcon sx={{ color: 'white', fontSize: '2rem' }} />
              }
            />
            </Grid>
          </Grid> */}

          <Grid item xs={12}>
            <Box
              className="Quiz-title"
              height="auto"
              width="100%"
              marginBottom="0.8em"
              padding="0.3em 1.1em 1.5em 1.1em"
              borderRadius="0.3em 0.3em 0em 0em"
              sx={{
                backgroundImage: `url(${Background11})`,
                backgroundSize: "cover",
                "&: hover": {
                  transition: "all 250ms",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                },
              }}
            >
              <Input
                variant="standard"
                multiline
                rows={3}
                overflowY="hidden"
                disableUnderline
                onChange={(event) => {
                  title.current = event.target.value;
                }}
                defaultValue="Untitled Quiz"
                sx={{
                  overflowY: "hidden",
                  width: "60%",
                  backgroundColor: "transparent",
                  fontSize: "1.3em",
                  fontWeight: "600",
                  color: "white",
                }}
              />
              {/* <TextField
                id="filled-basic"
                placeholder="Untitled Quiz"
                variant="filled"
                sx={{
                  border: "1px solid black",
                  width: '50%',
                  margin: "0em 0em 0em 1em",
                  height: 'auto',
                  backgroundColor: 'transparent',
                }}
                inputProps={{
                  style: {
                    height: '0px',
                    fontSize: '1em',
                    color: 'white',
                    marginBottom: "0.5em",
                    fontWeight: 500,
                  },
                }}
                InputProps={{ disableUnderline: true }}
                autoComplete="off"
                name="title"
                onChange={(event) => {
                  title.current = event.target.value;
                }}
              /> */}

              {/* <Box
              className="Instructions"
              width="relative"
              height="auto"
              padding="0.5em 2em"
              backgroundColor="#FDFDFD"
            >
              <Input
                variant="standard"
                multiline
                fullWidth
                rows={6}
                disableUnderline
                placeholder="Write quiz instructions here..."
                sx={designs.Instruction_Input_Style} />
            </Box> */}
            </Box>
          </Grid>

          {qArray.map((item, index) => {
            return (
              <Grid item xs={12} key={index}>
                {item}
              </Grid>
            );
          })}
          <Grid item xs={12} sx={{ marginBottom: "2em" }}>
            <Button
              variant="contained"
              startIcon={
                <Add
                  style={{
                    marginRight: "5px",
                  }}
                />
              }
              type="submit"
              onClick={handleQuestionAdd}
              sx={{
                fontSize: "0.8em",
                fontWeight: "600",
                color: "#white",
                textTransform: "Capitalize",
                boxShadow: "none",
                padding: "0.4em 1.3em",
                "&: hover": {
                  boxShadow: "none",
                },
              }}
            >
              Add Question
            </Button>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              borderTop: "1px solid #DBDBDB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              children="Create Quiz"
              id="quizform"
              sx={{
                marginTop: "1em",
                paddingRight: "1.5em",
                paddingLeft: "1.5em",
                fontWeight: "600",
                textDecoration: "none",
                backgroundColor: "#4caf50",
                color: "white",
                "&:hover": {
                  backgroundColor: "#43a047",
                },
              }}
              startIcon={
                <img
                  src={QuizIconButton}
                  alt="Quiz Icon Button"
                  style={{ height: "1em" }}
                />
              }
              onClick={() => {
                const questionPayload = [];

                axios
                  .post("http://localhost:5000/quizlit/create", {
                    author: {
                      userID: JSON.parse(localStorage.userData).data.user._id,
                      name: `${
                        JSON.parse(localStorage.userData).data.user.firstName
                      } ${
                        JSON.parse(localStorage.userData).data.user.lastName
                      } `,
                    },

                    title: title.current,
                    quizType: "Quiz",
                    graded: false,
                  })
                  .then((res) => {
                    toast.success("Quiz is successfully created.", {
                      position: "top-left",
                      autoClose: 5000,
                      hideProgressBar: true,
                      closeOnClick: true,
                      pauseOnHover: false,
                      draggable: true,
                      progress: undefined,
                    });
                    questionMemo.current.forEach((item) => {
                      const {
                        title,
                        answerType,
                        correctAnswer,
                        points,
                        timeLimit,
                        questionsContent,
                        media,
                        ...answers
                      } = item;
                      questionPayload.push({
                        qAnswers: { ...answers },
                        answerType,
                        correctAnswer,
                        points,
                        timeLimit,
                        media,
                        questionsContent,
                        quizID: res.data.data,
                      });
                      console.log(questionPayload);
                    });

                    post("http://localhost:5000/question/create", {
                      questionPayload,
                    });
                  })
                  .catch((err) => console.log(err));
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Quizform;
