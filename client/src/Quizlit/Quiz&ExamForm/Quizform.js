import React from 'react';

import {
  Typography,
  Autocomplete,
  TextField,
  IconButton,
  InputAdornment,
  Checkbox,
  Box,
  Button,
  Container,
  Grid,
  Select,
  MenuItem,
} from '@mui/material';
import { green } from '@mui/material/colors';
import CusButton from '../../components/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
//import { Buttons as Button, Boxs as Box } from '../components/Component';
//import QuizIconButton from '../../assets/ImageJaven/QuizIconButton.png';
import Image from '../../assets/ImageJaven/Image.png';
import { AddCircle, Check } from '@mui/icons-material';

const styles = {
  hover: {
    backgroundColor: '#49B854',
  },
  hover2: {
    backgroundColor: 'Black',
  },
  hover3: {
    backgroundColor: 'White',
    boxShadow: 'none',
  },

  sxStyle: {
    fontSize: '13px',
    backgroundColor: '#49B854',
    textTransform: 'Capitalize',
    fontWeight: 'bold',
    width: 'max-content',
    padding: '9px 30px',
    borderRadius: '0.4em',
    float: 'Right',
  },
  sxStyle2: {
    fontSize: '14px',
    fontWeight: '600',
    color: 'White',
    textTransform: 'Uppercase',
    padding: '11px 0px 11px 35px',
  },
  sxStyle3: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#3F3D56',
    padding: '11px 0px 11px 35px',
  },
};

const sortOptions = [
  { label: 'Multiple Choice' },
  { label: 'Image Multiple Choice' },
  { label: 'True or False' },
  { label: 'Essay' },
];

const sortOptions2 = [
  { label: '5 seconds' },
  { label: '10 seconds' },
  { label: '15 seconds' },
  { label: '20 seconds' },
  { label: '25 seconds' },
  { label: '30 seconds' },
  { label: '35 seconds' },
  { label: '40 seconds' },
  { label: '1 minute' },
  { label: '2 minutes' },
];

const sortOptions3 = [
  { label: '0 point' },
  { label: '1 point' },
  { label: '2 points' },
  { label: '3 points' },
  { label: '4 points' },
  { label: '5 points' },
  { label: '6 points' },
  { label: '7 points' },
  { label: '8 points' },
  { label: '9 points' },
  { label: '10 points' },
];

const answertypeoptions = [
  {
    value: 'Multiple Choice',
    label: 'Multiple Choice',
  },
  {
    value: 'Female',
    label: 'Female',
  },
];

