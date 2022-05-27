import React, { useState } from 'react';
import {
  Box,
  Typography,
  Checkbox,
  Container,
  Grid,
  FormControlLabel,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
} from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ExamIcon from '../../../assets/ImageJaven/ExamIcon.png';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import SelectRoom from './SelectRoom';
import StudentsList from './StudentsList';
import CheckAnswers from './CheckAnswers';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import AvatarIcon from '../../../assets/ImageJaven/Avatar.png';

const dataSort = [
  {
    value: 'First Name',
    label: 'First Name',
  },
  {
    value: 'Last Name',
    label: 'Last Name',
  },
  {
    value: 'Submitted',
    label: 'Submitted',
  },
  {
    value: 'Graded',
    label: 'Graded',
  },
];

function View_exam() {
  const { designs } = useStyle();
  const [selectSort, setSort] = useState('');
  const [data, setData] = useState(null);
  const { examID } = useParams();
  const [quizData, setQuizData] = useState(null);
  const [stdID, setStdID] = useState(null);
  const [score, setScore] = useState(0);
  const [overAll, setOverAll] = useState(0);
  const stdScore = React.useRef({});
  const shrtAns = React.useRef({});
  const [dataRoom, setDataRoom] = React.useState(null);
  const scores = React.useRef([]);
  const [selectRoom, setRoom] = useState( '' );
  const [examreturn, setExamReturn]  = useState(null)
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/quizlit', {
        quizID: examID,
      })
      .then((res) => {
        setQuizData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  React.useMemo(() => {
    setScore(0);
    setOverAll(0);
  }, [stdID]);
  document.getElementById(`${stdID}`) &&
    (document.getElementById(`${stdID}`).innerHTML = `${Math.round(
      (score / overAll) * 100
    )}%`.replace('NaN%', 'Missing'));

  return (
    <Container maxWidth="lg">
      <ToastContainer/>
      <Grid container columnSpacing={1}>
        <Grid item xs={4} sx={{ margin: '0.5em 0em' }}>
          <Button
            onClick={() => {
              axios
                .post('http://localhost:5000/records/return-grade', {
                  roomID: selectRoom,
                  userID: JSON.parse(localStorage.userData).data.user._id,
                  examID,
                  scores: scores.current,
                  stdID,
                })
                .then( ( res ) => 
                    {if ( res ) {
                  setExamReturn(
                    toast.success( "Successfuly return", {
                      position: toast.POSITION.TOP_CENTER,
                    } ) )
                }})
                .catch((err) => console.log(err));
            }}
            sx={designs.Return_Button_Style}
          >
            Return
          </Button>
        </Grid>
        <SelectRoom
          selectRoom={selectRoom}
          setRoom={setRoom}
          setData={setData}
          dataRoom={dataRoom}
          setDataRoom={setDataRoom}
        />
        <Grid item xs={4} sx={{ paddingRight: '0.8em' }}>
          <Box className="Student-list" sx={designs.Student_List_Style}>
            <Box className="Sort-container" sx={designs.Sort_Container_Style}>
              <FormControlLabel
                control={<Checkbox sx={designs.AllStudent_Checkbox_Style} />}
                label="All Students"
                sx={designs.AllStudentLabel_Checkbox_Style}
              />

              <Box sx={designs.FlexGrow_Box_Style} />

              <FormControl variant="standard" sx={designs.FormControl_Style}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={designs.InputLabel_Style}
                >
                  Sort by
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectSort}
                  onChange={handleChangeSort}
                  label="SelectSort"
                  disableUnderline
                  sx={designs.Select_Style}
                >
                  {dataSort.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Divider sx={designs.Divider_Style} />

            <Box
              className="Student-container"
              sx={designs.Student_Container_Style}
            >
              {data &&
                data.map(function (items, index) {
                  return (
                    <div key={index}>
                      {items.userType === 'Student' && (
                        <StudentsList
                          scores={scores}
                          items={items}
                          setStdID={setStdID}
                        />
                      )}
                    </div>
                  );
                })}
            </Box>
          </Box>
        </Grid>

        <Grid item md={8} sm={12}>
          <Box
            className="Right-container"
            sx={{
              width: '100%',
              height: 'auto',
              paddingBottom: '1em',
              backgroundColor: 'transparent',
            }}
          >
            <Grid
              item
              xs={12}
              sx={{
                display: 'flex',
                gap: '0.5em',
                alignItems: 'center',
                padding: '0.5em 0.8em 0.5em 0.5em',
                marginBottom: '0.5em',
                backgroundColor: 'white',
              }}
            >
              <Avatar src={AvatarIcon} alt="Avatar" />

              <Box
                sx={{
                  width: 'auto',
                  flexGrow: 1,
                  height: 'auto',
                }}
              >
                <Typography
                  children="Armin Arlert"
                  // children={`${quizData && quizData.author.name}`}
                  sx={{
                    color: '#3F3D56',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    textTransform: 'none',
                    width: 'auto',
                    height: 'max-content',
                  }}
                />

                <Typography
                  children="submitted this exam on May 10, 2022 / 5:02 PM"
                  // children={`created this exam on ${
                  //   quizData &&
                  //   moment(quizData.createdAt).format('MMMM DD YYYY / h:mm a')
                  // }`}
                  sx={{
                    color: '#8E8E8E',
                    fontSize: '0.7em',
                    fontWeight: '500',
                    textTransform: 'none',
                    width: 'auto',
                    height: 'max-content',
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  gap: '0.8em',
                  alignItems: 'center',
                  width: 'auto',
                  height: 'auto',
                }}
              >
                <Typography
                  children="Score:"
                  sx={{
                    color: '#8E8E8E',
                    fontSize: '0.8em',
                    fontWeight: '600',
                    textTransform: 'Uppercase',
                    width: 'auto',
                    height: 'max-content',
                  }}
                />

                <Typography
                  children={`${score} / ${overAll}`}
                  sx={{
                    color: '#007FFF',
                    fontSize: '0.8em',
                    fontWeight: '700',
                    textTransform: 'Uppercase',
                    width: 'auto',
                    height: 'max-content',
                  }}
                />
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                backgroundColor: 'white',
                padding: '0.8em 1em',
                borderRadius: '0.3em',
                display: 'flex',
                alignItems: 'center',
                margin: '0em 0em 0.8em 0em',
              }}
            >
              <Box
                sx={{
                  flexGrow: 1,
                  height: 'auto',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: '0.8em',
                    alignItems: 'center',
                    marginBottom: '0.5em',
                  }}
                >
                  <img
                    src={ExamIcon}
                    alt="Exam Icon"
                    style={{
                      height: '2em',
                    }}
                  />

                  <Typography
                    children={quizData && quizData.title}
                    sx={{
                      flexGrow: '1',
                      fontSize: '1.3em',
                      fontWeight: '600',
                      color: '#3F3D56',
                      height: 'max-content',
                    }}
                  />
                </Box>

                <Typography
                  children={quizData && quizData.instruction}
                  sx={{
                    flexGrow: '1',
                    fontSize: '0.8em',
                    fontWeight: '400',
                    color: '#8E8E8E',
                    textTransform: 'none',
                    height: 'max-content',
                    paddingBottom: '1.5em',
                  }}
                />
              </Box>
            </Grid>

            {stdID && quizData && (
              <CheckAnswers
                shrtAns={shrtAns}
                stdScore={stdScore}
                quizID={quizData._id}
                stdID={stdID}
                setScore={setScore}
                setOverAll={setOverAll}
              />
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default View_exam;
