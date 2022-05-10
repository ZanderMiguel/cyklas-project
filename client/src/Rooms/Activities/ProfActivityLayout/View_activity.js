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
import FileDownload from 'js-file-download';
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
        setActivityView({ ...res.data.activity, ...res.data.myFile });
        console.log({ ...res.data.activity, ...res.data.myFile });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container maxWidth="lg" sx = {{ padding: "0.5em 0em" }}>
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
          <Box
            className="Right-container"
            sx={{
              width: '100%',
              height: 'auto',
              padding: '0.5em 0em',
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
                height: '13em',
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
                          //tanginamo
                          //window.open(`http://localhost:5000/activity/download/${activityView[index].file.filename}/${activityView[index].file.contentType}`, '_blank').focus();
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
                          width: '50%',
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
            <Typography
              sx={{
                height: 'max-content',
                fontSize: '15px',
                fontWeight: '600',
                textTransform: 'Uppercase',
                color: '#6D6B85',
                width: 'auto',
                flexGrow: 1,
                margin: '0.5em 0em 1em 0em',
              }}
            >
              Student's Uploaded Files
            </Typography>

            <Tooltip title="Click to download file" placement="top-start">
              <Box
                className="Attach-file"
                sx={{
                  backgroundColor: 'white',
                  margin: '0.5em 0em 0em 0em',
                  width: '50%',
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
                            width: 'auto',
                            flexGrow: 1,
                            wordBreak: "break-all",
                            height: 'auto',
                    }}
                  >
                    ACTIVITY 5 - Paul Rudd.docx
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
          </Box>

          <Box
            className="Student-container"
            sx={{
              height: 'auto',
              width: 'relative',
              marginBottom: '1em',
              borderRadius: '0.3em 0.3em 0em 0em',
              padding: '0.3em 0em 1em 0em',
              backgroundColor: 'white',
              '&: hover': {
                boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
                borderBottom: '4px solid #007FFF',
                transition: 'all 250ms',
              },
            }}
          >
            <Typography
              sx={{
                height: 'max-content',
                fontSize: '15px',
                fontWeight: '600',
                textTransform: 'Uppercase',
                color: '#6D6B85',
                width: 'auto',
                flexGrow: 1,
                margin: '0.5em 0em 0em 0em',
                padding: '0em 1.5em',
              }}
            >
              Comment Area
            </Typography>

            <Typography
              sx={{
                height: 'max-content',
                fontSize: '0.7em',
                fontWeight: '500',
                textTransform: 'none',
                color: '#8E8E8E',
                width: 'auto',
                flexGrow: 1,
                margin: '0em 0em 1.5em 0em',
                padding: '0em 2em',
              }}
            >
              See your student's concerns about the activity.
            </Typography>

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
        </Grid>
      </Grid>
    </Container>
  );
}

export default View_activity;
