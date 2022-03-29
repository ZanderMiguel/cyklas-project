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
import { MoreVert, Send } from '@mui/icons-material';
import Comments from './Comments';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import usePost from '../../customHooks/usePost';
import useStyles from '../Styles/Announce_style';

function Post_layout({ data }) {
  const commentContent = React.useRef(null);
  const postID = React.useRef(null);
  const { designs } = useStyles();

  const { post, data: comments } = usePost();

  const handleSubmitComment = () => {
    post('http://localhost:5000/comment/create', {
      announcement: postID.current,
      content: commentContent.current,
      author: {
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        userID: JSON.parse(localStorage.userData).data.user._id,
      },
    });
  };

  return (
    <Grid item xs={12}>
      {data &&
        data.map((item, index) => {
          const { author, createdAt, content, _id } = item;

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
                      {moment(createdAt).format('MMMM DD YYYY / h:mm a')}
                    </Typography>
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
                  {content}
                </Typography>
              </Box>

              <Divider sx={designs.Divider_Style} />
              <Comments postId={_id} />
              <Divider sx={{ mb: 2 }} />
              <Box className="write-comment" sx={designs.Write_Comment_Style}>
                <Avatar
                  alt="Remy Sharp"
                  src={AvatarIcon}
                  sx={designs.AvatarComment_Style}
                />

                <TextField
                  id="filled-basic"
                  onClick={(event) => {
                    postID.current = event.target.name;
                  }}
                  name={_id}
                  placeholder="Write a comment..."
                  variant="filled"
                  onChange={(event) =>
                    (commentContent.current = event.target.value)
                  }
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
                          onClick={handleSubmitComment}
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