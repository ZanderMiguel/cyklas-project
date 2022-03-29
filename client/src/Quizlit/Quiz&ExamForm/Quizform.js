import React, { useState } from 'react';

import {
  TextField,
  Box,
  Container,
  Grid,
  Input,
  Button
} from '@mui/material';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useStyle from '../Styles/Quiz_multiplechoice_style';
import Questions from './Questions';

import { AddCircle } from '@mui/icons-material';

function Quizform() {
  const { designs } = useStyle();
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [qArray,setQArray] = useState([<Questions />])
  const handleQuestionAdd = () => {
    setQArray([...qArray,<Questions />])
};
  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" rowSpacing={1} sx={{ margin: "0.5em 0em 2em 0em" }}>
        <Grid item container justifyContent="flex-end">
          <Grid item>
            <CusButton
              variant="contained"
              content="Create Quiz"
              type="submit"
              id="quizform"
              onClick={handleSubmit}
              sx={{
                textDecoration: 'none',
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#43a047',
                }
              }}
              startIcon={
                <AddCircleIcon sx={{ color: 'white', fontSize: '2rem' }} />
              }
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="Quiz-title"
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
                placeholder="Untitled Quiz"
                variant="filled"
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
              <Input variant="standard"
                multiline
                fullWidth
                rows={6}
                disableUnderline
                placeholder="Write quiz instructions here..."
                sx={designs.Instruction_Input_Style} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {qArray.map((item,index)=>{
            return(
              <div key={index}>
              {item}
              </div>
            )
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
              onClick={handleQuestionAdd}
            >
              Add Question
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Quizform;