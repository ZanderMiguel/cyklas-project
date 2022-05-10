import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  Avatar,
  Tooltip,
  Input,
} from '@mui/material';
import {
  Send,
  FileUploadOutlined,
  BorderColorOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material';
import FileDownload from 'js-file-download';
import AvatarIcon from '../../../../assets/ImageJaven/Avatar.png';
import Wordfile from '../../../../assets/ImageJaven/Wordfile.png';
import ActivityIcon from '../../../../assets/ImageJaven/ActivityIcon.png';
import ReactScrollableFeed from 'react-scrollable-feed';
import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
import UploadFileTile from './UploadFileTile';

function Activity_viewed() {
  const [activityView, setActivityView] = useState(null);
  const { activityID } = useParams();
  const [submits, setSubmits] = useState(null);
  React.useEffect(() => {
    axios
      .post('http://localhost:5000/activity/get', { activityID })
      .then((res) => {
        setActivityView({ ...res.data.activity, ...res.data.myFile });
        console.log(res.data);
        axios
          .post('http://localhost:5000/activity/get/submit', {
            activityID,
            stdID: JSON.parse(localStorage.userData).data.user._id,
          })
          .then((res) => {
            setSubmits(res.data.activity);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container maxWidth = "md"  sx = {{ padding: "2em 0em" }}>
    <Grid item xs={12}>
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
                {ReactHtmlParser(draftToHtml(activityView.activityInstruction))}
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
                      padding: '0.5em 0.9em',
                      display: 'flex',
                      gap: '0.9em',
                      height: "auto",
                      alignItems: "center",
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

      <UploadFileTile submits={submits} activityID={activityID} />

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
          Send your concerns here about the activity.
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
    </Container>
  );
}

export default Activity_viewed;
