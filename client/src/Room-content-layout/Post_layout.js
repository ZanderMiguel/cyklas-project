import React from 'react';
import {
  Typography,
  IconButton,
  Grid,
  Avatar,
  TextField,
  InputAdornment,
  Divider,
} from '@mui/material';
import { MoreVert, Send } from '@mui/icons-material';
import { Buttons as Button, Boxs as Box } from '../pages/Component';
import AvatarIcon from '../assets/ImageJaven/Avatar.png';

const styles = {
  Post: {
    className: 'Post',
    width: '100%',
    height: 'auto',
    paddingBottom: '15px',
    border: ' 2px solid #DBDBDB',
    borderRadius: '0.8em',
  },
  User_Container: {
    className: 'User_container',
    padding: '7px 25px 7px 15px',
    gap: '13px',
    display: 'flex',
    width: 'relative',
    height: 'auto',
  },
  Avatar: {
    margin: '1px 0px',
    height: '45px',
    width: '45px',
  },
  User_Date: {
    className: 'User_date',
    width: '100%',
    display: 'flex',
  },
  User: {
    className: 'User',
    width: '100%',
  },
  Username: {
    width: 'max-content',
    fontSize: '14px',
    color: '#3F3D56',
    fontWeight: '600',
  },
  Date_Container: {
    className: 'date_container',
    display: 'flex',
    marginTop: '1px',
    flexGrow: 1,
  },
  Date: {
    width: 'max-content',
    fontSize: '10px',
    color: '#3F3D56',
    fontWeight: '500',
    fontStyle: 'Italic',
  },
  Date_Seperator: {
    width: 'max-content',
    fontSize: '10px',
    color: '#3F3D56',
    fontWeight: '500',
    fontStyle: 'Italic',
    margin: '0px 5px',
  },
  Date_Time: {
    width: 'max-content',
    fontSize: '10px',
    color: '#3F3D56',
    fontWeight: '500',
    fontStyle: 'Italic',
  },
  Icon_Button_Options: {
    ariaLabel: 'options',
    height: '32px',
    width: '32px',
    margin: '8px 0px',
  },
  OptionsIcon: {
    color: '#8E8E8E',
    fontSize: '20px',
  },
  Post_Container: {
    className: 'post-container',
    padding: '20px 75px',
    width: 'relative',
    height: 'auto',
  },
  Post_Content: {
    width: 'relative',
    fontSize: '14px',
    color: '#3F3D56',
    fontWeight: '600',
  },
  Write_Comment: {
    className: 'write-comment',
    marginTop: '10px',
    padding: '0px 25px 0px 15px',
    display: 'flex',
    gap: '10px',
    width: 'relative',
    height: 'auto',
  },
  Comment_Avatar: {
    marginTop: '2px',
  },
  Textfield_Comment: {
    width: '100%',
  },
  Icon_Button_Send: {
    height: '40px',
    width: '40px',
    margin: '2px 0px',
  },
  SendIcon: {
    color: '#3F3D56',
    fontSize: '20px',
  },
};

function SamplePost() {
  const data = [
    {
      Username: 'Zander Miguel',
      date: 'November 15, 2021',
      date_Seperator: ' / ',
      Time: '9:00 AM',
      Post_Content: `This contains the content of post.This contains the content of post.
            This contains the content of post.This contains the content of post.This contains the 
            content of post.This contains the content of post.This contains the content of post.
            This contains the content of post. This contains the content of post. This contains 
            the content of post. This contains the content of post.`,
    },
    {
      Username: 'Mark Andrei',
      date: 'November 08, 2021',
      date_Seperator: ' / ',
      Time: '5:45 PM',
      Post_Content: `This contains the content of post.This contains the content of post.
            This contains the content of post.This contains the content of post.This contains the 
            content of post.This contains the content of post.This contains the content of post.
            This contains the content of post. This contains the content of post. This contains 
            the content of post. This contains the content of post.`,
    },
  ];

  return (
    <>
      {data.map(function (item, index) {
        return (
          <Grid item xs={12}>
            <Box sx={styles.Post}>
              <Box sx={styles.User_Container}>
                <Avatar alt="Remy Sharp" src={AvatarIcon} sx={styles.Avatar} />
                <Box sx={styles.User_Date}>
                  <Box sx={styles.User}>
                    <Typography sx={styles.Username}>
                      {item.Username}
                    </Typography>

                    <Box sx={styles.Date_Container}>
                      <Typography sx={styles.Date}>{item.date}</Typography>

                      <Typography sx={styles.Date_Seperator}>
                        {item.date_Seperator}
                      </Typography>

                      <Typography sx={styles.Date_Time}>{item.Time}</Typography>
                    </Box>
                  </Box>

                  <IconButton sx={styles.Icon_Button_Options}>
                    <MoreVert sx={styles.OptionsIcon} />
                  </IconButton>
                </Box>
              </Box>

              <Box sx={styles.Post_Container}>
                <Typography sx={styles.Post_Content}>
                  {item.Post_Content}
                </Typography>
              </Box>
              <Divider />
              <Box sx={styles.Write_Comment}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={styles.Comment_Avatar}
                />

                <TextField
                  id="filled-basic"
                  placeholder="Write a comment..."
                  variant="outlined"
                  sx={{}}
                  inputProps={{ style: { height: '12px', fontSize: '13px' } }} // font size of input text
                  InputLabelProps={{
                    style: {
                      fontSize: '13px',
                      color: '#8E8E8E',
                      paddingBottom: '100px',
                    },
                  }} // font size of input label
                  InputProps={{
                    disableUnderline: true, // pantanggal ng bottom outline
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="send"
                          sx={styles.Icon_Button_Send}
                        >
                          <Send sx={styles.SendIcon} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}

export default SamplePost;
