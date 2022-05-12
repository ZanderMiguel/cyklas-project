import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Tooltip,
} from '@mui/material';
import CommentArea from '../../CommentArea';
import FileDownload from 'js-file-download';
import Wordfile from '../../../../assets/ImageJaven/Wordfile.png';
import Pdffile from '../../../../assets/ImageJaven/Pdffile.png';
import Excelfile from '../../../../assets/ImageJaven/Excelfile.png';
import Powerpointfile from '../../../../assets/ImageJaven/Powerpointfile.png';
import ActivityIcon from '../../../../assets/ImageJaven/ActivityIcon.png';
import moment from 'moment';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
import UploadFileTile from './UploadFileTile';

function Activity_viewed({ socket }) {
  const [activityView, setActivityView] = useState(null);
  const { activityID } = useParams();
  const [submits, setSubmits] = useState(null);
  const [commentId, setCommentId] = useState(null);

  socket.on('post-comment', (uuid) => {
    setCommentId(uuid);
  });

  React.useEffect(() => {
    axios
      .post('https://murmuring-basin-16459.herokuapp.com/activity/get', {
        activityID,
      })
      .then((res) => {
        setActivityView({ ...res.data.activity, ...res.data.myFile });
        console.log(res.data);
        axios
          .post(
            'https://murmuring-basin-16459.herokuapp.com/activity/get/submit',
            {
              activityID,
              stdID: JSON.parse(localStorage.userData).data.user._id,
            }
          )
          .then((res) => {
            setSubmits(res.data.activity);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <Container maxWidth="md" sx={{ padding: '2em 0em' }}>
      <Grid item xs={12}>
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
                    draftToHtml(JSON.parse(activityView.activityInstruction))
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
                        //window.open(`https://murmuring-basin-16459.herokuapp.com/activity/download/${activityView[index].file.filename}/${activityView[index].file.contentType}`, '_blank').focus();
                        axios
                          .get(
                            `https://murmuring-basin-16459.herokuapp.com/activity/download/${activityView[index].file.filename}`,
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
                        padding: '0.5em 0.9em',
                        display: 'flex',
                        gap: '0.9em',
                        height: 'auto',
                        alignItems: 'center',
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
                        src={
                          item?.includes('.docx')
                            ? Wordfile
                            : item?.includes('.xls')
                            ? Excelfile
                            : item?.includes('.ppt') || item?.includes('.pptx')
                            ? Powerpointfile
                            : item?.includes('.pdf') && Pdffile
                        }
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
        <CommentArea
          socket={socket}
          activityID={activityID}
          commentId={commentId}
        />
      </Grid>
    </Container>
  );
}

export default Activity_viewed;
