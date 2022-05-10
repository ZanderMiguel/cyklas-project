import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';
import {
  Box,
  Typography,
  Checkbox,
  Container,
  Grid,
  Avatar,
  Autocomplete,
  TextField,
  FormControlLabel,
  IconButton,
  Button,
  InputAdornment,
  Divider,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tooltip,
  Input,
} from '@mui/material';
import FileDownload from 'js-file-download';
import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
import Wordfile from '../../../assets/ImageJaven/Wordfile.png';
import useStyle from '../../Styles/View_activity_style';
import '../../Styles/View_activity_style.css';
import ActivityIcon from '../../../assets/ImageJaven/ActivityIcon.png';
import axios from 'axios';
import StudentList from './components/StudentList';
import CommentArea from '../CommentArea';



const dataSort = [
  {
    value: 'First Name',
    label: 'First Name',
  },
  {
    value: 'Last Name',
    label: 'Last Name',
  },
  {
    value: 'Submitted',
    label: 'Submitted',
  },
  {
    value: 'Graded',
    label: 'Graded',
  },
];
const data = [
  {
    studentName: 'Paul Rudd',
    score: '100/100',
  },
  {
    studentName: 'Tom Hiddleston',
    score: '100/100',
  },
  {
    studentName: 'Tom Holland',
    score: '100/100',
  },
  {
    studentName: 'Sebastian Stan',
    score: '100/100',
  },
  {
    studentName: 'Robert Downey Jr.',
    score: '100/100',
  },
];

