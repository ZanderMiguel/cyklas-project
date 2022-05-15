import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import Schoolworktiles_layout from '../Room-content-layout/Schoolworktiles_layout';

import {
  Grid,
  Box,
  Avatar,
  Typography,
  IconButton,
  Divider,
  TextField,
  InputAdornment,
  Tooltip,
  Input,
  Button,
} from '@mui/material';
import {
  Send,
  BorderColorOutlined,
  DeleteOutlineOutlined,
} from '@mui/icons-material';
import Comments from './Comments';
import AvatarIcon from '../../assets/ImageJaven/Avatar.png';
import usePost from '../../customHooks/usePost';
import useStyles from '../Styles/Announce_style';
import axios from 'axios';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';

function Post_layout({
  data,
  socket,
  roomID,
  setCommentRender,
  setPostRender,
  postRender,
  commentRender,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [commentContent, setCommentContent] = useState('');
  const postID = useRef(null);
  const { designs } = useStyles();

  const handleEdit = (event) => {};
  const handleDelete = (event, _id) => {
    axios
      .delete('http://localhost:5000/announce/delete', {
        data: { announceID: _id },
      })
      .then((res) => {
        setPostRender((prev) => !prev);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);

  const { post, data: comments } = usePost();

  const handleSubmitComment = () =>
  {
    setCommentRender((prev) => !prev)
    post('http://localhost:5000/comment/create', {
      announcement: postID.current,
      content: commentContent,
      author: {
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${
          JSON.parse(localStorage.userData).data.user.lastName
        }`,
        userID: JSON.parse(localStorage.userData).data.user._id,
        avatar: JSON.parse(localStorage.userData).data.user.image,
      },
    });
    if (comments) {
      setCommentContent( '' );
    }
    ;
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
                  src={author.avatar}
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

                {author.userID ===
                  JSON.parse(localStorage.userData).data.user._id && (
                  <>
                    {/* <IconButton
                      name={_id}
                      aria-label="options"
                      onClick={handleEdit}
                      sx={designs.Option_IconButton_Style}
                    >
                      <Tooltip title="Edit Post" placement="top">
                        <BorderColorOutlined sx={designs.EditIcon_Style} />
                      </Tooltip>
                    </IconButton> */}
                    <IconButton
                      aria-label="options"
                      onClick={(event) => handleDelete(event, _id)}
                      sx={designs.Option_IconButton_Style}
                    >
                      <Tooltip title="Delete Post" placement="top">
                        <DeleteOutlineOutlined sx={designs.DeleteIcon_Style} />
                      </Tooltip>
                    </IconButton>
                  </>
                )}
              </Box>
              {content.quizID ? (
                <Schoolworktiles_layout
                  roomID={roomID}
                  content={content.quizID}
                />
              ) : (
                <Box className="post-content" sx={designs.Post_Content_Style}>
                  {ReactHtmlParser(draftToHtml(content))}
                </Box>
              )}

              <Divider sx={designs.Divider_Style} />

              <Comments
                postId={_id}
                setCommentRender={setCommentRender}
                socket={socket}
                postRender={postRender}
                commentRender={commentRender}
              />

              <Divider sx={{ mb: 2 }} />
              <Box className="write-comment" sx={designs.Write_Comment_Style}>
                <Avatar
                  alt="Remy Sharp"
                  src={JSON.parse(localStorage.userData).data.user.image.replace(
                    'blob:',
                    ''
                  )}
                  sx={designs.AvatarComment_Style}
                />

                <Input
                  name={_id}
                  placeholder="Write a comment..."
                  onChange={(event) => setCommentContent(event.target.value)}
                  onKeyPress={(event) => {
                    event.key === 'Enter' && handleSubmitComment();
                  }}
                  onClick={(event) => {
                    postID.current = event.target.name;
                  }}
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
                  onClick={handleSubmitComment}
                  sx={{
                    fontWeight: '600',
                    boxShadow: 'none',
                  }}
                />

                {/* <TextField
                  id="filled-basic"
                  onClick={(event) => {
                    postID.current = event.target.name;
                  }}
                  name={_id}
                  placeholder="Write a comment..."
                  variant="filled"
                  value={commentContent}
                  onChange={(event) => setCommentContent(event.target.value)}
                  onKeyPress={(event) => {
                    event.key === 'Enter' && handleSubmitComment();
                  }}
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
                /> */}
              </Box>
            </Box>
          );
        })}
    </Grid>
  );
}

export default Post_layout;
