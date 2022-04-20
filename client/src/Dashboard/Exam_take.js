import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Divider,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ExamIconButton from '../assets/ImageJaven/ExamIconButton.png';
import useStyle from './Styles/Exam_take_style';
import axios from 'axios';
function Exam_take() {
  const { designs } = useStyle();
  const { quizID } = useParams();
  const [data, setData] = React.useState(null);
  const [items, setItems] = React.useState(null);
  React.useMemo(() => {
    axios
      .post('http://localhost:5000/quizlit', { quizID })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        axios
          .post('http://localhost:5000/question', { quizID })
          .then((response) => {
            setItems(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, [quizID]);
  return (
    <Container maxWidth="md">
      <Grid container rowSpacing={1}>
        <Grid item xs={12} sx={designs.ExamTake_GridItem_Style}>
          <Typography sx={designs.ExamName_Typography_Style}>
            {data && data.title}
          </Typography>

          <Box className="container" sx={designs.Container_Style}>
            <Typography sx={designs.Instructions_Typography_Style}>
              No description.
            </Typography>

            <Divider sx={designs.Divider_Style} />

            <Box className="Exam-details" sx={designs.Exam_Details_Style}>
              <Grid container rowSpacing={1} columnSpacing={1}>
                <Grid item md={2} sm={6} xs={12}>
                  <Typography sx={designs.Items_Typography_Style}>
                    {items && items.length} items
                  </Typography>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Box className="Points" sx={designs.Points_Style}>
                    <Typography sx={designs.OverallPoints_Typography_Style}>
                      Overall Points:
                    </Typography>

                    <Typography sx={designs.Points_Typography_Style}>
                      10 points
                    </Typography>
                  </Box>
                </Grid>

                <Grid item md={4} sm={6} xs={12}>
                  <Box className="DueDate" sx={designs.DueDate_Style}>
                    <Typography sx={designs.DueDate_Typography_Style}>
                      Due Date:
                    </Typography>

                    <Typography sx={designs.Date_Typography_Style}>
                      {data && data.dueDate}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={3} sm={6} xs={12}>
                  <Box className="TimeLimit" sx={designs.TimeLimit_Style}>
                    <Typography sx={designs.TimeLimit_Typography_Style}>
                      Time Limit:
                    </Typography>

                    <Typography sx={designs.Time_Typography_Style}>
                      01h 00m 00s
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box className="Button" sx={designs.Button_Style}>
            <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

            <Button
              sx={designs.StartExam_Button_Style}
              component={Link}
              to={`/Exam_start/${quizID}`}
              startIcon={
                <img
                  src={ExamIconButton}
                  alt="ExamIconButton"
                  style={{
                    height: '1em',
                  }}
                />
              }
            >
              Start Exam
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Exam_take;
