import React from 'react';
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
} from '@mui/material';
import { Send, FileUploadOutlined } from '@mui/icons-material';
import AvatarIcon from '../../../../assets/ImageJaven/Avatar.png';
import Wordfile from '../../../../assets/ImageJaven/Wordfile.png';
import useStyle from './Styles/Activity_viewed_style';
import ActivityIcon from '../../../../assets/ImageJaven/ActivityIcon.png';

const data = [
  {
    memberName: 'Paul Rudd (You)',
    messageTime: '11:52 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Mark Andrei',
    messageTime: '11:53 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Paul Rudd (You)',
    messageTime: '11:55 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Mark Andrei',
    messageTime: '11:55 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Mark Andrei',
    messageTime: '11:57 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Paul Rudd (You)',
    messageTime: '11:57 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Mark Andrei',
    messageTime: '11:58 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Paul Rudd (You)',
    messageTime: '11:59 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Mark Andrei',
    messageTime: '11:59 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
  {
    memberName: 'Mark Andrei',
    messageTime: '11:59 pm',
    Message:
      'Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo Lezzzzzzzgo',
  },
];
function Activity_viewed() {
  const { designs } = useStyle();

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Grid container rowSpacing={1} columnSpacing={1}>
        <Grid item md={9} xs={12} sx={designs.Right_Container_GridItem_Style}>
          <Box className="Right-container" sx={designs.Right_Container_Style}>
            <Box className="Header" sx={designs.Header_Style}>
              <Box className="Activity-Type" sx={designs.Activity_Type_Style}>
                <img
                  src={ActivityIcon}
                  style={{
                    height: '35px',
                  }}
                />

                <Typography sx={designs.Activity_Typography_Style}>
                  Activity 5
                </Typography>
              </Box>

              <Typography sx={designs.ActivityType_Typography_Style}>
                Homework
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
                  <Typography sx={designs.ActivityPoints_Typography_Style}>
                    Points:
                  </Typography>

                  <Typography sx={designs.ActivityPoints2_Typography_Style}>
                    100
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
                  <Typography sx={designs.ActivityPoints_Typography_Style}>
                    Due Date:
                  </Typography>

                  <Typography sx={designs.ActivityPoints2_Typography_Style}>
                    November 07, 2020
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  sx={{
                    width: 'relative',
                    height: 'max-content',
                    marginBottom: '0.4em',
                  }}
                >
                  <Typography sx={designs.ActivityAuthor_Typography_Style}>
                    Mark Andrei
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: 'relative',
                    height: 'max-content',
                  }}
                >
                  <Typography sx={designs.ActivityDate_Typography_Style}>
                    posted this activity on March 18, 2020
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Divider sx={designs.DividerRight_Style} />

            <Box
              className="Activity-instructions"
              sx={designs.ActivityInstructions_Style}
            >
              <Typography
                sx={designs.ActivityInstructionsHead_Typography_Style}
              >
                First, read all directions carefully!
              </Typography>

              <Typography sx={designs.ActivityInstructions_Typography_Style}>
                Read all questions carefully and don't forget to answer all
                parts of the question.
              </Typography>

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
                      ACTIVITY 5.docx
                    </Typography>

                    <Typography sx={designs.DocumentFile_Typography_Style}>
                      Document File
                    </Typography>
                  </Box>
                </Box>
              </Tooltip>
            </Box>
          </Box>

          <Box
            className="Student-container"
            sx={designs.Student_Container_Style}
          >
            <Typography sx={designs.UploadedFiles_Typography_Style}>
              Your Uploaded Files
            </Typography>

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
                    ACTIVITY 5 - Paul Rudd.docx
                  </Typography>

                  <Typography sx={designs.DocumentFile_Typography_Style}>
                    Document File
                  </Typography>
                </Box>
              </Box>
            </Tooltip>

            <Box className="Footer" sx={designs.Footer_Style}>
              <Typography sx={designs.Status_Typography_Style}>
                Handed-out
              </Typography>

              <Box flexGrow={1} sx={designs.BoxFlexGrow_Style} />

              <Button
                sx={designs.UploadFile_Button_Style}
                startIcon={
                  <FileUploadOutlined
                    sx={designs.FileUploadOutlinedIcon_Style}
                  />
                }
              >
                Upload File
              </Button>

              {/* <Button sx={designs.UnsubmitWorks_Button_Style}>
                    Unsubmit works
                    </Button> */}

              <Button sx={designs.Submit_Button_Style}>Submit</Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={3} sx={designs.Left_Container_GridItem_Style}>
          <Box className="Left-container" sx={designs.Left_Container_Style}>
            <Typography sx={designs.MessageArea_Typography_Style}>
              Comment Area
            </Typography>

            <Divider sx={designs.Divider_Style} />

            <Box className="Message-box" sx={designs.Message_Box_Style}>
              {data.map(function (items, index) {
                return (
                  <>
                    <Box
                      key={index}
                      className="Members-comment"
                      sx={designs.Members_Comment_Style}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={AvatarIcon}
                        sx={designs.AvatarIcon_Avatar_Style}
                      />
                      <Box
                        className="Member-time"
                        sx={designs.Member_Time_Style}
                      >
                        <Typography sx={designs.MemberName_Typography_Style}>
                          {items.memberName}
                        </Typography>

                        <Typography sx={designs.MessageTime_Typography_Style}>
                          {items.messageTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography sx={designs.Message_Typography_Style}>
                      {items.Message}
                    </Typography>
                  </>
                );
              })}
            </Box>

            <Box className="Write-comment" sx={designs.Write_Comment_Style}>
              <Avatar
                alt="Remy Sharp"
                src={AvatarIcon}
                sx={designs.AvatarIcon_Avatar_Style2}
              />

              <TextField
                id="filled-basic"
                placeholder="Write a comment"
                variant="filled"
                sx={designs.Message_TextField_Style}
                inputProps={{
                  style: {
                    height: '0em',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    paddingBottom: '1.8em',
                    color: '#3F3D56',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="send"
                        sx={designs.Send_IconButton_Style}
                      >
                        <Send sx={designs.SendIcon_Style} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          sx={designs.Left_Container_GridItem_Responsive_Style}
        >
          <Box className="Left-container" sx={designs.Left_Container_Style}>
            <Typography sx={designs.MessageArea_Typography_Style}>
              Comment Area
            </Typography>

            <Divider sx={designs.Divider_Style} />

            <Box className="Message-box" sx={designs.Message_Box_Style}>
              {data.map(function (items, index) {
                return (
                  <>
                    <Box
                      key={index}
                      className="Members-comment"
                      sx={designs.Members_Comment_Style}
                    >
                      <Avatar
                        alt="Remy Sharp"
                        src={AvatarIcon}
                        sx={designs.AvatarIcon_Avatar_Style}
                      />
                      <Box
                        className="Member-time"
                        sx={designs.Member_Time_Style}
                      >
                        <Typography sx={designs.MemberName_Typography_Style}>
                          {items.memberName}
                        </Typography>

                        <Typography sx={designs.MessageTime_Typography_Style}>
                          {items.messageTime}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography sx={designs.Message_Typography_Style}>
                      {items.Message}
                    </Typography>
                  </>
                );
              })}
            </Box>

            <Box className="Write-comment" sx={designs.Write_Comment_Style}>
              <Avatar
                alt="Remy Sharp"
                src={AvatarIcon}
                sx={designs.AvatarIcon_Avatar_Style2}
              />

              <TextField
                id="filled-basic"
                placeholder="Write a comment"
                variant="filled"
                sx={designs.Message_TextField_Style}
                inputProps={{
                  style: {
                    height: '0em',
                    fontSize: '0.8em',
                    fontWeight: '500',
                    paddingBottom: '1.8em',
                    color: '#3F3D56',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="send"
                        sx={designs.Send_IconButton_Style}
                      >
                        <Send sx={designs.SendIcon_Style} />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Activity_viewed;
