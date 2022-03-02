import React from 'react';
import moment from 'moment';
import {
  Grid,
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
} from '@mui/material';
import { MoreVert, Send, KeyboardArrowDown } from '@mui/icons-material';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import useStyles from '../Announce_style';

function Post_layout({ data }) {
  const { designs } = useStyles();
  data && console.log(data.author);
  return (
    <Grid item xs={12}>
      {data &&
        data.map((item, index) => {
          const { author, createdAt, content } = item;
          return (
            <Box className="Post" sx={designs.Post_Style} key={index}>
              <Box className="User" sx={designs.User_Style}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={designs.AvatarPost_Style}
                />
                <Box className="User-date" sx={designs.User_Date_Style}>
                  <Typography noWrap sx={designs.UserName_Typography_Style}>
                    {author.name}
                  </Typography>

                  <Box className="date" sx={designs.Date_Style}>
                    <Typography sx={designs.Date_Typography_Style}>
                      {moment(createdAt).format('MMMM Do YYYY / h:mm a')}
                    </Typography>

                    <Typography sx={designs.Time_Typography_Style}></Typography>
                  </Box>
                </Box>

                <Box sx={designs.BoxFlexGrow_Style} />

                <IconButton
                  aria-label="options"
                  sx={designs.Option_IconButton_Style}
                >
                  <MoreVert sx={designs.MoreVertIcon_Style} />
                </IconButton>
              </Box>

              <Box className="post-content" sx={designs.Post_Content_Style}>
                <Typography sx={designs.Post_Typography_Style}>
                  {content.content}
                </Typography>
              </Box>

              <Divider sx={designs.Divider_Style} />

              <Box className="View-comments" sx={designs.View_Comments_Style}>
                <Typography noWrap sx={designs.View_Comments_Typography_Style}>
                  View comments
                </Typography>
                <IconButton
                  aria-label="dropdown"
                  sx={designs.Dropdown_IconButton_Style}
                >
                  <KeyboardArrowDown sx={designs.KeyboardArrowDownIcon_Style} />
                </IconButton>
              </Box>

              <Box className="write-comment" sx={designs.Write_Comment_Style}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={designs.AvatarComment_Style}
                />

                <TextField
                  id="filled-basic"
                  placeholder="Write a comment..."
                  variant="filled"
                  sx={designs.Comment_TextField_Style}
                  inputProps={{
                    style: {
                      height: '0px',
                      fontSize: '0.9em',
                      paddingBottom: '20px',
                    },
                  }} // font size of input text
                  InputLabelProps={{
                    style: {
                      fontSize: '20px',
                      color: '#8E8E8E',
                      fontWeight: 'bold',
                      marginBottom: '5px',
                    },
                  }} // font size of input label
                  InputProps={{
                    disableUnderline: true, // pantanggal ng bottom outline
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
          );
        })}
    </Grid>
  );
}

export default Post_layout;
