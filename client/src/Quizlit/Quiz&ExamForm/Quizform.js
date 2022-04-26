import React, { useState } from 'react';

import { TextField, Box, Container, Grid, Input, Button } from '@mui/material';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from '../Styles/Quiz_multiplechoice_style';
import Questions from './Questions';

import { AddCircle } from '@mui/icons-material';
import usePost from '../../customHooks/usePost'
import axios from 'axios'
import Background11 from '../../assets/ImageJaven/Background11.png';

function Quizform() {
  const { post } = usePost();
  const counter = React.useRef(1);
  const { designs } = useStyle();
  const title = React.useRef('');
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
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        sx={{ margin: '0.5em 0em 2em 0em' }}
      >
        <Grid item container justifyContent="flex-end">
          <Grid item>
            {/* <CusButton
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
            /> */}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="Quiz-title"
            height="auto"
            width="100%"
            padding = "0.8em 1.5em 2.6em 1.5em"
            borderRadius = "0em 0em 0.5em 0.5em"
            sx = {{
              backgroundImage: `url(${Background11})`,
              backgroundSize: 'cover',
            }}
          >   
              <Input variant="standard"
                multiline
                rows={3}
                overflowY = "hidden"
                disableUnderline
                onChange={(event) => {
                  title.current = event.target.value
                }}
                defaultValue="Untitled Quiz"
                sx={{
                  overflowY: "hidden",
                  width: "60%",
                  backgroundColor: "transparent",
                  fontSize: "1.4em",
                  fontWeight: "600",
                  color: "white"
                }} />
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
        <Grid item xs={12} sx={{ marginBottom: '2em' }}>
          <Box sx = {{ display: "flex", alignItems: "center", width: "relative", height: "auto" }}>
          <Button
            variant="contained"
            startIcon={
              <AddCircle
                style={{
                  marginRight: '5px',
                }}
              />
            }
            sx={designs.Add_Question_Button_Style}
            type="submit"
            onClick={handleQuestionAdd}
          >
            Add Question
          </Button>
          <Box flexGrow = {1}/>
          <Button
            variant="contained"
            children="Create Quiz"
            sx={designs.CreateQuiz_Button_Style}
            id="quizform"
            onClick={() => {
                const questionPayload = []

                
                axios.post('http://localhost:5000/quizlit/create', {
                  author: {
                    userID: JSON.parse(localStorage.userData).data.user._id,
                    name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
                      JSON.parse(localStorage.userData).data.user.lastName
                    } `,
                  },
                  
                  title: title.current,
                  quizType: 'Quiz',
                  graded: false,
                }).then((res)=>{
                  questionMemo.current.forEach((item) => {
                    const { title, answerType, correctAnswer, points, timeLimit, questionsContent, media ,...answers } = item
                    questionPayload.push({ qAnswers: { ...answers }, answerType, correctAnswer, points, timeLimit,media, questionsContent,quizID: res.data.data})
                    console.log(questionPayload)
                  })
                  
                  post('http://localhost:5000/question/create', { questionPayload })
                }).catch(err=>console.log(err))
                
                
            }}/>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Quizform;
