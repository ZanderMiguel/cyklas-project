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
import ExamTimer from './ExamComponents/ExamTimer';
import useStyle from './Styles/Exam_start_style';
import './Styles/Exam_start_stylesheet.css';
import ExamMulti from './ExamComponents/ExamMulti';
import ExamShort from './ExamComponents/ExamShort';
import ExamCB from './ExamComponents/ExamCB';
import ExamTF from './ExamComponents/ExamTF';
import { useParams, Redirect } from 'react-router-dom';
import axios from 'axios';
function Exam_start({ socket }) {
  const { designs } = useStyle();
  const { examID: quizID } = useParams();
  const [data, setData] = React.useState(null);
  const qAnswers = React.useRef([]);
  const [redirect, setRedirect] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/quizlit', { quizID })
      .then((response) => {
        axios
          .post('http://localhost:5000/question', {
            quizID,
          })
          .then((res) => {
            setData([response.data, res.data]);
            console.log([response.data, res.data]);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [quizID]);
  return (
    <Container maxWidth="md" sx={{ padding: '0em 0em 1em 0em' }}>
      <Grid
        item
        xs={12}
        sx={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#007FFF',
          padding: '0.3em 1.5em',
          display: 'flex',
          gap: '0.5em',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '1em',
          borderRadius: '0em 0em 0.5em 0.5em',
        }}
      >
        {data && <ExamTimer data={data[0]} socket={socket} />}
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: 'white',
          padding: '0.8em 1.1em',
          borderRadius: '0.3em',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '0.8em',
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
              children={data && data[0].title}
              sx={{
                flexGrow: '1',
                fontSize: '1.3em',
                fontWeight: '600',
                color: '#3F3D56',
                textTransform: 'none',
                height: 'max-content',
              }}
            />
          </Box>

          <Typography
            children={data && data[0]?.instruction}
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

      {/* <Box className="DueDate-Term" sx={designs.DueDate_Term_Style}>
        <Box className="DueDate_Style" sx={designs.DueDate_Style}>
          <Typography sx={designs.DueDate_Typography_Style}>
            Due Date:
          </Typography>

          <Typography sx={designs.Date_Typography_Style}>
            {data && data[0].dueDate}
          </Typography>
        </Box>

        <Box className="Term" sx={designs.Term_Style}>
          <Typography sx={designs.TermText_Typography_Style}>Term:</Typography>

          <Typography sx={designs.Term_Typography_Style}>
            No set term
          </Typography>
        </Box>
      </Box> */}

      {data &&
        data[1].map((item, index) => {
          const { answerType } = item;
          return (
            <Grid key={index} item xs={12} sx={designs.ExamName_GridItem_Style}>
              {answerType === 'Multiple Choice' && (
                <ExamMulti item={item} index={index} qAnswers={qAnswers} />
              )}
              {answerType === 'Short Answer' && (
                <ExamShort item={item} index={index} qAnswers={qAnswers} />
              )}
              {answerType === 'Checkboxes' && (
                <ExamCB item={item} index={index} qAnswers={qAnswers} />
              )}
              {answerType === 'True or False' && (
                <ExamTF item={item} index={index} qAnswers={qAnswers} />
              )}
            </Grid>
          );
        })}

      <Grid item xs={12}>
        <Box className="Button" sx={designs.Button_Style}>
          <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

          <Button
            onClick={() => {
              axios
                .post('http://localhost:5000/answers/create', {
                  answersPayload: qAnswers.current,
                })
                .then((res) => {
                  console.log(res.data);
                  setRedirect(<Redirect to="/dashboard" />);
                })
                .catch((err) => console.log(err));
            }}
            sx={designs.SubmitExam_Button_Style}
          >
            Submit
          </Button>
        </Box>
        {redirect && redirect}
      </Grid>
    </Container>
  );
}

export default Exam_start;
