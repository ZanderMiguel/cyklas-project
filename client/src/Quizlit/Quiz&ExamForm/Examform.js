import React, { useState } from 'react';

import { TextField, Box, Button, Container, Grid, Input } from '@mui/material';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from '../Styles/Examform_style';
import '../Styles/Examform_stylesheet.css';
import { AddCircle, Add } from '@mui/icons-material';
import Post_exam from '../../Form_content/Post_exam';
import Exam_Questions from './AnswerTypes/Exam_Questions';
import ExamIconButton from '../../assets/ImageJaven/ExamIconButton.png';

function Examform() {
  const { designs } = useStyle();
  const counter = React.useRef(1);
  const [opendialog2, setOpenDialog2] = useState(false);
  const questionMemo = React.useRef([{}]);
  const [exQArray, setExQArray] = useState([Exam_Questions]);
  const exam = React.useRef({});
  const handleCreate = () => {
    setOpenDialog2(true);
  };
  const deleteQA = (counter) => {
    setExQArray(
      exQArray.filter((item, index) => {
        setExQArray(exQArray[counter - 1] !== item);
        console.log(exQArray[counter - 1] !== item);
      })
    );
  };
  const handleCreateClose = () => {
    setOpenDialog2(false);
  };
  return (
    <Container maxWidth="md" sx={{ padding: '2em 0em' }}>
      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        sx={{ margin: '0.5em 0em 2em 0em' }}
      >
        <Grid
          item
          xs={12}
          sx={{
            marginBottom: '0.8em',
            backgroundColor: 'white',
            borderRadius: '0.3em 0.3em 0em 0em',
            padding: '0.5em 1.1em',
            '&: hover': {
              transition: 'all 250ms',
              boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              borderBottom: '4px solid #007FFF',
            },
          }}
        >
          <Input
            defaultValue="Untitled Exam"
            disableUnderline
            onChange={(event) => {
              exam.current['title'] = event.target.value;
            }}
            name="title"
            sx={{
              width: '100%',
              height: 'auto',
              fontSize: '1.3em',
              fontWeight: '600',
              color: '#3F3D56',
            }}
          />

          <Input
            placeholder="Enter exam instructions here..."
            disableUnderline
            multiline
            rows={4}
            onChange={(event) => {
              exam.current['instruction'] = event.target.value;
            }}
            name="instruction"
            sx={{
              width: '100%',
              height: 'auto',
              fontSize: '0.8em',
              fontWeight: '400',
              color: '#8E8E8E',
            }}
          />
        </Grid>
        {exQArray.map((Item, index) => {
          return (
            <Grid item xs={12} key={index}>
              <Item
                questionMemo={questionMemo}
                counter={counter.current}
                deleteQA={deleteQA}
              />
            </Grid>
          );
        })}

        <Grid item xs={12} sx={{ marginBottom: '2em' }}>
          <Button
            children="Add question"
            variant="contained"
            startIcon={<Add />}
            type="submit"
            onClick={() => {
              counter.current = counter.current + 1;
              setExQArray([...exQArray, Exam_Questions]);
            }}
            sx={{
              fontSize: '0.8em',
              fontWeight: '600',
              color: '#white',
              textTransform: 'Capitalize',
              boxShadow: 'none',
              padding: '0.4em 1.3em',
              '&: hover': {
                boxShadow: 'none',
              },
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            borderTop: '1px solid #DBDBDB',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CusButton
            onClick={handleCreate}
            variant="contained"
            content="Create Exam"
            type="submit"
            id="examform"
            sx={{
              fontWeight: '600',
              marginTop: '1em',
              textDecoration: 'none',
              backgroundColor: '#4caf50',
              color: 'white',
              '&:hover': {
                backgroundColor: '#43a047',
              },
            }}
            startIcon={
              <img
                src={ExamIconButton}
                alt="Exam Icon Button"
                style={{ height: '1em' }}
              />
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
    </Container>
  );
}

export default Examform;
