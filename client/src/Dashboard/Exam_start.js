import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import ExamIcon from '../assets/ImageJaven/ExamIcon.png';
import { TimerOutlined } from '@mui/icons-material';
import useStyle from './Styles/Exam_start_style';
import './Styles/Exam_start_stylesheet.css';
import ExamMulti from './ExamComponents/ExamMulti';
import ExamShort from './ExamComponents/ExamShort';
import ExamCB from './ExamComponents/ExamCB';
import ExamTF from './ExamComponents/ExamTF';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function Exam_start() {
  const { designs } = useStyle();
  const { examID: quizID } = useParams();
  const [data, setData] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/quizlit', { quizID })
      .then((response) => {
        axios
          .post('http://localhost:5000/question', { quizID })
          .then((res) => {
            setData([response.data, res.data]);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <Container maxWidth="md">
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={designs.Timer_GridItem_Style}>
          <Box className="Timer-main" sx={designs.TimerMain_Style}>
            <Box className="Timer" sx={designs.Timer_Style}>
              <TimerOutlined sx={designs.TimerOutlinedIcon_Style} />
              <Typography sx={designs.Timer_Typography_Style}>
                00h 59m 57s
              </Typography>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sx={designs.ExamName_GridItem_Style}>
          <Box className="Header" sx={designs.Header_Style}>
            <Box className="Icon-Quiz" sx={designs.Exam_DueDateTerm_Style}>
              <img
                src={ExamIcon}
                alt="ExamIcon"
                style={{
                  height: '2em',
                  marginTop: '0.2em',
                }}
              />
              <Typography sx={designs.Exam_Typography_Style}>
                {data && data[0].title}
              </Typography>
            </Box>

            <Box flexGrow={1} sx={designs.BoxFlexGrowHeader_Style} />

            <Box className="DueDate-Term" sx={designs.DueDate_Term_Style}>
              <Box className="DueDate_Style" sx={designs.DueDate_Style}>
                <Typography sx={designs.DueDate_Typography_Style}>
                  Due Date:
                </Typography>

                <Typography sx={designs.Date_Typography_Style}>
                  December 12, 2021
                </Typography>
              </Box>

              <Box className="Term" sx={designs.Term_Style}>
                <Typography sx={designs.TermText_Typography_Style}>
                  Term:
                </Typography>

                <Typography sx={designs.Term_Typography_Style}>
                  No set term
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={designs.DividerRight_Style} />

          <Typography sx={designs.Instructions_Typography_Style}>
            {data && data[0]?.instruction}
          </Typography>
        </Grid>
        {data &&
          data[1].map((item, index) => {
            const { answerType } = item;
            return (
              <Grid
                key={index}
                item
                xs={12}
                sx={designs.ExamName_GridItem_Style}
              >
                {answerType === 'Multiple Choice' && <ExamMulti item={item} />}
                {answerType === 'Short Answer' && <ExamShort item={item} />}
                {answerType === 'Checkboxes' && <ExamCB item={item} />}
                {answerType === 'True or False' && <ExamTF item={item} />}
              </Grid>
            );
          })}

        <Grid item xs={12}>
          <Box className="Button" sx={designs.Button_Style}>
            <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

            <Button sx={designs.SubmitExam_Button_Style}>Submit</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Exam_start;