function Quizform() {
  const [image, setImage] = React.useState(true);
  const [answertype, setAnswertype] = React.useState('Multiple Choice');

  const handleChange = () => {};

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center" spacing={1}>
        <Grid item container justifyContent="flex-end">
          <Grid item>
            <CusButton
              variant="contained"
              content="Create Quiz"
              sx={{
                backgroundColor: '#4caf50',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#43a047',
                },
                mb: 2,
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
              backgroundColor="#FCFCFC"
              borderLeft="2px solid #DBDBDB"
              borderRight="2px solid #DBDBDB"
              borderBottom="2px solid #DBDBDB"
            >
              <TextField
                multiline
                rows={1}
                placeholder="Write quiz instructions here..."
                variant="filled"
                sx={{
                  width: '100%',
                  height: 'auto',
                  backgroundColor: 'White',
                }}
                inputProps={{
                  style: {
                    height: '0px',
                    marginBottom: '1.2rem',
                    padding: '0rem 1.25rem 4.375rem 1.25rem',
                    fontSize: '0.9rem',
                    color: '#3F3D56',
                    fontWeight: 500,
                  },
                }}
                InputProps={{ disableUnderline: true }}
                autoComplete="off"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            className="Quiz-container"
            height="auto"
            width="100%"
            gap="20px"
            border="2px solid #DBDBDB"
            boxSizing="border-box"
          >
            <Box
              className="Quiz-container-sub"
              display="flex"
              width="100%"
              height="15.625rem"
            >
              <Box
                className="Quiz-question"
                width="80%"
                height="250px"
                backgroundColor="White"
                boxSizing="border-box"
              >
                <Box
                  className="Quiz-question-sub"
                  width="100%"
                  height="auto"
                  backgroundColor="#007FFF"
                >
                  <TextField
                    id="filled-basic"
                    placeholder="Enter quiz question here..."
                    variant="filled"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      backgroundColor: 'transparent',
                      borderRadius: '0em',
                    }}
                    hover={styles.hover2}
                    inputProps={{
                      style: {
                        height: '0em',
                        fontSize: '0.8em',
                        paddingLeft: '2px',
                        paddingRight: '0px',
                        marginBottom: '16px',
                        marginRight: '50px',
                        color: 'white',
                      },
                    }}
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            className="Quiz-item"
                            height="30px"
                            width="30px"
                            margin="0rem 0.313rem 1rem 1.875rem"
                            backgroundColor="White"
                            borderRadius="3em"
                          >
                            <Typography
                              sx={{
                                fontSize: '1rem',
                                color: '#007FFF',
                                fontWeight: 600,
                                margin: '0.313rem 0.313rem 0.313rem 0.688rem',
                              }}
                            >
                              1.
                            </Typography>
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Box
                  className="Quiz-question-image"
                  width="100%"
                  height="auto"
                  borderRight="2px solid #DBDBDB"
                  borderBottom="2px solid #DBDBDB"
                  boxSizing="border-box"
                >
                  <Box
                    className="Quiz-question-image-sub"
                    height="auto"
                    padding="0.2rem"
                    display="flex"
                    flexDirection="column"
                    gap="10px"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {image ? (
                      <Box width="100%" height="250px" backgroundColor="red">
                        No container
                      </Box>
                    ) : (
                      <>
                        <img
                          src={Image}
                          height="80px"
                          style={{
                            marginLeft: '15px',
                          }}
                        />

                        <Button
                          variant="contained"
                          startIcon={
                            <AddCircle
                              style={{
                                marginRight: '5px',
                                fontSize: '30px',
                                color: '#716F87',
                              }}
                            />
                          }
                          sx={{
                            width: '200px',
                            color: '#8E8E8E',
                            textTransform: 'none',
                            fontSize: '13px',
                            backgroundColor: 'White',
                            border: '2px solid #8E8E8E',
                            borderRadius: '0.7em',
                            boxShadow: 'none',
                          }}
                          hover={styles.hover3}
                        >
                          Insert an image or GIF associated to this question.
                        </Button>
                      </>
                    )}
                  </Box>
                </Box>
              </Box>

              <Box
                className="Quiz-options"
                width="50%"
                height="15.625rem"
                backgroundColor="White"
              >
                <Box
                  className="Other-buttons"
                  display="flex"
                  flexDirection="column"
                  gap="1.3rem"
                  marginTop="35px"
                  justifyContent="center"
                  alignItems="center"
                >
                  {/* <Autocomplete
                    clearOnEscape
                    id="clear-on-escape"
                    options={sortOptions}
                    sx={{
                      width: '80%',
                      borderBottom: '2px solid #DBDBDB',
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                        }}
                        // InputProps={{style: {fontSize: "14px", color: "#3F3D56"}}}
                        InputLabelProps={{
                          style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#737373',
                          },
                        }}
                        label="Answer type"
                        variant="standard"
                      />
                    )}
                  /> */}
                  <Typography
                    variant="body1"
                    sx={{ ml: 1, mb: 1, fontWeight: 500 }}
                  >
                    Answer type:
                  </Typography>
                  <Select value={answertype} onChange={handleChange}>
                    {answertypeoptions.map(({ value, label }) => (
                      <MenuItem key={value} value={value}>
                        {label}
                      </MenuItem>
                    ))}
                  </Select>

                  <Autocomplete
                    clearOnEscape
                    id="clear-on-escape"
                    options={sortOptions2}
                    sx={{
                      width: '80%',
                      borderBottom: '2px solid #DBDBDB',
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                        }}
                        // InputProps={{style: {fontSize: "14px", color: "#3F3D56"}}}
                        InputLabelProps={{
                          style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#737373',
                          },
                        }}
                        label="Time Limit"
                        variant="standard"
                      />
                    )}
                  />

                  <Autocomplete
                    clearOnEscape
                    id="clear-on-escape"
                    options={sortOptions3}
                    sx={{
                      width: '80%',
                      borderBottom: '2px solid #DBDBDB',
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                        }}
                        InputLabelProps={{
                          style: {
                            fontSize: '14px',
                            fontWeight: '600',
                            color: '#737373',
                          },
                        }}
                        label="Points"
                        variant="standard"
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>

            <Box
              className="Quiz-answers"
              padding="10px 35px"
              width="100%"
              height="auto"
              display="flex"
              flexDirection="column"
              gap="5px"
            >
              <TextField
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                }}
                variant="standard"
                sx={{
                  width: '100%',
                  borderBottom: '2px solid #D4D4D4',
                }}
              />

              <TextField
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                }}
                variant="standard"
                sx={{
                  width: '100%',
                  borderBottom: '2px solid #D4D4D4',
                }}
              />

              <TextField
                id="standard-read-only-input"
                InputProps={{
                  readOnly: true,
                  disableUnderline: true,
                }}
                variant="standard"
                sx={{
                  width: '100%',
                  borderBottom: '2px solid #D4D4D4',
                }}
              />
            </Box>
          </Box>

          <Box
            className="Add-question-button"
            height="50px"
            width="70%"
            paddingBottom="30px"
          >
            <Button
              variant="contained"
              startIcon={
                <AddCircle
                  style={{
                    marginRight: '5px',
                  }}
                />
              }
              sx={{
                float: 'Left',
                backgroundColor: '#0069D3',
                textTransform: 'Capitalize',
                fontWeight: 'bold',
                width: 'max-content',
                padding: '5px 30px',
                marginTop: '5px',
                borderRadius: '0.4em',
              }}
            >
              Add Question
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Quizform;
