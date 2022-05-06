import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Typography,
  Box,
  Divider,
  TextField,
  IconButton,
  Button,
  Input,
  Tooltip,
} from '@mui/material';
import {
  ExpandMore,
  Wysiwyg,
  DeleteOutlined,
  BeenhereOutlined,
  BorderColorOutlined,
  SettingsSharp,
} from '@mui/icons-material';
import NewGrade from '../assets/ImageJaven/NewGrade.png';
import axios from 'axios';

function NewGradingSystem({
  index,
  response,
  data,
  name,
  counter,
  setRenderer,
  setGS,
  ...attrib
}) {
  const [expanded, setExpanded] = useState(false);
  const [input, setInput] = useState([{ category: '', percentage: '' }]);
  const [CS, setCS] = useState(60);

  const addCategories = () => {
    const category = [];
    response.Category.forEach((item, index) => {
      if (index < response.Category.length - 1)
        category.push({
          category: Object.entries(item)[0][0],
          percentage: Object.entries(item)[0][1],
        });
    });
    setInput(category);
  };
  React.useMemo(() => {
    response && addCategories();
    response &&
      setCS(100 - response.Category[response.Category.length - 1].Exam);
  }, []);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleChangeInput = (index, event) => {
    data.current[index][event.target.name] = event.target.value;
  };

  const handleAddFields = () => {
    setInput([...input, { cateory: '', percentage: '' }]);
    data.current.push({});
  };
  const handleRemoveFields = (index) => {
    const values = [...input];
    values.splice(index, 1);
    setInput(values);
  };

  const handleRename = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <Accordion
        sx={{
          boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
          '&: hover': {
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
          },
        }}
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box
            sx={{
              width: 'auto',
              flexGrow: 1,
              display: 'flex',
              gap: '0.5em',
              alignItems: 'center',
            }}
          >
            <Wysiwyg sx={{ color: '#007FFF', fontSize: '1.8em' }} />

            <Typography
              id={`gName${counter}`}
              sx={{
                color: '#007FFF',
                fontSize: '0.9em',
                fontWeight: '600',
                width: 'auto',
                flexGrow: 1,
                display: 'flex',
                alignItems: 'center',
                height: 'relative',
              }}
            >
              {response
                ? response.GradingName
                : name.current[counter]
                ? name.current[counter]['GradingName']
                : 'New Grading System'}
            </Typography>

            <Tooltip title="Rename" placement="left">
              <IconButton
                onClick={(event) => handleRename(event)}
                sx={{ marginRight: '0.5em' }}
              >
                <BorderColorOutlined
                  sx={{ color: '#707070', fontSize: '0.8em' }}
                />
              </IconButton>
            </Tooltip>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails sx={{ paddingLeft: '1.5em', paddingRight: '1.5em' }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              margin: '0.2em 0em 0.5em 0em',
              paddingBottom: '0.4em',
              borderBottom: '1px solid #DBDBDB',
            }}
          >
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '1em',
                fontWeight: 600,
                width: '13em',
              }}
            >
              Class Standing
            </Typography>

            <Box flexGrow={1} />

            <TextField
              {...attrib}
              onChange={(e) => {
                setCS(e.target.value);
              }}
              value={CS}
              autoComplete="off"
              size="small"
              variant="standard"
              inputProps={{
                style: {
                  width: '3em',
                  height: '1em',
                  fontSize: '1em',
                  color: '#007FFF',
                  fontWeight: 600,
                  textAlign: 'center',
                },
              }}
            />

            <Typography
              sx={{
                color: '#007FFF',
                fontSize: '1em',
                fontWeight: 600,
                width: 'auto',
              }}
            >
              %
            </Typography>
          </Box>

          <Box
            sx={{
              width: 'relative',
              height: 'auto',
              paddingBottom: '0.5em',
              display: 'flex',
              gap: '0.8em',
            }}
          >
            <Box
              sx={{
                height: 'auto',
                width: 'auto',
              }}
            >
              <Typography
                children="Grade categories must add up to 60%"
                sx={{
                  color: '#8E8E8E',
                  fontSize: '0.8em',
                  fontWeight: 500,
                  width: 'relative',
                  marginBottom: '1em',
                }}
              />

              {input.map((item, index) => {
                let value;
                let percent;
                response && (value = { value: item.category });
                response && (percent = { value: item.percentage });

                return (
                  <Box
                    key={index}
                    sx={{
                      marginBottom: '0.5em',
                      display: 'flex',
                      gap: '0.5em',
                      alignItems: 'center',
                    }}
                  >
                    <form>
                      <TextField
                        {...attrib}
                        {...value}
                        name={`Category ${index}`}
                        label="Category"
                        autoComplete="off"
                        size="small"
                        variant="outlined"
                        onChange={(event) => handleChangeInput(index, event)}
                        inputProps={{
                          style: {
                            height: '2em',
                            fontSize: '0.9em',
                            color: '#3F3D56',
                            fontWeight: 500,
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            color: '#8E8E8E',
                          },
                        }}
                      />
                    </form>
                    <form>
                      <TextField
                        {...attrib}
                        {...percent}
                        name={`Percentage ${index}`}
                        label="Percentage"
                        autoComplete="off"
                        size="small"
                        variant="outlined"
                        onChange={(event) => handleChangeInput(index, event)}
                        inputProps={{
                          style: {
                            height: '2em',
                            fontSize: '0.9em',
                            color: '#3F3D56',
                            fontWeight: 500,
                          },
                        }}
                        InputLabelProps={{
                          style: {
                            color: '#8E8E8E',
                          },
                        }}
                      />
                    </form>
                    {!response && (
                      <>
                        <Typography
                          children="%"
                          sx={{
                            color: '#3F3D56',
                            fontSize: '0.8em',
                            fontWeight: 600,
                            width: 'auto',
                            height: 'relative',
                            marginRight: '0.8em',
                          }}
                        />

                        {index > 0 && (
                          <IconButton
                            onClick={() => handleRemoveFields(index)}
                            sx={{
                              borderRadius: '0.1em',
                              backgroundColor: '#F3F3F3',
                              border: '1px solid #C4C4C4',
                              color: '#707070',
                              '&: hover': {
                                backgroundColor: '#EDEDED',
                                color: '#707070',
                                boxShadow: 'none',
                              },
                            }}
                          >
                            <DeleteOutlined sx={{ fontSize: '0.8em' }} />
                          </IconButton>
                        )}
                        <Button
                          onClick={() => handleAddFields()}
                          variant="contained"
                          children="Add another category"
                          sx={{
                            backgroundColor: '#F3F3F3',
                            border: '1px solid #C4C4C4',
                            color: '#707070',
                            fontSize: '0.8em',
                            fontWeight: '600',
                            boxShadow: 'none',
                            textTransform: 'none',
                            '&: hover': {
                              backgroundColor: '#EDEDED',
                              color: '#707070',
                              boxShadow: 'none',
                            },
                          }}
                        />
                      </>
                    )}
                  </Box>
                );
              })}
            </Box>

            <Box flexGrow={1} />

            <Box
              sx={{
                height: 'relative',
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.8em 4em 0em 0em',
              }}
            >
              <img src={NewGrade} alt="New Grade" style={{ height: '15em' }} />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '1em',
                fontWeight: 600,
                width: '13em',
              }}
            >
              Major Exam
            </Typography>

            <Box flexGrow={1} />

            <TextField
              id="exam"
              {...attrib}
              value={100 - CS}
              autoComplete="off"
              size="small"
              variant="standard"
              inputProps={{
                style: {
                  width: '3em',
                  height: '1em',
                  fontSize: '1em',
                  color: '#007FFF',
                  fontWeight: 600,
                  textAlign: 'center',
                },
              }}
            />

            <Typography
              sx={{
                color: '#007FFF',
                fontSize: '1em',
                fontWeight: 600,
                width: 'auto',
              }}
            >
              %
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mt: 2,
            }}
          >
            <Typography
              sx={{
                color: '#3F3D56',
                fontSize: '1em',
                fontWeight: 600,
                width: '13em',
              }}
            >
              Total Grade Percentage
            </Typography>

            <Box flexGrow={1} />

            <TextField
              id="exam"
              {...attrib}
              value="100"
              autoComplete="off"
              size="small"
              variant="standard"
              inputProps={{
                style: {
                  width: '3em',
                  height: '1em',
                  fontSize: '1em',
                  color: '#007FFF',
                  fontWeight: 600,
                  textAlign: 'center',
                },
              }}
            />

            <Typography
              sx={{
                color: '#007FFF',
                fontSize: '1em',
                fontWeight: 600,
                width: 'auto',
              }}
            >
              %
            </Typography>
          </Box>
        </AccordionDetails>
        <Divider />
        <AccordionActions sx={{ paddingLeft: '1.5em', paddingRight: '1.5em' }}>
          <Button
            name={response && response._id}
            onClick={(event) => {
              axios
                .delete('http://localhost:5000/gradingSystem/delete', {
                  data: { gsID: event.target.name },
                })
                .then((res) => {
                  setGS([]);
                  setRenderer((prev) => !prev);
                })
                .catch((err) => console.log(err));
            }}
            variant="text"
            startIcon={<DeleteOutlined />}
            sx={{
              padding: '0.4em 1.5em',
              color: '#3F3D56',
              fontSize: '0.8em',
              fontWeight: '600',
              textTransform: 'Capitalize',
              boxShadow: 'none',
              '&: hover': {
                backgroundColor: 'transparent',
              },
            }}
          >
            delete
          </Button>

          {!response && (
            <Button
              onClick={() => {
                const Category = [];
                for (let i = 0; i < data.current.length; i++) {
                  Category.push({
                    [data.current[i][`Category ${i}`]]:
                      data.current[i][`Percentage ${i}`],
                  });
                }

                Category.push({ Exam: document.querySelector('#exam').value });
                const ifDeleted = Category.filter(function (el) {
                  return Object.entries(el)[0][0] !== 'undefined' && el;
                });

                axios
                  .post('http://localhost:5000/gradingSystem/create', {
                    Category: ifDeleted,
                    GradingName: document.querySelector(`#gName${counter}`)
                      .textContent,
                    userID: JSON.parse(localStorage.userData).data.user._id,
                  })
                  .then((res) => {
                    setGS([]);
                    setRenderer((prev) => !prev);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              startIcon={<BeenhereOutlined />}
              children="Save Changes"
              variant="contained"
              sx={{
                padding: '0.4em 1.5em',
                color: 'white',
                fontSize: '0.8em',
                fontWeight: '600',
                textTransform: 'Capitalize',
                boxShadow: 'none',
                '&: hover': {
                  backgroundColor: '#43A047',
                },
              }}
            />
          )}
        </AccordionActions>
      </Accordion>
    </>
  );
}

export default NewGradingSystem;
