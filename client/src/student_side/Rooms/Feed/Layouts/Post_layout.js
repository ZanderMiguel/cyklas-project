import React, { useEffect } from 'react';
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
  Tooltip
} from '@mui/material';
import { Send, BorderColorOutlined, DeleteOutlineOutlined } from '@mui/icons-material';
import Comments from './Comments_layout';
import AvatarIcon from '../../../../assets/ImageJaven/Avatar.png';
import usePost from '../../../../customHooks/usePost';
import useStyles from './Styles/Post_layout_style';
import axios from 'axios';
import Schoolworktiles_layout from './Schoolworktiles_layout';
import draftToHtml from 'draftjs-to-html';
import ReactHtmlParser from 'react-html-parser';
function Post_layout({ data, socket,roomID }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleEdit = (event) => {

  };

  const handleDelete = (event, _id) => {
    console.log(_id)
    axios.delete('http://localhost:5000/announce/delete', { data: { announceID: _id } })
      .then((res) => {
        socket.emit('create-post')
        console.log(res)
      })
      .catch((error) => { console.log(error) })

  };
  const handleCloseOption = () => {
    setAnchorEl(null);
  };
  const account = Boolean(anchorEl);

  const commentContent = React.useRef(null);
  const postID = React.useRef(null);
  const { designs } = useStyles();
  const [commentId, setCommentId] = React.useState(null);

  const { post, data: comments } = usePost();

  const handleSubmitComment = () => {
    post('http://localhost:5000/comment/create', {
      announcement: postID.current,
      content: commentContent.current,
      author: {
        name: `${JSON.parse(localStorage.userData).data.user.firstName} ${JSON.parse(localStorage.userData).data.user.lastName
          }`,
        userID: JSON.parse(localStorage.userData).data.user._id,
      },
    });
    socket.emit('create-comment');
  };
  useEffect(() => {
    socket.on('post-comment', (uuid) => {
      setCommentId(uuid);
    });
  }, [socket]);

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
                  name={_id}
                  aria-label="options"
                  onClick={handleEdit}
                  sx={designs.Option_IconButton_Style}
                >
                  <Tooltip title="Edit Post" placement="top">
                    <BorderColorOutlined sx={designs.EditIcon_Style} />
                  </Tooltip>
                </IconButton>

                <IconButton
                  aria-label="options"
                  onClick={(event) => handleDelete(event, _id)}
                  sx={designs.Option_IconButton_Style}
                >
                  <Tooltip title="Delete Post" placement="top">
                    <DeleteOutlineOutlined sx={designs.DeleteIcon_Style} />
                  </Tooltip>
                </IconButton>

              </Box>

              <Box className="post-content" sx={designs.Post_Content_Style}>
                <Typography sx={designs.Post_Typography_Style}>
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

                </Typography>
              </Box>
              <Divider sx={designs.Divider_Style} />

              <Comments postId={_id} commentId={commentId} socket={socket} />

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