const socket = io.connect('http://localhost:3001');
function View_activity() {
  const [view, setView] = React.useState(false);
  const { designs } = useStyle();
  const { roomID, activityID } = useParams();
  const [selectSort, setSort] = useState('');
  const [activityView, setActivityView] = useState(null);
  const [submitData, setSubmitData] = useState(null);
  const [commentId, setCommentId] = useState(null);
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  socket.on('post-comment', (uuid) => {
    setCommentId(uuid);
  });

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/activity/get', { activityID })
      .then((res) => {
        setActivityView({ ...res.data.activity, ...res.data.myFile });
      })
      .catch((err) => console.log(err.message));
  }, []);


  return (
    <Container maxWidth="lg" sx={{ padding: '0.5em 0em' }}>
      <Grid container columnSpacing={1}>
        <Grid item xs={4}>
          <Button sx={designs.Return_Button_Style}>Return</Button>
        </Grid>

        <Grid item xs={8} />

        <Grid item xs={4}>
          <Box className="Student-list" sx={designs.Student_List_Style}>
            <Box className="Sort-container" sx={designs.Sort_Container_Style}>
              <FormControlLabel
                control={<Checkbox sx={designs.AllStudent_Checkbox_Style} />}
                label="All Students"
                sx={designs.AllStudentLabel_Checkbox_Style}
              />

              <Box sx={designs.FlexGrow_Box_Style} />

              <FormControl variant="standard" sx={designs.FormControl_Style}>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={designs.InputLabel_Style}
                >
                  Sort by
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={selectSort}
                  onChange={handleChangeSort}
                  label="SelectSort"
                  disableUnderline
                  sx={designs.Select_Style}
                >
                  {dataSort.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Divider sx={designs.Divider_Style} />

            <Box
              className="Student-container"
              sx={designs.Student_Container_Style}
            >
              <StudentList
                submitData={submitData}
                data={data}
                setSubmitData={setSubmitData}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item md={8} sm={12}>
          <Box
            className="Right-container"
            sx={{
              width: '100%',
              height: 'auto',
              padding: '0.5em 0em 1em 0em',
              marginBottom: '1em',
              border: '1px solid #DBDBDB',
              borderRadius: '0.3em',
              backgroundColor: 'white',
            }}
          >
            <Box
              className="Header"
              sx={{
                padding: '0.5em 1.5em',
                height: 'auto',
                width: 'relative',
                display: 'flex',
                gap: '0.8em',
                alignItems: 'center',
              }}
            >
              <img
                src={ActivityIcon}
                style={{
                  height: '35px',
                }}
              />

              <Typography
                sx={{
                  height: 'max-content',
                  fontSize: '18px',
                  fontWeight: '700',
                  textTransform: 'Uppercase',
                  color: '#3F3D56',
                  width: 'auto',
                  flexGrow: 1,
                }}
              >
                {activityView && activityView.activityTitle}
              </Typography>

              <Typography
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: 'relative',
                  fontSize: '12px',
                  fontWeight: '500',
                  textTransform: 'Capitalize',
                  color: '#3F3D56',
                }}
              >
                {activityView && activityView.activityType}
              </Typography>
            </Box>

            <Grid container sx={{ padding: '0.9em 1.5em' }}>
              <Grid item xs={6}>
                <Box
                  sx={{
                    width: 'relative',
                    height: 'max-content',
                    display: 'flex',
                    gap: '0.8em',
                    marginBottom: '0.4em',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 'relative',
                      fontSize: '0.8em',
                      fontWeight: '600',
                      textTransform: 'Capitalize',
                      color: '#3F3D56',
                    }}
                  >
                    Points:
                  </Typography>

                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 'relative',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      textTransform: 'Capitalize',
                      color: '#3F3D56',
                    }}
                  >
                    {activityView && activityView.activityPoints}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 'relative',
                    height: 'max-content',
                    display: 'flex',
                    gap: '0.8em',
                  }}
                >
                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 'relative',
                      fontSize: '0.8em',
                      fontWeight: '600',
                      textTransform: 'Capitalize',
                      color: '#3F3D56',
                    }}
                  >
                    Due Date:
                  </Typography>

                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 'relative',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      textTransform: 'Capitalize',
                      color: '#3F3D56',
                    }}
                  >
                    {activityView &&
                      moment(activityView.activityDueDate).format('LL')}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs = {6}>
              <Box
                  sx={{
                    width: 'relative',
                    height: 'max-content',
                    display: 'flex',
                    alignItems: "center",
                    gap: '0.8em',
                    justifyContent: "flex-end"
                  }}
                > 
                  <Typography children = "Score:"
                  sx = {{
                    display: 'flex',
                      alignItems: 'center',
                      height: 'relative',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      textTransform: 'Uppercase',
                      color: '#3F3D56',
                  }}/>
                  <TextField
              autoComplete="off"
              size="small"
              variant="standard"
              inputProps={{
                style: {
                  width: '3em',
                  height: '1em',
                  fontSize: '0.9em',
                  color: '#007FFF',
                  fontWeight: 600,
                  textAlign: 'center',
                },
              }}
            />

                  <Typography
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      height: 'relative',
                      fontSize: '0.8em',
                      fontWeight: '600',
                      textTransform: 'Capitalize',
                      color: '#3F3D56',
                    }}
                  >
                    / 100
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider
              sx={{
                width: 'relative',
                margin: '0em 1.5em',
              }}
            />

            <Box
              className="Activity-instructions"
              sx={{
                height: 'auto',
                width: 'relative',
                margin: '0.1em 0em 0em 0em',
                padding: '0.3em 1.5em',
              }}
            >
              {activityView && activityView.activityInstruction ? (
                <>
                  <Typography
                    sx={{
                      width: '100%',
                      fontSize: '0.9em',
                      fontWeight: '600',
                      textTransform: 'Uppercase',
                      color: '#3F3D56',
                      marginTop: '0.3em',
                    }}
                  >
                    Instructions:
                  </Typography>

                  <Typography
                    sx={{
                      width: '100%',
                      fontSize: '0.8em',
                      fontWeight: '500',
                      textTransform: 'none',
                      color: '#3F3D56',
                      marginBottom: '0.5em',
                    }}
                  >
                    {ReactHtmlParser(
                      draftToHtml(activityView.activityInstruction)
                    )}
                  </Typography>
                </>
              ) : null}

              {activityView &&
                activityView.media.map((item, index) => {
                  return (
                    <Tooltip
                      key={index}
                      title="Click to download file"
                      placement="top-start"
                    >
                      <Box
                        onClick={async () => {
                          axios
                            .get(
                              `http://localhost:5000/activity/download/${activityView[index].file.filename}`,
                              {
                                responseType: 'blob',
                              }
                            )
                            .then((res) => {
                              FileDownload(
                                res.data,
                                activityView[index].file.filename
                              );
                            });
                        }}
                        className="Attach-file"
                        sx={{
                          backgroundColor: 'white',
                          margin: '0.5em 0em 0em 0em',
                          width: '100%',
                          height: "auto",
                          padding: '0.5em 0.9em',
                          display: 'flex',
                          alignItems: "center", 
                          gap: '0.9em',
                          border: '1px solid #D4D4D4',
                          borderRadius: '0.3em',
                          '&: hover': {
                            cursor: 'pointer',
                            boxShadow:
                              'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                          },
                        }}
                      >
                        <img
                          src={Wordfile}
                          style={{
                            height: '40px',
                          }}
                        />

                        <Box
                          className="Activity-filename"
                          sx={{
                            width: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                          }}
                        >
                          <Typography
                            sx={{
                              color: '#3F3D56',
                              fontSize: '0.8em',
                              fontWeight: '600',
                              width: 'auto',
                              flexGrow: 1,
                              height: 'auto',
                              wordBreak: "break-all"
                            }}
                          >
                            {item}
                          </Typography>

                          <Typography
                            sx={{
                              color: '#3F3D56',
                              fontSize: '0.7em',
                              width: 'max-content',
                              height: 'max-content',
                            }}
                          >
                            {item.includes('.docx')
                              ? 'WORD FILE'
                              : item.includes('.xml')
                              ? 'EXCEL FILE'
                              : item.includes('.ppt')
                              ? 'POWERPOINT FILE'
                              : item.includes('.pdf')
                              ? 'PDF FILE'
                              : 'FILE'}
                          </Typography>
                        </Box>
                      </Box>
                    </Tooltip>
                  );
                })}
            </Box>
          </Box>

          <Box
            className="Student-container"
            sx={{
              height: 'auto',
              width: 'relative',
              marginBottom: '1em',
              borderRadius: '0.3em 0.3em 0em 0em',
              padding: '0.3em 1.5em 1.5em 1.5em',
              backgroundColor: 'white',
              '&: hover': {
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                borderBottom: '4px solid #007FFF',
                transition: 'all 250ms',
              },
            }}
          >
            <Box
            sx = {{
              width: "relative",
              height: "auto",
              display: "flex",
              alignItems: "center",
              margin: "0.5em 0em 1em 0em"
            }}>
              <Typography
              sx={{
                height: 'max-content',
                fontSize: '15px',
                fontWeight: '600',
                textTransform: 'Uppercase',
                color: '#6D6B85',
                width: 'auto',
                flexGrow: 1,
              }}
            >
              Student's Uploaded Files
            </Typography>

            <Typography
              sx={{
                height: 'max-content',
                fontSize: '15px',
                fontWeight: '700',
                textTransform: 'Uppercase',
                color: '#007FFF',
                width: 'auto',
              }}
            >
              handed-out
            </Typography>
            </Box>

            {submitData?.length > 0 &&
              submitData[0].media.map((item, index) => {
                return (
                  <Tooltip
                    key={index}
                    title="Click to download file"
                    placement="top-start"
                  >
                    <Box
                      className="Attach-file"
                      sx={{
                        backgroundColor: 'white',
                        margin: '0.5em 0em 0em 0em',
                        width: '100%',
                        padding: '0.5em 0.9em',
                        display: 'flex',
                        gap: '0.9em',
                        border: '1px solid #D4D4D4',
                        borderRadius: '0.3em',
                        '&: hover': {
                          cursor: 'pointer',
                          boxShadow:
                            'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
                        },
                      }}
                    >
                      <img
                        src={Wordfile}
                        style={{
                          height: '40px',
                        }}
                      />

                      <Box
                        className="Activity-filename"
                        sx={{
                          width: 'auto',
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                        }}
                      >
                        <Typography
                          noWrap
                          sx={{
                            color: '#3F3D56',
                            fontSize: '0.8em',
                            fontWeight: '600',
                            width: 'relative',
                            height: 'max-content',
                          }}
                        >
                          {item}
                        </Typography>

                        <Typography
                          sx={{
                            color: '#3F3D56',
                            fontSize: '0.7em',
                            width: 'max-content',
                            height: 'max-content',
                          }}
                        >
                          Document File
                        </Typography>
                      </Box>
                    </Box>
                  </Tooltip>
                );
              })}
          </Box>
        <CommentArea socket={socket} activityID={activityID} commentId={commentId}/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default View_activity;
