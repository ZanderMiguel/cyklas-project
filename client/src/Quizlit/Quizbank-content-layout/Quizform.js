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
} from '@mui/material';
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

function Quizform() {
  return (
    <Box
      className="Container"
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      gap="5px"
      justifyContent="center"
      alignItems="center"
      marginTop="30px"
    >
      <Box className="Create-button" height="auto" width="70%">
        <Button
          variant="contained"
          //   startIcon={
          //     <img
          //       src={QuizIconButton}
          //       style={{
          //         marginRight: '5px',
          //         height: '20px',
          //       }}
          //     />
          //   }
          sx={styles.sxStyle}
          hover={styles.hover}
        >
          Create Quiz
        </Button>
      </Box>

      <Box
        className="Quiz-title"
        height="auto"
        width="70%"
        borderRadius="0.7em 0.7em 0em 0em"
        marginTop="5px"
      >
        <Box
          className="Title"
          width="100%"
          height="auto"
          backgroundColor="#007FFF"
          borderRadius="0.7em 0.7em 0em 0em"
        >
          <TextField
            id="filled-basic"
            placeholder="Untitled Quiz"
            variant="filled"
            sx={{
              borderRadius: '0.7em 0.7em 0em 0em',
              width: '99.8%',
              height: 'auto',
              backgroundColor: '#007FFF',
            }}
            inputProps={{
              style: {
                height: '0px',
                fontSize: '14px',
                margin: '0px 20px 15px 20px',
                color: 'white',
              },
            }}
            InputProps={{ disableUnderline: true }}
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
            id="filled-multiline-static"
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
                marginBottom: '18px',
                padding: '0px 20px 70px 20px',
                fontSize: '13px',
                color: '#3F3D56',
              },
            }}
            InputProps={{ disableUnderline: true }}
          />
        </Box>
      </Box>

      <Box
        className="Quiz-container"
        height="auto"
        width="70%"
        border="2px solid #DBDBDB"
      >
        <Box
          className="Quiz-container-sub"
          display="flex"
          gap="7px"
          width="100%"
          height="250px"
        >
          <Box
            className="Quiz-question"
            width="80%"
            height="250px"
            backgroundColor="White"
          >
            <Box
              className="Quiz-question-sub"
              width="100%"
              height="auto"
              display="flex"
              gap="5px"
              backgroundColor="#007FFF"
            >
              <TextField
                id="filled-basic"
                placeholder="Enter quiz question here..."
                variant="filled"
                sx={{
                  width: '100%',
                  height: 'auto',
                  backgroundColor: '#007FFF',
                  borderRadius: '0em',
                }}
                hover={styles.hover2}
                inputProps={{
                  style: {
                    height: '0px',
                    fontSize: '14px',
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
                        margin="0px 5px 16px 30px"
                        backgroundColor="White"
                        borderRadius="3em"
                      >
                        <Typography
                          sx={{
                            fontSize: '15px',
                            color: '#007FFF',
                            fontWeight: '600',
                            margin: '5px 5px 5px 11px',
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
              width="relative"
              height="auto"
              borderRight="2px solid #DBDBDB"
              borderBottom="2px solid #DBDBDB"
            >
              <Box
                className="Quiz-question-image-sub"
                height="200px"
                padding="0px"
                display="flex"
                flexDirection="column"
                gap="10px"
                justifyContent="center"
                alignItems="center"
              >
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
              </Box>
            </Box>
          </Box>

          <Box
            className="Quiz-options"
            width="50%"
            height="250px"
            backgroundColor="White"
          >
            {/* <Box className = "Asynchronous-button" display = "flex" justifyContent = "center" alignItems = "center" marginBottom = "5px">
                            <Checkbox sx = {{
                                color: "#BABABA"
                            }}/>
                            <Typography 
                            sx = {{
                                color: "#737373",
                                fontSize: "14px",
                                fontWeight: "600",
                                margin: "10px 10px 10px 0px"

                            }}>
                                Asynchronous
                            </Typography>
                        </Box> */}

            <Box
              className="Other-buttons"
              display="flex"
              flexDirection="column"
              gap="20px"
              marginTop="35px"
              justifyContent="center"
              alignItems="center"
            >
              <Autocomplete
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
              />

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
          width="relative"
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
    </Box>
  );
}

export default Quizform;
