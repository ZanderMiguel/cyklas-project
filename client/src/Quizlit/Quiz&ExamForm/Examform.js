import React, { useState } from 'react';

import { TextField, Box, Button, Container, Grid, Input } from '@mui/material';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from '../Styles/Examform_style';
import '../Styles/Examform_stylesheet.css';
import { AddCircle } from '@mui/icons-material';
import Post_exam from '../../Form_content/Post_exam';
import Exam_Questions from './AnswerTypes/Exam_Questions';

function Examform() {
  const { designs } = useStyle();
  const counter = React.useRef(1);
  const [opendialog2, setOpenDialog2] = useState(false);
  const questionMemo = React.useRef([{}]);
  const [exQArray, setExQArray] = useState([
    <Exam_Questions questionMemo={questionMemo} counter={counter.current} />,
  ]);
  const exam = React.useRef({});
  const handleCreate = () => {
    setOpenDialog2(true);
  };

  const handleCreateClose = () => {
    setOpenDialog2(false);
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
            <CusButton
              onClick={handleCreate}
              variant="contained"
              content="Create Exam"
              type="submit"
              id="examform"
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
            {opendialog2 && (
              <Post_exam
                itemCount={exQArray.length}
                open={opendialog2}
                close={handleCreateClose}
                maxWidth="md"
                state={setOpenDialog2}
                questionMemo={questionMemo}
                exam={exam}
                counter={counter}
              />
            )}
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="Exam-title"
            height="auto"
            width="100%"
            borderRadius="0.7em 0.7em 0em 0em"
          >
            <Box
              className="Title"
              width="100%"
              height="auto"
              backgroundColor="#007FFF"
              borderRadius="0.7em 0.7em 0em 0em"
              marginBottom="0.3em"
            >
              <TextField
                id="filled-basic"
                placeholder="Untitled Exam"
                variant="filled"
                onChange={(event) => {
                  exam.current['title'] = event.target.value;
                }}
                name="title"
                sx={{
                  borderRadius: '0.7em 0.7em 0em 0em',
                  width: '100%',
                  height: 'auto',
                  backgroundColor: 'transparent',
                }}
                inputProps={{
                  style: {
                    height: '0px',
                    fontSize: '1em',
                    margin: '0px 1.25rem 0.938rem 1.25rem',
                    color: 'white',
                    fontWeight: 500,
                  },
                }}
                InputProps={{ disableUnderline: true }}
                autoComplete="off"
              />
            </Box>

            <Box
              className="Instructions"
              width="relative"
              height="auto"
              padding="0.5em 2em"
              backgroundColor="#FDFDFD"
            >
              <Input
                variant="standard"
                multiline
                onChange={(event) => {
                  exam.current['instruction'] = event.target.value;
                }}
                fullWidth
                rows={6}
                disableUnderline
                placeholder="Write exam instructions here..."
                sx={designs.Instruction_Input_Style}
                name="instruction"
              />
            </Box>
          </Box>
        </Grid>
        {exQArray.map((item, index) => {
          return (
            <Grid item xs={12} key={index}>
              {item}
            </Grid>
          );
        })}

        <Grid item xs={12} sx={{ marginBottom: '2em' }}>
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
            onClick={() => {
              counter.current = counter.current + 1;
              setExQArray([
                ...exQArray,
                <Exam_Questions
                  questionMemo={questionMemo}
                  counter={counter.current}
                />,
              ]);
            }}
          >
            Add Question
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Examform;
