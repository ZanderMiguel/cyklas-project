import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
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
import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
import AvatarIcon from '../../../assets/ImageJaven/Avatar.png';
import Wordfile from '../../../assets/ImageJaven/Wordfile.png';
import {
  KeyboardArrowDown,
  Send,
  BorderColorOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material';
import useStyle from '../../Styles/View_activity_style';
import '../../Styles/View_activity_style.css';
import ActivityIcon from '../../../assets/ImageJaven/ActivityIcon.png';
import axios from 'axios';
import ReactScrollableFeed from 'react-scrollable-feed';
import StudentList from './components/StudentList';

const sortOptions = [
  {
    label: 'First name',
  },
  {
    label: 'Last name',
  },
  {
    label: 'Submitted',
  },
  {
    label: 'Missing',
  },
];

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
function View_activity() {
  const [view, setView] = React.useState(false);
  const { designs } = useStyle();
  const { roomID, activityID } = useParams();
  const [selectSort, setSort] = useState('');
  const [activityView, setActivityView] = useState(null);
  const handleChangeSort = (event) => {
    setSort(event.target.value);
  };

  React.useEffect(() => {
    axios
      .post('http://localhost:5000/activity/get', { activityID })
      .then((res) => {
        setActivityView(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container maxWidth="lg">
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
              <StudentList data={data} />
            </Box>
          </Box>
        </Grid>

        <Grid item md={8} sm={12}>
          <Box className="Activity" sx={designs.Activity_Style}>
            <Box className="Activity-info" sx={designs.ActivityInfo_Style}>
              <Box className="Activity-title" sx={designs.ActivityTitle_Style}>
                {/* <Typography sx={designs.Lesson_Typography_Style}>
                  Lesson 2 -
                </Typography> */}

                <img
                  src={ActivityIcon}
                  style={{
                    height: '35px',
                  }}
                />

                <Typography noWrap sx={designs.Activity_Typography_Style}>
                  {activityView && activityView.activityTitle}
                </Typography>

                <Typography noWrap sx={designs.ActivityType_Typography_Style}>
                  {activityView && activityView.activityType}
                </Typography>
              </Box>

              <Box
                className="Activity-duedate"
                sx={designs.ActivityDueDate_Style}
              >
                <Typography sx={designs.ActivityDueDate_Typography_Style}>
                  Due Date:
                </Typography>
                <Typography sx={designs.ActivityDueDate2_Typography_Style}>
                  {activityView &&
                    moment(activityView.activityDueDate).format('LL')}
                </Typography>
              </Box>

              <Box
                className="Activity-instructions"
                sx={designs.ActivityInstructions_Style}
              >
                {activityView && activityView.activityInstruction ? (
                  <>
                    <Typography
                      sx={designs.ActivityInstructionsHead_Typography_Style}
                    >
                      Instructions
                    </Typography>
                    {ReactHtmlParser(
                      draftToHtml(activityView.activityInstruction)
                    )}
                  </>
                ) : null}

                <Tooltip title="Click to download file" placement="top-start">
                  <Box className="Attach-file" sx={designs.AttachFile_Style}>
                    <img
                      src={Wordfile}
                      style={{
                        height: '40px',
                      }}
                    />

                    <Box
                      className="Activity-filename"
                      sx={designs.ActivityFileName_Style}
                    >
                      <Typography
                        noWrap
                        sx={designs.ActivityFileName_Typography_Style}
                      >
                        ACTIVITY 4.docx
                      </Typography>

                      <Typography sx={designs.DocumentFile_Typography_Style}>
                        Document File
                      </Typography>
                    </Box>
                  </Box>
                </Tooltip>
              </Box>

              <Box
                className="View-comments"
                sx={{
                  borderTop: '1px solid #DBDBDB',
                  backgroundColor: '#FCFCFC',
                  height: 'auto',
                  width: 'relative',
                  padding: '0em 1.5em',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <Typography
                  noWrap
                  sx={{
                    height: 'max-content',
                    width: 'max-content',
                    color: '#3F3D56',
                    fontSize: '12px',
                    padding: '1px 0px',
                    margin: '5px 0px',
                  }}
                >
                  23
                </Typography>
                <Typography
                  noWrap
                  sx={{
                    height: 'max-content',
                    width: 'max-content',
                    color: '#3F3D56',
                    fontSize: '12px',
                    padding: '1px 0px',
                    margin: '5px 0px',
                  }}
                >
                  Comments
                </Typography>
              </Box>
              <Box
                className="comments-wrapper"
                height="auto"
                maxHeight={300}
                overflow="auto"
              >
                <ReactScrollableFeed>
                  <div>
                    <Box
                      className="User"
                      sx={{
                        padding: '7px 15px',
                        gap: '13px',
                        display: 'flex',
                        width: 'relative',
                        height: 'auto',
                      }}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={AvatarIcon}
                        sx={{
                          margin: '1px 0px',
                          height: '40px',
                          width: '40px',
                        }}
                      />

                      <Box className="User-date" sx={{ margin: '3px 0px' }}>
                        <Box>
                          <Typography
                            noWrap
                            sx={{
                              fontSize: '14px',
                              color: '#3F3D56',
                              fontWeight: '600',
                            }}
                          >
                            Eren Yeager
                          </Typography>

                          <Box
                            className="date"
                            sx={{
                              display: 'flex',
                              flexWrap: 'wrap',
                            }}
                          >
                            <Typography
                              sx={{
                                width: 'max-content',
                                fontSize: '10px',
                                color: '#8E8E8E',
                                fontWeight: '500',
                                fontStyle: 'Italic',
                              }}
                            >
                              December 04, 2021
                            </Typography>
                          </Box>
                        </Box>
                        <Box
                          className="content"
                          fontSize="0.9rem"
                          sx={{
                            margin: '0.5em 0em',
                          }}
                        >
                          ayos
                        </Box>

                        <Box
                          className="actions"
                          sx={{
                            marginTop: '0.3em',
                            display: 'flex',
                            gap: '1em',
                          }}
                        >
                          <Box
                            // onClick={handleEditComment}
                            sx={{
                              display: 'flex',
                              gap: '0.5em',
                              width: 'auto',
                              height: 'auto',
                              '&: hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <BorderColorOutlined
                              sx={{ color: '#585670', fontSize: '0.9em' }}
                            />

                            <Typography
                              sx={{
                                fontSize: '0.5em',
                                fontWeight: '400',
                                color: '#3F3D56',
                              }}
                            >
                              Edit comment
                            </Typography>
                          </Box>

                          <Divider
                            orientation="vertical"
                            flexItem
                            sx={{
                              margin: '0.2em 0em',
                            }}
                          />

                          <Box
                            // onClick={() => handleDeleteComment(_id)}
                            sx={{
                              display: 'flex',
                              gap: '0.5em',
                              width: 'auto',
                              height: 'auto',
                              '&: hover': {
                                cursor: 'pointer',
                                textDecoration: 'underline',
                              },
                            }}
                          >
                            <DeleteOutlineOutlined
                              sx={{ color: '#585670', fontSize: '0.9em' }}
                            />

                            <Typography
                              sx={{
                                fontSize: '0.5em',
                                fontWeight: '400',
                                color: '#3F3D56',
                              }}
                            >
                              Delete comment
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </div>
                </ReactScrollableFeed>
              </Box>

              <Divider sx={{ mb: 2 }} />

              <Box
                className="write-comment"
                sx={{
                  padding: '0px 15px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  width: 'relative',
                  height: 'auto',
                }}
              >
                <Avatar alt="Remy Sharp" src={AvatarIcon} />

                <Input
                  placeholder="Write a comment..."
                  disableUnderline
                  sx={{
                    border: '1px solid #DBDBDB',
                    borderRadius: '0.3em',
                    color: '#3F3D56',
                    fontSize: '0.9em',
                    padding: '0.3em 0.8em',
                    width: '100%',
                    '&: hover': {
                      border: '1px solid #007FFF',
                      transition: 'all 300ms',
                    },
                  }}
                />

                <Button
                  children="Send"
                  variant="contained"
                  sx={{
                    fontWeight: '600',
                    boxShadow: 'none',
                  }}
                />
              </Box>
            </Box>

            <Box className="Student-works" sx={designs.StudentWorks_Style}>
              <Typography sx={designs.StudentWorks_Typography_Style}>
                Students' Uploaded Files
              </Typography>

              <Divider sx={designs.Divider2_Style} />

              <Box
                className="Uploaded-files-container"
                sx={designs.UploadedFilesContainer_Style}
              >
                <Grid container columnSpacing={2} rowSpacing={1}>
                  {data.map(function (items, index) {
                    return (
                      <Grid item lg={4} md={6} sm={12} xs={12} key={index}>
                        <Box
                          className="Student-uploaded-file-container"
                          sx={designs.StudentUploadedFileContainer_Style}
                        >
                          <Typography
                            noWrap
                            sx={designs.StudentName_Typography_Style}
                          >
                            {items.studentName}
                          </Typography>

                          <Tooltip
                            title="Click to download file"
                            placement="top-start"
                          >
                            <Box
                              className="Attach-file"
                              sx={designs.AttachFile2_Style}
                            >
                              <img
                                src={Wordfile}
                                style={{
                                  height: '40px',
                                }}
                              />

                              <Box
                                className="Activity-filename"
                                sx={designs.ActivityFileName_Style}
                              >
                                <Typography
                                  noWrap
                                  sx={designs.ActivityFileName_Typography_Style}
                                >
                                  ACTIVITY 4.docx
                                </Typography>

                                <Typography
                                  sx={designs.DocumentFile_Typography_Style}
                                >
                                  Document File
                                </Typography>
                              </Box>
                            </Box>
                          </Tooltip>
                        </Box>
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default View_activity;
