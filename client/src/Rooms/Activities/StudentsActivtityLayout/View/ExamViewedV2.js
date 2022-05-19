import React from 'react';
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
  Input,
  Checkbox,
  CssBaseline,
  Avatar,
} from '@mui/material';
import { CheckCircleOutlined } from '@mui/icons-material';
import ExamIcon from '../../../../assets/ImageJaven/ExamIcon.png';
import MultipleChoiceChecked from './MultipleChoiceChecked';
import ShortAnswerChecked from './ShortAnswerChecked';
import CheckboxChecked from './CheckboxChecked';
import TrueorfalseChecked from './TrueorfalseChecked';
import AvatarIcon from '../../../../assets/ImageJaven/Avatar.png';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function ExamViewedV2() {
  const { quizID } = useParams();
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/answers/all', { quizID })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ padding: '0em 0em 2em 0em' }}>
        <Grid
          item
          xs={12}
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#49B854',
            padding: '0.3em 1.5em',
            display: 'flex',
            gap: '0.5em',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1em',
            borderRadius: '0em 0em 0.5em 0.5em',
          }}
        >
          <CheckCircleOutlined sx={{ color: 'white', fontSize: '1.5em' }} />

          <Typography
            children="Graded"
            sx={{
              color: 'white',
              fontSize: '1.2em',
              fontWeight: '500',
              textTransform: 'Uppercase',
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            display: 'flex',
            gap: '0.5em',
            alignItems: 'center',
            padding: '0.5em 1.1em 0.5em 0.9em',
            marginBottom: '0.5em',
            backgroundColor: 'white',
            borderRadius: '0.3em',
          }}
        >
          <Avatar
            src={JSON.parse(localStorage.userData).data.user.image.replace(
              'blob:',
              ''
            )}
            alt={JSON.parse(
              localStorage.userData
            ).data.user.firstName[0].toUpperCase()}
          />

          <Box
            sx={{
              width: 'auto',
              flexGrow: 1,
              height: 'auto',
            }}
          >
            <Typography
              children={`${
                JSON.parse(localStorage.userData).data.user.firstName
              } ${JSON.parse(localStorage.userData).data.user.lastName}`}
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
              children={data && data.quizlit.dueDate}
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
              children=" Your Score:"
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
              children="15 / 15"
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
                children={data && data.quizlit.title}
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
              children={data && data.quizlit.instruction}
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
        {data &&
          data.answers.map((item, index) => {
            return (
              <div key={index}>
                {data[index].answerType === 'Multiple Choice' && (
                  <MultipleChoiceChecked
                    data={data[index]}
                    answers={data.answers[index]}
                    index={index}
                  />
                )}
                {data[index].answerType === 'True or False' && (
                  <TrueorfalseChecked
                    data={data[index]}
                    answers={data.answers[index]}
                    index={index}
                  />
                )}
                {data[index].answerType === 'Short Answer' && (
                  <ShortAnswerChecked
                    data={data[index]}
                    index={index}
                    answers={data.answers[index]}
                  />
                )}
                {data[index].answerType === 'Checkboxes' && (
                  <CheckboxChecked
                    index={index}
                    data={data[index]}
                    answers={data.answers[index]}
                  />
                )}
              </div>
            );
          })}
      </Container>
    </>
  );
}

export default ExamViewedV2;
