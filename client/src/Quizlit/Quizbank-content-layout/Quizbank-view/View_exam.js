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
} from '@mui/material';
import ExamIcon from '../../../assets/ImageJaven/ExamIcon.png';
import useStyle from '../../Styles/View_exam_style';
import '../../Styles/View_quiz_stylesheet.css';
import SelectRoom from './SelectRoom'
import StudentsList from './StudentsList';
import CheckAnswers from './CheckAnswers';
import { useParams } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
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
  const [data, setData] = useState(null)
  const { examID } = useParams()
  const [quizData, setQuizData] = useState(null)
  const [stdID, setStdID] = useState(null)
  const [score, setScore] = useState(0)
  const [overAll, setOverAll] = useState(0)
  const stdScore = React.useRef({})
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };
  React.useMemo(() => {
    axios.post('http://localhost:5000/quizlit', { quizID: examID })
      .then((res) => {
        setQuizData(res.data)

      })
      .catch(err => console.log(err))
  }, [])
  React.useMemo(()=>{
    setScore(0)
    setOverAll(0)
    console.log('tanginamo')
  },[stdID])
  document.getElementById(`${stdID}`) && (document.getElementById(`${stdID}`).innerHTML = `${Math.round((score / overAll) * 100)}%`.replace('NaN%', 'Missing'))
  
  return (
    <Container maxWidth="lg">
      <Grid container columnSpacing={1}>
        <Grid item xs={4} sx={{ margin: '0.5em 0em' }}>
          <Button sx={designs.Return_Button_Style}>Return</Button>
        </Grid>
        <SelectRoom setData={setData} />
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
                      {' '}
                      {label}{' '}
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
              {data && data.map(function (items, index) {
                return (
                  <div key={index}><StudentsList items={items} setStdID={setStdID}/></div>

                );
              })}
            </Box>
          </Box>
        </Grid>

        <Grid item md={8} sm={12} sx={designs.Right_Container_GridItem_Style}>
          <Box className="Right-container" sx={designs.Right_Container_Style}>
            <Box className="Header" sx={designs.Header_Style}>
              <Box className="Icon-Quiz" sx={designs.Icon_Quiz_Style}>
                <img
                  src={ExamIcon}
                  alt="ExamIcon"
                  style={{
                    height: '2em',
                    marginTop: '0.2em',
                  }}
                />
                <Typography sx={designs.Quiz_Typography_Style}>
                  {quizData && quizData.title}
                </Typography>
              </Box>

              <Box flexGrow={1} sx={designs.BoxFlexGrowHeader_Style} />

              <Box className="Professor-Date" sx={designs.Professor_Date_Style}>
                <Typography sx={designs.Professor_Typography_Style}>
                  {`${quizData && quizData.author.name} (You)`}
                </Typography>

                <Typography sx={designs.Date_Typography_Style}>
                  {quizData && moment(quizData.createdAt).format('MMMM DD YYYY / h:mm a')}
                </Typography>
              </Box>
            </Box>

            <Divider sx={designs.DividerRight_Style} />

            <Box className="Responsive" sx={designs.Responsive_Style}></Box>

            <Box
              className="Instructions-Score"
              sx={designs.Instructions_Score_Style}
            >
              <Box flexGrow={1} sx={designs.BoxFlexGrow_Responsive_Style} />

              <Typography sx={designs.Instructions_Typography_Style}>
                Please read the questions carefully.
              </Typography>

              <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

              <Typography sx={designs.ScoreText_Typography_Style}>
                Score:
              </Typography>

              <Typography sx={designs.Score_Typography_Style}>
                {`${score} / ${overAll}`}
              </Typography>
            </Box>
            {stdID && quizData && <CheckAnswers  stdScore={stdScore} quizID={quizData._id} stdID={stdID} setScore={setScore} setOverAll={setOverAll} />}

          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default View_exam;
