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
import ExamTimer from './ExamComponents/ExamTimer'
import useStyle from './Styles/Exam_start_style';
import './Styles/Exam_start_stylesheet.css';
import ExamMulti from './ExamComponents/ExamMulti';
import ExamShort from './ExamComponents/ExamShort';
import ExamCB from './ExamComponents/ExamCB';
import ExamTF from './ExamComponents/ExamTF';
import { useParams,Redirect } from 'react-router-dom';
import axios from 'axios';
function Exam_start({socket}) {
  const { designs } = useStyle();
  const { examID: quizID } = useParams();
  const [data, setData] = React.useState(null);
  const qAnswers = React.useRef([{}])
  const [redirect,setRedirect] = React.useState(null)
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/quizlit', { quizID })
      .then((response) => {
        axios
          .post('http://localhost:5000/question', { quizID })
          .then((res) => {
            setData([response.data, res.data]);
            console.log([response.data, res.data]);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [quizID]);
  return (
    <Container maxWidth="md">
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={designs.Timer_GridItem_Style}>
          {data && <ExamTimer data={data[0]} socket={socket}/>}
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
                  {data && data[0].dueDate}
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
                {answerType === 'Multiple Choice' && (
                  <ExamMulti item={item} index={index} qAnswers={qAnswers}  />
                )}
                {answerType === 'Short Answer' && (
                  <ExamShort item={item} index={index} />
                )}
                {answerType === 'Checkboxes' && (
                  <ExamCB item={item} index={index} />
                )}
                {answerType === 'True or False' && (
                  <ExamTF item={item} index={index} />
                )}
              </Grid>
            );
          })}

        <Grid item xs={12}>
          <Box className="Button" sx={designs.Button_Style}>
            <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

            <Button 
            onClick={()=>{axios.post('http://localhost:5000/answers/create',{answersPayload:qAnswers.current}).then(res=>{
            setRedirect(<Redirect to="/dashboard" />)  
            console.log(res.data)}).catch(err=>console.log(err))}}
            sx={designs.SubmitExam_Button_Style}>Submit</Button>
          </Box>
          {redirect && redirect}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Exam_start;
